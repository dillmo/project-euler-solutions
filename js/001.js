"use strict";

// print the sum of the multiples of 3 or 5 below 1000
// TODO: only the last cycle is necessary
//       the sum of the rest is a linear function
(function sumMultiplesOf3Or5(ceiling) {
  var sum = 0;
  var multiples = [0, 3, 5, 6, 9, 10, 12]; // multiples of 3 or 5 (mod 15)
  var base = 0; // a multiple of 15 added every time the 0-14 cycle repeats

  // cycle through multiples until we hit ceiling
  for (let i = 0; multiples[i] + base < ceiling; i = (i + 1) % 7) {
    sum += multiples[i] + base;
    // increment base at the end of every cycle
    if (i === 6) {
      base += 15;
    }
  }

  console.log(sum);
})(1000);
