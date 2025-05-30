# Javascript Exercises

This repo contains a collection of challenges, within two milestones:
- [Milestone 1](#variables-data-types-operators-string-concatenations-functions-and-scope): 
    Contains basic challenges on variables, data typles, operators, strings, functions and scope.
- [Milestone 2](#basic-data-structures): 
    Contains challenges on data structures such as objects.


# Variables, Data Types, Operators, String Concatenations, Functions and Scope

These challenges will help you to solidify your understanding of JavaScript fundamentals — from declaring variables and working with data types to mastering functions and scope.

**Table of Contents**

- [Variables, Data Types, Operators, String Concatenations, Functions and Scope](#variables-data-types-operators-string-concatenations-functions-and-scope)

  - [1. Return the Sum of Two Numbers](#1-return-the-sum-of-two-numbers)
  - [2. Convert Minutes into Seconds](#2-convert-minutes-into-seconds)
  - [3. Perimeter of a Rectangle](#3-perimeter-of-a-rectangle)
  - [4. Check Negative](#4-check-negative)
  - [5. Can I Drive](#5-can-i-drive)
  - [6. Largest Number](#6-largest-number)
  - [7. BMI Calculator](#7-bmi-calculator)
  - [8. Greeting Based On Time](#8-greeting-based-on-time)
  - [9. FizzBuzz](#9-fizzbuzz)
  - [10. Perimeter 2](#10-perimeter-2)
  - [11. Sum of Even Numbers](#11-sum-of-even-numbers)
  - [12. Multiply by Itself](#12-multiply-by-itself)
  - [13. Factorial Calculator](#13-factorial-calculator)
  - [14. Multiple Sum](#14-multiple-sum)
  - [15. Sum of Digits](#15-sum-of-digits)


## 1. Return the Sum of Two Numbers

Create a function called `addition` that takes two numbers as arguments and returns their sum.

```js
addition(3, 5); // 8
addition(-6, 9); // 3
```

## 2. Convert Minutes into Seconds

Write a function called `convert` that takes an integer minutes and converts it to seconds.

```js
convert(5); // 300
convert(2); // 120
```

## 3. Perimeter of a Rectangle

Create a function that takes length and width and finds the perimeter of a rectangle.

```js
findPerimeter(6, 7); // 26
findPerimeter(20, 10); // 60
```

## 4. Check Negative

Write a function called `isNegative` that takes a number as it's only argument, the function should return true if the passed number is a negative number and false if the passed number is not a negative number.

```js
checkNegative(-23); // true
checkNegative(55); // false
```

## 5. Can I Drive

Write a function that takes in a person's name and age. If they're 18 or older, return a message like 'Alice is old enough to drive.' If they're younger, return 'Bob is not old enough to drive yet.'

```js
canDrive("Jane", 22); // Jane is old enough to drive
canDrive("June", 12); // June is not old enough to drive yet
```

## 6. Largest Number

Write a function called `findLargest(a, b, c)` that takes three numbers and returns the largest of the three

```js
findLargest(5, 9, 3); // 9
findLargest(10, 10, 10); // 10
findLargest(-1, -5, -3); // -1
```

## 7. BMI Calculator

Write a function called calculateBMI(weight, height) that calculates the Body Mass Index (BMI) using the following formula:

> `BMI = weight / (height * height)`

Where:

`weight` is in kilograms (kg)

`height` is in meters (m)

The function should return a string that includes the BMI and the corresponding BMI category based on the value:
| BMI Range | Category |
| -------------- | ------------- |
| Less than 18.5 | Underweight |
| 18.5 – 24.9 | Normal weight |
| 25 – 29.9 | Overweight |
| 30 or more | Obese |

```js
calculateBMI(68, 1.75); //Your BMI is 22.2 - Normal weight
calculateBMI(85, 1.8); // Your BMI is 26.2 - Overweight
```

## 8. Greeting Based On Time

Write a function called `greetUser(name, hour)` that returns a personalized greeting based on the hour of the day.

- The `name` is a string representing the user's name.
- The `hour` is a number from 0 to 23, representing the current hour in 24-hour format.

Return a greeting like:

- `"Good morning, Alice!"` if the hour is between 5 and 11
- `"Good afternoon, Alice!"` if the hour is between 12 and 17
- `"Good evening, Alice!"` if the hour is between 18 and 21
- `"Good night, Alice!"` if the hour is 22–4

## 9. FizzBuzz

Write a function called fizzBuzzCheck(number) that takes a number and returns:

- `"Fizz"` if the number is divisible by 3
- `"Buzz"` if the number is divisible by 5
- `"FizzBuzz"` if it’s divisible by both 3 and 5
- If it’s divisible by neither, return the number itself as a string

```js
fizzBuzzCheck(3); // "Fizz"

fizzBuzzCheck(10); // "Buzz"

fizzBuzzCheck(15); // "FizzBuzz"

fizzBuzzCheck(7); // "7"
```

## 10. Perimeter 2

Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.

Use the following formulas:

> Perimeter of a square: 4 _ side.
> Perimeter of a circle: 6.28 _ radius.

```js
perimeter("s", 7); //28
perimeter("c", 4); //25.12
```

## 11. Sum of Even Numbers

Write a function called `sumEvenNumbers(n)` that takes a number `n` and returns the sum of all even numbers from 1 up to and including `n`.

```js
sumEvenNumbers(6); // 12  (2 + 4 + 6)
sumEvenNumbers(10); // 30  (2 + 4 + 6 + 8 + 10)
sumEvenNumbers(5); // 6   (2 + 4)
```

## 12. Multiply by Itself

Write a function called `powerUp(num, times)` that takes two numbers and returns the result of multiplying `num` by itself `times` times using only a loop and arithmetic operators (no `Math.pow()` allowed).

```js
powerUp(2, 3); // 8  (2 * 2 * 2)
powerUp(5, 0); // 1  (anything to the zero power is 1)
powerUp(3, 4); // 81 (3 * 3 * 3 * 3)
powerUp(0); // 1
```

## 13. Factorial Calculator

Write a function called `factorial(n)` that takes a non-negative integer n and returns the factorial of `n` — that’s the product of all positive integers from 1 up to n.
By definition, factorial of 0 is 1.

```js
factorial(0); // 1
factorial(4); // 24  (1 * 2 * 3 * 4)
factorial(6); // 720 (1 * 2 * 3 * 4 * 5 * 6)
```

## 14. Multiple Sum

Write a function called `sumMultiples(n, divisor)` that returns the sum of all numbers from 1 up to `n` that are divisible by `divisor`.

```js
sumMultiples(10, 2); // 30  (2 + 4 + 6 + 8 + 10)
sumMultiples(15, 3); // 45  (3 + 6 + 9 + 12 + 15)
sumMultiples(7, 5); // 5
```

## 15. Sum of Digits

Write a function called `sumDigits(num)` that takes a positive integer and returns the sum of its digits.

Constraints:

- You cannot convert the number to a string or use arrays.
- Use arithmetic operators and loops only.

```js
sumDigits(123);   // 6   (1 + 2 + 3)
sumDigits(4567);  // 22  (4 + 5 + 6 + 7)
sumDigits(0);     // 0

**Hint:**
- Use % (modulo) to get the last digit.
- Use integer division (like `Math.floor(num / 10)`) to chop off the last digit.
- Repeat until the number becomes 0.


```

# Basic Data Structures

These challenges will help you to solidify your understanding of basic data structures in JavaScript.

**Table of Contents** 

- [Basic Data Structures](#basic-data-structures)
  - [Instructions](#instructions)
    - [Pro Tips](#pro-tips)
  - [1. Sum of Positives](#1-sum-of-positives)
  - [2. Find Maximum Value](#2-find-maximum-value)
  - [3. Election winner](#3-election-winner)
  - [4. Longest word](#4-longest-word)
  - [5. Count Properties](#5-count-properties)
  - [6. Filter by Length](#6-filter-by-length)
  - [7. Sum of Even Numbers](#7-sum-of-even-numbers)
  - [8.  Difference Between Sum of Even and Odd Numbers](#8--difference-between-sum-of-even-and-odd-numbers)
  - [9. Count Truthy](#9-count-truthy)
  - [10. Average of Numbers](#10-average-of-numbers)
  - [11. Linear Search](#11-linear-search)
  - [12. Reverse Linear Search](#12-reverse-linear-search)
  - [13. Linear Search All Indices](#13-linear-search-all-indices)
  - [14. Count Occurrences](#14-count-occurrences)
  - [15. Remove Duplicates](#15-remove-duplicates)
  - [16. Most Frequent](#16-most-frequent)

## 1. Sum of Positives
Write a function called `sumOfPositives` that takes an array of numbers and returns the sum of all the positive numbers in the array.

```js
sumOfPositives([1, -3, 5, -2, 9, -8]
); // 15
```

## 2. Find Maximum Value
Write a function called `findMax` that takes an array of numbers and returns the maximum number in the array. Don’t use built-in functions like `Math.max()`.
```js
findMax([3, 7, 2, 9, 5])
// returns: 9
```

## 3. Election winner
Write a function called `findWinner` that takes an array of objects. Each object has two properties: `name` (string) and `votes` (number). The function should return the object representing the candidate with the highest number of votes. Assume there’s always one clear winner (no ties).
```js
const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 }
];

findWinner(candidates)
// returns: { name: "Bob", votes: 75 }

```

## 4. Longest word
Write a function called `findLongestWord` that takes an array of strings and returns the longest string in the array. If there are multiple words with the same maximum length, return the first one that appears.

```js
findLongestWord(["apple", "banana", "pear", "grapefruit"])
```
Hint:
- The length of a string refers to the number of characters in the string, for example, "john" has a length of 4.
- You can get the length of string using the `.length` property, for example, `'john'.length` returns 4.

```js
findLongestWord(["apple", "banana", "pear", "grapefruit"])
// returns: "grapefruit"
```

## 5. Count Properties
Write a function called `countProperties` that takes an object and returns the number of properties (keys) it has.

```js
countProperties({ name: "Alice", age: 25, city: "Paris" })
// returns: 3
```

## 6. Filter by Length
Write a function called `filterByLength` that takes an array of strings and a number `minLength`. Return a new array containing only the strings that are equal to or longer than `minLength`.

```js
filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5)
// returns: ["giraffe", "hippo", "elephant"]
```

## 7. Sum of Even Numbers
Write a function called `sumEvenNumbers` that takes an array of numbers and returns the sum of all even numbers in the array.

```js
sumEvenNumbers([1, 2, 3, 4, 5, 6])
// returns: 12  // because 2 + 4 + 6 = 12
```

## 8.  Difference Between Sum of Even and Odd Numbers
Write a function called `differenceEvenOdd` that takes an array of numbers and returns the difference between the sum of even numbers and the sum of odd numbers.

```js
differenceEvenOdd([1, 2, 3, 4, 5, 6])
// returns: 3  // (2 + 4 + 6) - (1 + 3 + 5) = 12 - 9 = 3
```

## 9. Count Truthy
Write a function called `countTruthy` that takes an object and returns the number of properties that have truthy values.
```js
countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null })
// returns: 2  // "hello" and 42 are truthy
```

## 10. Average of Numbers
Write a function called `average` that takes an array of numbers and returns their average. Return `0` if the array is empty.
```js
average([2, 4, 6, 8])
// returns: 5

average([])
// returns: 0
```

## 11. Linear Search
Write a function called `linearSearch` that takes an array and a value. It should return the index of the first occurrence of the value in the array. If the value is not found, return `-1`.

```js
linearSearch([5, 3, 7, 1, 4], 7)  // returns: 2
linearSearch([5, 3, 7, 1, 4], 10) // returns: -1
```

## 12. Reverse Linear Search
Write a function called `reverseLinearSearch` that takes an array and a value. It should return the index of the last occurrence of the value in the array. If the value is not found, return `-1`.

```js
reverseLinearSearch([5, 3, 7, 1, 4, 7], 7)  // returns: 5
reverseLinearSearch([5, 3, 7, 1, 4], 10)    // returns: -1
```

## 13. Linear Search All Indices
Write a function called `linearSearchAll` that takes an array and a value. It should return an array of all the indices where the value appears. If the value isn’t found, return an empty array.

```js
linearSearchAll([5, 3, 7, 1, 4, 7], 7)  // returns: [2, 5]
linearSearchAll([5, 3, 7, 1, 4], 10)    // returns: []
```

## 14. Count Occurrences
Write a function called `countOccurrences` that takes an array of strings and returns an object where each key is a string from the array and the corresponding value is the number of times it appears.

```js
countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])
// returns: { apple: 3, banana: 2, orange: 1 }
```

## 15. Remove Duplicates
Write a function called `removeDuplicates` that takes an array and returns a new array with all duplicate values removed. Preserve the original order of elements.

```js
removeDuplicates([1, 2, 3, 2, 4, 1, 5])
// returns: [1, 2, 3, 4, 5]
```

## 16. Most Frequent
Write a function called `mostFrequent` that takes an array and returns the value that appears most frequently. If there’s a tie, return any one of the most frequent values.

```js
mostFrequent([1, 2, 2, 3, 3, 3, 4])
// returns: 3

mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"])
// returns: "apple"
```