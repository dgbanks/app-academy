function madlib(verb, adjective, noun) {
  return `We shall ${verb} the ${adjective} ${noun}`;
}

function isSubstring(string, substring) {
  return string.includes(substring);
}
// console.log(isSubstring('somethinglong', 'inglo'));

// return new array of numbers divisible by 3 or 5, NOT BOTH
function fizzbuzz(arr) {
  let result = [];
  arr.forEach(e => { if (e % 3 === 0 || e % 5 === 0) {result.push(e);} });
  return result;
}
// console.log(fizzbuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function isPrime(n) {
  if (n === 2) {
    return true;
  } else if (n < 2) {
    return false;
  }

  for (var i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// console.log(isPrime(7));
// console.log(isPrime(11));
// console.log(isPrime(12));
// console.log(isPrime(15));

function firstNPrimes(n) {
  const primes = [];
  let m = 2;
  while (primes.length !== n) {
    if (isPrime(m)) {
      primes.push(m);
    }
    m += 1;
  }
  return primes;
}

function sumOfNPrimes(n) {
  const primes = firstNPrimes(n);
  return primes.reduce((acc, e) => acc + e);
}
// console.log(sumOfNPrimes(3));

function titleize(names, callback) {

}
