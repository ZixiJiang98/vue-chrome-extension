# Vite Vue 3 Chrome Extension

A starter template for building Chrome (and Firefox) browser extensions with Vue&nbsp;3 + Vite.

## Prerequisites

- **Node.js&nbsp;20 LTS**

  The project has been tested with Node 20.x. If you use a Node version manager (e.g. `nvm`, `fnm`, `asdf`) you can switch with:

  ```bash
  nvm install 20
  nvm use 20
  ```

- **npm v10** (bundled with Node 20) or another package manager such as **pnpm** / **yarn**.

## 1. Install dependencies

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
```

## 2. Build the extension for Chrome

```bash
npm run build:chrome
```

This command creates a production build inside `dist/chrome` and, for convenience, a zip archive (`dist/chrome-<version>.zip`) that can be uploaded to the Chrome Web Store.

## 3. Load the extension in Chrome

1. Open `chrome://extensions/` in your browser.
2. Enable **Developer mode** (toggle in the top-right corner).
3. Click **Load unpacked**.
4. Select the `dist/chrome` folder generated in the previous step.
5. The extension should now appear in the list. Click the **reload** icon whenever you rebuild.

## Development workflow (hot-reload)

During development you might prefer automatic rebuilds:

```bash
npm run dev:chrome
```

The command watches the source files, rebuilds on change and writes the output to `dist/chrome`. After the first run load the folder as described above and simply refresh the extension to see your changes.

---

Happy hacking! 🎉
