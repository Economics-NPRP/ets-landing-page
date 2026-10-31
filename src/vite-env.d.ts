/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Backend origin for /v1 calls; defaults to https://api.ets-gcc.org, empty = same origin. */
  readonly VITE_API_URL?: string
}
