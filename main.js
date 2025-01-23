// Parse command line arguments
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
const argv = yargs(hideBin(process.argv)).argv;

// Custom functions
import { readCSV } from "./lib/utils.js";
import { validateName, validateHeaders, validateURL } from "./lib/validate.js";

const { data, headers } = readCSV(argv.input);

// MARK: Validate Headers
validateHeaders(
  ["Website URL", "Employee Size", "LinkedIn Profile URL", "Company Name"],
  headers
);

// MARK: Validate Rows
data.forEach((row) => {
  validateName(row["Company Name"]);
  console.log(validateURL(row["LinkedIn Profile URL"]));
});
