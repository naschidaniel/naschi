# naschi.at [![build](https://github.com/naschidaniel/naschi/actions/workflows/build.yml/badge.svg)](https://github.com/naschidaniel/naschi/actions/workflows/build.yml)

![Logo naschi.at](./public/NaschiLogo.png "naschi.at")

Visit my personal website [https://naschi.at](https://naschi.at).

## Project setup
```
yarn
```

## Optimize Images for Development and Production

Place the v0.5.0 release of the [image-optimizer](https://github.com/naschidaniel/image-optimizer) for your system in the root directory. For local development, the original images are used.

```
yarn optimize-images
```

### Development
#### Compiles and hot-reloads for development
```
yarn dev
```

#### Lints and fixes files
```
yarn lint
```

### Production
#### Compiles and minifies for production
```
yarn build

# preview of latest build
yarn preview
```

## Changelog

- 2022-08-01 migrate from a [Vue3](https://vuejs.org/) SPA to a [Astro.build](https://astro.build/) and [Vue3](https://vuejs.org/) MPA
- 2021-09-27 use recommended vite template vue-ts 
- 2021-08-03 replace npm with yarn
- 2021-07-15 Update to Vue3, Vite and Typescript
