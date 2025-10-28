import "./src/errors.js";

function getCount(str) {
  //   const glasn = ["a", "e", "i", "o", "u"];
  const arrStr = str.toLowerCase().split("");
  console.log(arrStr);
  let sum = 0;

  for (let i = 0; i <= arrStr.length; i++) {
    const w = arrStr[i];
    if (w === "a" || w === "e" || w === "i" || w === "o" || w === "u") {
      sum++;
    }
  }

  //   for (let i = 0; i < arrStr.length; i++) {
  //     if (arrStr[i].includes("a")) {
  //       sum++;
  //     } else if (arrStr[i].includes("e")) {
  //       sum++;
  //     } else if (arrStr[i].includes("i")) {
  //       sum++;
  //     } else if (arrStr[i].includes("o")) {
  //       sum++;
  //     } else if (arrStr[i].includes("u")) {
  //       sum++;
  //     } else {
  //       return sum;
  //     }
  //   }

  return sum;
}

console.log(getCount("Abracadabra"));
