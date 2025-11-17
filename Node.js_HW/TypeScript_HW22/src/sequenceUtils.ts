export function generateFibonacci(limit: number): number[] {
  const result = [0, 1];
  while (result[result.length - 1] < limit) {
    const next = result[result.length - 1] + result[result.length - 2];
    result.push(next);
  }
  return result.filter((n) => n <= limit);
}

export function generatePrimeNumbers(limit: number): number[] {
  const primes: number[] = [];

  for (let num = 2; num <= limit; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) primes.push(num);
  }

  return primes;
}
