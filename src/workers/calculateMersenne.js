function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

function calculateMersennePrimes() {
  let n = 2;
  while (true) {
    const mersenneNumber = Math.pow(2, n) - 1;
    if (isPrime(mersenneNumber)) {
      postMessage(mersenneNumber);
    }
    n++;
  }
}

onmessage = (e) => {
  if (e.data === "start") {
    calculateMersennePrimes();
  }
};
