import { DateTime } from "luxon";

const timeNow = DateTime.now();
const { year, month, day } = timeNow;

console.log("DD-MM-YYYY:", timeNow.toFormat("dd-MM-yyyy"));
console.log("MMM Do YY:", timeNow.toFormat("LLL d yy"));
console.log("dddd:", timeNow.toFormat("cccc"));
