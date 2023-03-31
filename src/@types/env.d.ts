/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_API: string
  readonly VITE_BLOG_APP_TOKEN: string
  readonly VITE_GITHUB_USERNAME: string
  readonly VITE_GITHUB_REPOSITORY_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
