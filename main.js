const yargs = require("yargs/yargs"); // cli se read karne deta hai
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

console.log(argv.output);
