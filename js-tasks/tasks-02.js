//----------= Обов'язкові =----------

// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
  return string.split(" ");
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
  // return dna.split("").map((nucleotide) => nucleotide === "T" ? "U" : nucleotide).join("");
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

//  https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  const minVal = Math.min(...arr);
  return toReturn === "value" ? minVal : arr.indexOf(minVal);
}

//----------= Додаткові =----------

// Double Integer    https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

// Century From Year    https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

function century(year) {
  return Math.ceil(year / 100);
}

// Multyply two numbers    https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript

function multiply(num1, num2) {
  return num1 * num2;
}

// Make negative    https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  return -Math.abs(num);
}

// Cockroach speed    https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript

function cockroachSpeed(s) {
  return Math.floor((s / 3600) * 100000);
}

// Angle of triangle    https://www.codewars.com/kata/5a023c426975981341000014/train/javascript

function otherAngle(a, b) {
  return 180 - (a + b);
}

// Twice as old    https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// Return n-th even number    https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

function nthEven(n) {
  return n * 2 - 2;
}

// What's the real floor     https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(n) {
  return n - (n <= 0 ? 0 : n >= 13 ? 2 : 1);
}

// Clock    https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s) {
  return ((h * 60 + m) * 60 + s) * 1000;
}

// Is n divisible by x and y    https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

function isDivisible(n, x, y) {
  return !(n % x) && !(n % y);
  // return (n % x === 0 && n % y === 0) ? true : false;
}

//----------= Поглиблені =----------

// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
  const wolfId = queue.reverse().indexOf("wolf");
  return wolfId === 0
    ? "Pls go away and stop eating my sheep"
    : "Oi! Sheep number " + wolfId + "! You are about to be eaten by a wolf!";
}

// https://www.codewars.com/kata/beginner-lost-without-a-map

function maps(x) {
  return x.map((x) => x * 2);
}

// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] - arr[i - 1] !== 1) return arr[i];
  }
  return null;
}
