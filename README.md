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

If the extension still shows old UI, reset the dev build output and restart:

```bash
bun run dev:clean
```

Load the extension in Chrome:

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked** and select the `dist` folder
4. After code changes, click **Reload** on the extension card
5. Close the popup completely, then open it again

Do **not** run `bun run build` while developing — it overwrites `dist/` with a production bundle and Chrome will keep serving stale content until you run `dev:clean` again.

## Build

```bash
bun run build
```

Output goes to `dist/`. Load that folder as an unpacked extension, or zip it for distribution.

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `bun run dev`     | Start dev server with HMR |
| `bun run dev:clean` | Clear `dist/` and start dev (use when UI looks stale) |
| `bun run build`   | Type-check and build     |
| `bun run lint`    | Run ESLint               |
| `bun run preview` | Preview production build |
