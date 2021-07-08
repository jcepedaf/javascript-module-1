/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function printStringT(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    //console.log(i);
    if (array[i][0] === "T") {
      console.log(array[i]);
    }
  }
}

printStringT(daysOfWeek);
