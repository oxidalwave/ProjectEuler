/*
Problem 1 -- Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

let problem1 = value => {
    const IsMultipleOf = (value, divisor) => value % divisor === 0; 

    let sum = 0;

    const max = value;
    const divisors = [ 3, 5 ];

    for(let i = 0; i < max; i++) {
        //If at least one item in divisors divides i
        if(divisors.reduce((prev, cur) => (prev || (IsMultipleOf(i, cur))), false)) {
            sum += i;
        }
    }
    return sum;
};

/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

let problem2 = maxInclusiveValue => {
    //0-indexed
    const fib = index =>
        index === 0
            ? 1
            : index === 1
                ? 1
                : fib(index - 1) + fib(index - 2);

    let sum = 0;
    for(let i = 0; fib(i) < maxInclusiveValue; i++) {
        let value = fib(i);
        sum += value % 2 === 0
            ? value
            : 0; 
    }

    return sum;
}

/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

let problem3 = product => {
    let currentCandidate = Math.ceil(Math.sqrt(product));

    const IsPrime = number => {
        if(number === 1) { return false; }
        if(number === 2) { return true; }
        if(number % 2 === 0) { return false; }

        let boundary = Math.ceil(Math.sqrt(number));

        for(let i = 3; i <= boundary; i += 2) {
            if(number % i === 0) { return false; }
        }
        return true;
    };

    while(!(IsPrime(currentCandidate) && product % currentCandidate === 0)) {
        --currentCandidate;
    }

    return currentCandidate;
}

/*
A palindromic number reads the same both ways.The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

let problem4 = digits => {
    const IsPalindromic = value => (value.toString() === value.toString().split('').reverse().join(''));

    let max = 0;

    for(let i = Math.pow(10, digits - 1); i < Math.pow(10, digits); i++) {
        for(let j = Math.pow(10, digits - 1); j < Math.pow(10, digits); j++) {
            if(i * j > max && IsPalindromic(i * j)) {
                max = i * j;
            }
        }
    }

    return max;
}

/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?
*/

let problem5 = (min, max) => {
    const MaxValueIn = values => {
        let max = values[0];
        values.forEach(value => {
            if(value > max) {
                max = value;
            }
        });
        return max;
    };

    const SmallestMultiple = values => {
        for(let i = MaxValueIn(values); true; i += MaxValueIn(values)) {
            let found = true;
            values.forEach(value => {
                if(i % value != 0) {
                    found = false;
                }
            });
            if(found) {
                return i;
            }
        }
    };

    let values = [];
    for(let i = min; i < max; ++i) {
        values.push(i);
    }

    let smallestMultiple = SmallestMultiple(values);

    return smallestMultiple;
}