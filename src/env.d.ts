/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv
  extends Readonly<Record<string, string | boolean | undefined>> {
  readonly VITE_APP_BUILDTIME: string;
  readonly VITE_APP_DEPENDENCIES: string;
  readonly VITE_APP_GITSHA: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
