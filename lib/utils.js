// Core node modules
import fs from "fs";

// Deal with csv parsing
import Papa from "papaparse";

// MARK: readCSV
// Read csv and parse it, returns headers and data
export function readCSV(file) {
  // Read file in text
  const data = fs.readFileSync(file, "utf-8");

  // Parse csv
  const output = Papa.parse(data, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
  });

  return {
    headers: output.meta.fields,
    data: output.data,
  };
}
