// Core node modules
const fs = require("fs");
const { exit } = require("process");

// Deal with csv parsing
const Papa = require("papaparse");

// Read csv and parse it, returns headers and data
function readCSV(file) {
  const data = fs.readFileSync(file, "utf-8");
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

// Checks for valid headers, if not found will stop the program
function validateHeaders(headers, requiredHeaders) {
  if (headers.length !== requiredHeaders.length) {
    console.log("Headers length not equal, exiting ❌");
    exit();
  }

  for (let header of requiredHeaders) {
    if (!headers.includes(header)) {
      console.log(`Header ${header} is not valid, exiting ❌`);
      exit();
    }
  }

  console.log("All headers match, proceeding with execution ✔️");
}

module.exports = {
  readCSV,
  validateHeaders,
};
