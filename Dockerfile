# syntax=docker/dockerfile:1.7

ARG NODE_IMAGE=node:22-alpine

FROM ${NODE_IMAGE} AS build
WORKDIR /app
ENV NODE_ENV=production
RUN corepack enable && corepack prepare pnpm@9.12.2 --activate
COPY package.json pnpm-lock.yaml* ./
RUN --mount=type=cache,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile --prefer-offline --prod=false || pnpm install --prefer-offline --prod=false
COPY . .
RUN pnpm build

FROM ${NODE_IMAGE} AS runner
WORKDIR /app
ENV NODE_ENV=production \
    PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH
# Enable pnpm and prepare a writable global bin dir
RUN corepack enable && corepack prepare pnpm@9.12.2 --activate && \
    mkdir -p "$PNPM_HOME" && chown -R node:node "$PNPM_HOME"
USER node
# Install a tiny static server globally using pnpm with a cached store for speed
RUN --mount=type=cache,target=/home/node/.pnpm-store pnpm add -g serve@14.2.3
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
