# WebStyle

A browser extension that lets you customize the UI of any website. Built with React, TypeScript, Vite, and Tailwind CSS.

## Tech stack

- [Vite](https://vite.dev/) + [@crxjs/vite-plugin](https://crxjs.dev/vite-plugin) for extension bundling and HMR
- [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Zustand](https://zustand.docs.pmnd.rs/) for state management

## Project structure

```
public/manifest.json   # Extension manifest (MV3)
popup.html             # Popup entry HTML
src/
  popup/               # React popup UI
  background/          # Service worker
  content/             # Content scripts injected into pages
```

## Development

Install dependencies:

```bash
bun install
```

Start the dev server:

```bash
bun run dev
```

Load the extension in Chrome:

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked** and select the `dist` folder

CRXJS rebuilds the extension on file changes. Reload the extension from `chrome://extensions` when needed.

## Build

```bash
bun run build
```

Output goes to `dist/`. Load that folder as an unpacked extension, or zip it for distribution.

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `bun run dev`     | Start dev server with HMR |
| `bun run build`   | Type-check and build     |
| `bun run lint`    | Run ESLint               |
| `bun run preview` | Preview production build |
