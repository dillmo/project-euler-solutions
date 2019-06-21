"use strict";

// print the largest prime factor of 600851475143
(function printLargestPrimeFactor(number) {
  // generate a list of primes < sqrt(number) using the Sieve of Eratosthenes
  const PRIMES = (function sieveOfEratosthenes(number) {
    const primes = [];

    // start from 2 (1st prime), end at sqrt(number) (largest potential factor)
    for (let i = 2; i < Math.sqrt(number); i++) {
      // check if i is prime using the Sieve
      let isPrime = true;
      {
        let j = 0;
        while (isPrime && j < primes.length) {
          if (i % primes[j] === 0) {
            isPrime = false;
          }
          j++;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }

    return primes;
  })(number);

  // find the largest factor of number in the list of primes
  const LARGEST_PRIME_FACTOR = (function largestFactor(number, numberList) {
    // reverse the list so we can start from the largest number
    for (const POTENTIAL_FACTOR of numberList.reverse()) {
      if (number % POTENTIAL_FACTOR === 0) {
        return POTENTIAL_FACTOR;
      }
    }
    return 1;
  })(number, PRIMES);

  console.log(LARGEST_PRIME_FACTOR);
})(600851475143);
