"use strict";

// Sum the even-valued Fibonacci terms below 4 million
(function sumEvenFibonacci(ceiling) {

  // generate the Fibonacci sequence until ceiling
  const SEQUENCE = (function generateFibonacci(ceiling) {
    var sequence = [0, 1]; // stores the Fibonacci sequence
    var pointer = 1; // points to the head of the stored Fibonacci sequence

    // populate the Fibonacci sequence until we exceed ceiling
    while (sequence[pointer] <= ceiling) {
      // calculate the next term
      sequence[pointer + 1] = sequence[pointer - 1] + sequence[pointer];
      // increment pointer to point to the new head
      pointer++;
    }

    // remove the last, too-big item from the generated sequence
    sequence.splice(pointer);

    return sequence;
  })(ceiling);

  // calculate the sum of even terms in the stored Fibonacci sequence
  const SUM = (function sumEven(SEQUENCE) {
    var sum = 0;
    for (const num of SEQUENCE) {
      if (num % 2 == 0) {
        sum += num;
      }
    }

    return sum;
  })(SEQUENCE);

  console.log(SUM);
})(4e6);
