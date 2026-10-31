export const PLATFORM_URL = "https://platform.ets-gcc.org"
export const REGISTER_URL = `${PLATFORM_URL}/register`
export const LOGIN_URL = `${PLATFORM_URL}/login`
// Empty in dev: Vite proxies /v1 to the local backend (vite.config.ts).
export const API_URL = import.meta.env.VITE_API_URL ?? "https://api.ets-gcc.org"
