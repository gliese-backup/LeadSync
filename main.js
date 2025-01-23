const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const inputFile = argv.input;
const outputFile = argv.output;

const fs = require("fs");
const dataBuffer = fs.readFileSync(inputFile);
const data = dataBuffer.toString();
console.log(data);
