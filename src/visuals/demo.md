---
title: Demo
toc: false
---

# Demo

Simply use markdown to render content. You can inline js code to insert charts. The code block below:

```
const scatterData = FileAttachment("../data/loaders/test.csv").csv();
import scatter from "../components/scatter.js";
scatter(scatterData, {x: "year", y: "amount", height: 400 })
```

Produces this:

```js
import scatter from "../components/scatter.js";
```

```js
const scatterData = FileAttachment("../data/loaders/test.csv").csv();
```

```js
scatter(scatterData, {x: "year", y: "amount", height: 400 })
```

