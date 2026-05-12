/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_DASHBOARD_URL?: string;
	readonly VITE_ALLOW_LOCAL_DASHBOARD?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
