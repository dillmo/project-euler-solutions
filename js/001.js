"use strict";

// print the sum of the multiples of 3 or 5 below 1000
(function sumMultiplesOf3Or5(ceiling) {
  const STEP = 15; // multiples of 3 or 5 repeat every 15 numbers
  const MULTIPLES = [0, 3, 5, 6, 9, 10, 12]; // multiples of 3 or 5 (mod 15)
  const SUM_OF_MULTIPLES = 45;

  // calculate ceiling div 15
  // this tells us how many times the multiples of 3 or 5 cycle
  const QUOTIENT = Math.floor(ceiling / STEP);

  // each multiple of 3 or 5 is some number plus a multiple of 15
  // calculate the sum of most of those multiples of 15 using n(n+1)/2
  var cumulSteps = MULTIPLES.length * STEP * QUOTIENT * (QUOTIENT - 1) / 2;

  // all the multiples (mod 15) are repeated at least quotient times
  var cumulMultiples = QUOTIENT * SUM_OF_MULTIPLES;
  // some multiples are repeated one more time
  for (const M of MULTIPLES) {
    if (M < ceiling % STEP) {
      cumulMultiples += M;
      // add the remaining multiples of 15 as well
      cumulSteps += QUOTIENT * STEP;
    }
  }

  // We separated the multiples of 15 from the multiples (mod 15) to make the
  // math easier. Adding them back together gives us the total sum.
  const SUM = cumulSteps + cumulMultiples;
  console.log(SUM);
})(1000);
