import * as d3 from "d3";
import fs from "fs";

export function readCSV(csvFilePath, { encoding = "utf8" } = {}) {
  const data = d3.csvParse(fs.readFileSync(csvFilePath, encoding));
  return data;
}

export function readJSON(jsonFilePath, { encoding = "utf8" } = {}) {
  const data = JSON.parse(fs.readFileSync(jsonFilePath, encoding));
  return data;
}

export function writeJSON(data, { replacer = null, space = 2 } = {}) {
  process.stdout.write(JSON.stringify(data, replacer, space));
}

export function writeCSV(data) {
  process.stdout.write(d3.csvFormat(data));
}
