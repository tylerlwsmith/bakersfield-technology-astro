# Bakersfield Technology

I built this site in 2021 when I was freelancing, and I rebuilt it multiple times to learn new technologies. It is currently built with [Astro]. You can view previous versions of the site's source code below:

- [**Next.js** Bakersfield Technology Repo](https://github.com/tylerlwsmith/bakersfieldtechnology.com)
- [**Go + Templ + Vite** Bakersfield Technology Repo](https://github.com/tylerlwsmith/go-bakersfieldtechnology)

## Developing

You'll need the following on your system to build this app:

- Node/NPM ([Installation guide](https://nodejs.org/en/download))

After cloning the repo, run the following commands:

```sh
npm install
```

Run the following command to start the development server.

```sh
npm run dev
```

## Deploying

This site runs on Cloudflare pages. To deploy the site, run the following:

```sh
npm run deploy
```

This will build the site locally and deploy it to Cloudflare. Be sure to push your changes to GitHub before you deploy to keep the repo and production site in sync.

## Additional commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
