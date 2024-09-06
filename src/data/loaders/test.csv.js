import { readCSV, writeCSV } from "./../../components/io.js";

const data = readCSV("src/data/raw/test.csv");

const processed = data.map((d) => ({
  ...d,
  group: Math.random() < 0.5,
}));

writeCSV(processed);
