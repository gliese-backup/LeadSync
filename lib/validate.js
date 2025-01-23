import { exit } from "process";
import validator from "validator";

// MARK: validateHeaders
// Checks for valid headers, if not found will stop the program
export function validateHeaders(headers, requiredHeaders) {
  // Headers length should be equal to required headers
  if (headers.length !== requiredHeaders.length) {
    console.log("Headers length not equal, exiting ❌");
    exit();
  }

  // All headers should be there
  for (let header of requiredHeaders) {
    if (!headers.includes(header)) {
      console.log(`Header ${header} is not valid, exiting ❌`);
      exit();
    }
  }

  console.log("All headers match, proceeding with execution ✔️");
}

// MARK: validateName
export function validateName(name) {
  // Name must not be empty
  if (name.trim().length === 0) {
    console.log(`${name} is not valid, exiting ❌`);
    return false;
  }

  // Must not contain a URL signature
  if (name.includes("http") || name.includes("www")) {
    console.log(`${name} is not valid, exiting ❌`);
    return false;
  }

  console.log(`${name} is valid, proceeding further`);
}

// MARK: validateURL
export function validateURL(url) {
  return validator.isURL(url);
}

// MARK: validateLinkedinURL
export function validateLinkedIn(url) {
  return validator.isURL(url) && url.includes("linkedin");
}
