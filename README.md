# cncc-override-theme 1.0

Quick start toolkit for building Interactive Overrides in Copilot.

## What's Inside?

- [Astro](https://docs.astro.build/en/getting-started/) - Static site generator
- [React](https://react.dev/) - UI framework
  - [Radix](https://www.radix-ui.com/) - Component library
  - [React Markdown](https://github.com/remarkjs/react-markdown)
  - [Swiper](https://swiperjs.com/)
- [Tailwind](https://tailwindcss.com/docs/installation) - Styling
  - [Fluid Type Plugin](https://github.com/davidhellmann/tailwindcss-fluid-type)
- [Nanostores](https://github.com/nanostores/nanostores) - State manager

## Start A New Project

To create a new copy of this theme copy and past the prompt below into your terminal.

```
npm create astro@latest -- --template aratner/cncc-override-theme
```

## Project Structure

Inside of your project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   ├── components/
│   │   └── PictureResponsive.tsx
│   │   └── Swiper.jsx
│   ├── stores/
│   │   └── PreviewStore.js
│   └── pages/
│       └── index.astro
└── package.json
```

## Useful Components

- `PictureResponsive` - Responsive picture element for Copilot photos
- `VideoInline` - Inline video element for Copilot clips
- `Swiper` - Content slider

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

## Building For Copilot

Update `astro.config.mjs`

```
outDir: `../../public/${folderName}`,
build: { assetsPrefix: `https://interactive.[BRAND].com/${folderName}/`}
```

Run the Unwrapper script (removes html, head, title, meta, body tags)

```
node unwrapper.js
```

## Preview Mode

#### Strapi API

#### PreviewStore

#### Building For Preview
