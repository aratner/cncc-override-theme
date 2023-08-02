# cncc-override-theme 1.0

Quick start toolkit for building Interactive Overrides in Copilot.

## What's Inside?

- Astro
- React
- Tailwind
- React Markdown
- Swiper
- Nanostores

## Start A New Project

To create a new copy of this theme copy and past the prompt below into your terminal.

```
npm create astro@latest -- --template aratner/cncc-override-theme
```

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   ├── components/
│   │   └── PictureResponsive.tsx
│   │   └── PictureRetina.tsx
│   │   └── Swiper.jsx
│   ├── stores/
│   │   └── PreviewStore.js
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Useful Components

- PictureResponsive
- PictureRetina
- Swiper
- PreviewStore

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Preview Mode

### Strapi API

### PreviewStore

### Building For Preview

Update `astro.config.mjs`

```
outDir: `../../public/${folderName}/preview`,
build: { assetsPrefix: `https://interactive.[BRAND].com/${folderName}/preview/`}
```

## Building For Copilot

Update `astro.config.mjs`

```
outDir: `../../public/${folderName}`,
build: { assetsPrefix: `https://interactive.[BRAND].com/${folderName}/`}
```

Run the Unwrapper script (removes body + head tags)

```
node unwrapper.js
```
