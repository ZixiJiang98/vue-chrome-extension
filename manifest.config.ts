import { env } from "node:process"
import type { ManifestV3Export } from "@crxjs/vite-plugin"
import packageJson from "./package.json" with { type: "json" }

const { version, name, description, displayName } = packageJson
// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch, label = "0"] = version
  // can only contain digits, dots, or dash
  .replace(/[^\d.-]+/g, "")
  // split into version parts
  .split(/[.-]/)

export default {
  name: env.mode === "staging" ? `[INTERNAL] ${name}` : displayName || name,
  description,
  // up to four numbers separated by dots
  version: `${major}.${minor}.${patch}.${label}`,
  // semver is OK in "version_name"
  version_name: version,
  manifest_version: 3,
  // key: '',
  action: {
    default_popup: "src/ui/action-popup/index.html",
  },
  background: {
    service_worker: "src/background/index.ts",
    type: "module",
  },
  content_scripts: [
    {
      all_frames: false,
      js: ["src/content-script/index.ts"],
      matches: ["*://*/*"],
      run_at: "document_end",
    },
    {
      all_frames: false,
      js: ["src/content-script/floating-button.ts"],
      matches: ["*://*/*"],
      run_at: "document_end",
    },
  ],
  side_panel: {
    default_path: "src/ui/side-panel/index.html",
  },
  devtools_page: "src/devtools/index.html",
  offline_enabled: true,
  host_permissions: ["<all_urls>"],
  permissions: ["storage", "tabs", "background", "sidePanel"],
  web_accessible_resources: [],
  icons: {
    16: "src/assets/favicon.png",
    24: "src/assets/favicon.png",
    32: "src/assets/favicon.png",
    128: "src/assets/favicon.png",
  },
} as ManifestV3Export
