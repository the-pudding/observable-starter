import * as Plot from "../../_node/@observablehq/plot@0.6.16/index.bac1276b.js";

export default function scatter(
  data,
  { x = "x", y = "y", width, height } = {}
) {
  return Plot.plot({
    width,
    height,
    marks: [
      Plot.ruleY([0]),
      Plot.dot(data, {
        x: (d) => +d[x],
        y: (d) => +d[y],
      }),
    ],
    grid: true,
    x: { label: x },
    y: { label: y },
  });
}
