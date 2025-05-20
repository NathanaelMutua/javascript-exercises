// Challenge 1: Return the sum of two numbers
// Create a function called addition that takes two numbers as arguments and returns their sum.

function addition(num1, num2){ //function declaration
    console.log(num1 + num2);
}
addition(3, 5);

let addition2 = function(num1, num2){ //tried function expression
    console.log(num1 + num2);
}
addition(-6, 9);

let addition3 = (num1, num2) => console.log(num1 + num2); //tried arrow function, which was the tricky one
addition3(4, 4);

// -----------------------------------------------------------------------
console.log("---------------------------------------------------------")
// Challenge 2: Convert minutes into seconds
// Write a function called convert that takes an integer minutes and converts it to seconds.

//in essence 1min = 60 seconds
let convert = function(mins){
    let secs = mins * 60; // used a local scope variable declaration(learnt tdy)
    console.log(`${mins} minutes = ${secs} seconds`) // used string literals
}
convert(5);
convert(2);

// -----------------------------------------------------------------------
console.log("---------------------------------------------------------")
// Challenge 3: Perimeter of a rectangel
// Create a function that takes length and width and finds the perimeter of a rectangle.



// -----------------------------------------------------------------------
console.log("---------------------------------------------------------")
// Challenge 4: Check Negative
// Write a function called isNegative that takes a number as it's only argument, the function should return true if the passed number is a negative number and false if the passed number is not a negative number.



// -----------------------------------------------------------------------
console.log("---------------------------------------------------------")
// Challenge 5: Can I Drive
// Write a function that takes in a person's name and age. If they're 18 or older, return a message like 'Alice is old enough to drive.' If they're younger, return 'Bob is not old enough to drive yet.'



// -----------------------------------------------------------------------
console.log("---------------------------------------------------------")
// Challenge 6: Largest Number
// Write a function called findLargest(a, b, c) that takes three numbers and returns the largest of the three.



// -----------------------------------------------------------------------
console.log("---------------------------------------------------------")
// Challenge 7: BMI Calculator
// Write a function called calculateBMI(weight, height) that calculates the Body Mass Index (BMI) using the following formula:
// BMI = weight / (height * height)
// Where:
// weight is in kilograms (kg)
// height is in meters (m)
// The function should return a string that includes the BMI and the corresponding BMI category based on the value:
// BMI Range	Category
// Less than 18.5	Underweight
// 18.5 – 24.9	Normal weight
// 25 – 29.9	Overweight
// 30 or more	Obese



// -----------------------------------------------------------------------
console.log("---------------------------------------------------------")
// Challenge 8: Greeting Based on time
// Write a function called greetUser(name, hour) that returns a personalized greeting based on the hour of the day.
// The name is a string representing the user's name.
// The hour is a number from 0 to 23, representing the current hour in 24-hour format.
// Return a greeting like:
// "Good morning, Alice!" if the hour is between 5 and 11
// "Good afternoon, Alice!" if the hour is between 12 and 17
// "Good evening, Alice!" if the hour is between 18 and 21
// "Good night, Alice!" if the hour is 22–4



// -----------------------------------------------------------------------
console.log("---------------------------------------------------------")
// Challenge 9: FizzBuzz
// Write a function called fizzBuzzCheck(number) that takes a number and returns:
// "Fizz" if the number is divisible by 3
// "Buzz" if the number is divisible by 5
// "FizzBuzz" if it’s divisible by both 3 and 5
// If it’s divisible by neither, return the number itself as a string



// -----------------------------------------------------------------------
console.log("---------------------------------------------------------")
// Challenge 10: Perimeter2
// Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
// Use the following formulas:
// Perimeter of a square: 4 _ side. Perimeter of a circle: 6.28 _ radius.



// -----------------------------------------------------------------------
console.log("---------------------------------------------------------")
// Challenge 11: Sum of Even Numbers
// Write a function called sumEvenNumbers(n) that takes a number n and returns the sum of all even numbers from 1 up to and including n.



// -----------------------------------------------------------------------
// Challenge 12: Multiply by self
// Write a function called powerUp(num, times) that takes two numbers and returns the result of multiplying num by itself times times using only a loop and arithmetic operators (no Math.pow() allowed).



// -----------------------------------------------------------------------
console.log("---------------------------------------------------------")
// Challenge 13: Factorial Calculator
// Write a function called factorial(n) that takes a non-negative integer n and returns the factorial of n — that’s the product of all positive integers from 1 up to n. By definition, factorial of 0 is 1.



// -----------------------------------------------------------------------
console.log("---------------------------------------------------------")
// Challenge 14: Multiple Sum
// Write a function called sumMultiples(n, divisor) that returns the sum of all numbers from 1 up to n that are divisible by divisor.



// -----------------------------------------------------------------------
console.log("---------------------------------------------------------")
// Challenge 15: Sum of Digits
// Write a function called sumDigits(num) that takes a positive integer and returns the sum of its digits.
// Constraints:
// You cannot convert the number to a string or use arrays.
// Use arithmetic operators and loops only.