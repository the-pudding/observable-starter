---
title: Tutorial
---

# Tutorial

A quick tutorial of where to put things.

## Data

### Raw

Put raw data in the **`src/data/raw`** directory. You can use this directly and/or transform it via loaders.

### Loaders
Create data processing/transforming files in the **`src/data/loaders`** directory. This can do the heavy lifting to generate visual-ready data.

## Components
Create reusable functions and chart code in the **`src/components`** directory.

## Visuals
Pages (like this) go in the **`src/visuals`** directory. Technically you can put markdown files for pages anywhere, but to keep it simple you can put them here.

You can use the js code snippet markdown to call run different loaders and components. There are a few Observable Framework-centric things here, so be sure to check out the [docs](https://observablehq.com/framework/what-is-framework).
````
```js
// code here
```
````

## Integration
Todo. This will outline how to bring in this repo as a submodule to transfer data to front-end story.

