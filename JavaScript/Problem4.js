//A palindromic number reads the same both ways.The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.

const IsPalindromic = value => (value.toString() === value.toString().split("").reverse().join(""))

let max = 0

for(let i = 100; i < 1000; i++)
{
	for(let j = 100; j < 1000; j++)
	{
		if(i * j > max && IsPalindromic(i * j))
		{
			max = i * j
		}
	}
}

console.log(max)
//906609