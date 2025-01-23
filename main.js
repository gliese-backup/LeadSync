// Parse command line arguments
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const { readCSV, validateHeaders } = require("./lib/utils");

const { csvData, headers } = readCSV(argv.input);

validateHeaders(
  ["Company Name", "Website URL", "LinkedIn Profile URL", "Employee Size"],
  headers
);
