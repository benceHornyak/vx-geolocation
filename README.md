# vx-geolocation

> Tracks user's location via reactive variables :world_map:

## Install

```sh
npm install vx-geolocation
```

## Usage

Using this tiny package is fairly simple:

```typescript
import { useGeolocation } from "vx-geolocation";
...
// then you can call the hook
const { position, error } = useGeolocation();
```

## Documentation

Under the hood a Browser API is used to get the location data (See: [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API) for more info).

The hook returns two reactive variables: `positions` and `error`.

There is a small `App.vue` file so you can play with it easily locally.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
