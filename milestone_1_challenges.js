// Challenge 1: Return the sum of two numbers
// Create a function called addition that takes two numbers as arguments and returns their sum.

function addition(num1, num2) {
  //function declaration
  console.log(num1 + num2);
}
addition(3, 5); // 8

let addition2 = function (num1, num2) {
  //tried function expression
  console.log(num1 + num2);
};
addition(-6, 9); // 3

let addition3 = (num1, num2) => console.log(num1 + num2); //tried arrow function, which was the tricky one
addition3(4, 4); // 8

// -----------------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 2: Convert minutes into seconds
// Write a function called convert that takes an integer minutes and converts it to seconds.

//in essence 1min = 60 seconds
let convert = function (mins) {
  let secs = mins * 60; // used a local scope variable declaration(learnt tdy)
  console.log(`${mins} minutes = ${secs} seconds`); // used string literals
};
convert(5); // 5 minutes = 300 seconds
convert(2); // 2 minutes = 120 seconds

// -----------------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 3: Perimeter of a rectangle
// Create a function that takes length and width and finds the perimeter of a rectangle.

let findPerimeter = (length, width) =>
  console.log(
    "Rectangle of length:" +
      length +
      " and width:" +
      width +
      " has perimeter:" +
      2 * (length + width)
  );
findPerimeter(6, 7); // Rectangle of length:6 and width:7 has perimeter:26
findPerimeter(20, 10); // Rectangle of length:20 and width:10 has perimeter:60

// -----------------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 4: Check Negative
// Write a function called isNegative that takes a number as it's only argument, the function should return true if the passed number is a negative number and false if the passed number is not a negative number.

let isNegative = function (number) {
  if (number < 0) {
    console.log("true");
  } else {
    console.log("false");
  }
};
isNegative(-23); // true
isNegative(55); // false

// -----------------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 5: Can I Drive
// Write a function that takes in a person's name and age. If they're 18 or older, return a message like 'Alice is old enough to drive.' If they're younger, return 'Bob is not old enough to drive yet.'

function driverAbility(name, age) {
  if (age >= 18) {
    console.log(`${name} is old enough to drive drive`);
  } else {
    console.log(`${name} is not old enough to drive yet`);
  }
}
driverAbility("Jane", 22); // Jane is old enough to drive drive
driverAbility("June", 12); // June is not old enough to drive yet

// -----------------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 6: Largest Number
// Write a function called findLargest(a, b, c) that takes three numbers and returns the largest of the three.

function findLargest(a, b, c) {
  if (a > b) {
    if (a > c) {
      console.log(`largest = ${a}`);
    } else {
      console.log(`largest = ${c}`);
    }
  } else {
    if (b > c) {
      console.log(`largest = ${b}`);
    } else {
      console.log(`largest = ${c}`);
    }
  }
}
findLargest(5, 9, 3); // largest = 9
findLargest(10, 10, 10); // largest = 10
findLargest(-1, -5, -3); // largest = -1

// -----------------------------------------------------------------------
console.log("---------------------------------------------------------");
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

let calculateBMI = function (weight, height) {
  let BMI = weight / (height * height);
  if (BMI < 18.5) {
    console.log(`Your BMI is ${BMI.toFixed(1)} - Underweight`); // just learnt that '.toFixed(1)' specifies the decimal places
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log(`Your BMI is ${BMI.toFixed(1)} - Normal weight`);
  } else if (BMI >= 25 && BMI <= 29.9) {
    console.log(`Your BMI is ${BMI.toFixed(1)} - Overweight`);
  } else if (BMI >= 30) {
    console.log(`Your BMI is ${BMI.toFixed(1)} - Obese`);
  }
};
calculateBMI(68, 1.75); // Your BMI is 22.2 - Normal weight
calculateBMI(85, 1.8); // Your BMI is 26.2 - Overweight

// -----------------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 8: Greeting Based on time
// Write a function called greetUser(name, hour) that returns a personalized greeting based on the hour of the day.
// The name is a string representing the user's name.
// The hour is a number from 0 to 23, representing the current hour in 24-hour format.
// Return a greeting like:
// "Good morning, Alice!" if the hour is between 5 and 11
// "Good afternoon, Alice!" if the hour is between 12 and 17
// "Good evening, Alice!" if the hour is between 18 and 21
// "Good night, Alice!" if the hour is 22–4

function greetUser(name, hour) {
  if (hour >= 5 && hour <= 11) {
    console.log(`Good morning, ${name}!`);
  } else if (hour >= 12 && hour <= 17) {
    console.log(`Good afternoon, ${name}!`);
  } else if (hour >= 18 && hour <= 21) {
    console.log(`Good evening, ${name}!`);
  } else if (hour >= 22 && hour <= 24) {
    console.log(`Good night, ${name}!`);
  } else {
    console.log(`Hello ${name}, it's kinda early!`);
  }
}
greetUser("Johnson", 22); // Good night, Johnson!
greetUser("Mary", 10); // Good morning, Mary!

// -----------------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 9: FizzBuzz
// Write a function called fizzBuzzCheck(number) that takes a number and returns:
// "Fizz" if the number is divisible by 3
// "Buzz" if the number is divisible by 5
// "FizzBuzz" if it’s divisible by both 3 and 5
// If it’s divisible by neither, return the number itself as a string

let fizzBuzzCheck = function (number) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
};
fizzBuzzCheck(3); // Fizz
fizzBuzzCheck(10); //Buzz
fizzBuzzCheck(15); //FizzBuzz
fizzBuzzCheck(7); //7

// -----------------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 10: Perimeter2
// Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
// Use the following formulas:
// Perimeter of a square: 4 _ side. Perimeter of a circle: 6.28 _ radius.

function shapePerimeter(letter, number) {
  if (letter == "s") {
    let perimeter = 4 * number;
    console.log("Perimeter of the square is " + perimeter);
  } else if (letter == "c") {
    let perimeter = 6.28 * number;
    console.log("Perimeter of the circle is " + perimeter);
  } else {
    console.log("Wrong shape letter!"); // added this: if the letter is neither 'c' or 's'.
  }
}
shapePerimeter("s", 7); //28
shapePerimeter("c", 4); //25.12

// -----------------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 11: Sum of Even Numbers
// Write a function called sumEvenNumbers(n) that takes a number n and returns the sum of all even numbers from 1 up to and including n.

let sumEvenNumbers = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    } else {
      continue;
    }
  }
  console.log(sum);
};
sumEvenNumbers(6); // 12
sumEvenNumbers(10); // 30
sumEvenNumbers(5); // 6

// -----------------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 12: Multiply by self
// Write a function called powerUp(num, times) that takes two numbers and returns the result of multiplying num by itself times times using only a loop and arithmetic operators (no Math.pow() allowed).

function powerUp(num, times) {
  let result = 1;
  if (times != 0) {
    for (i = 0; i < times; i++) {
      result *= num;
    }
  } else {
    result = 1;
  }
  console.log(result);
}
powerUp(2, 3); // 8
powerUp(5, 0); // 1
powerUp(3, 4); // 81
powerUp(0); // 1

// -----------------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 13: Factorial Calculator
// Write a function called factorial(n) that takes a non-negative integer n and returns the factorial of n — that’s the product of all positive integers from 1 up to n. By definition, factorial of 0 is 1.

let factorial = function (n) {
  if (n >= 0) {
    let result = 1;
    for (let i = 1; i <= n; ++i) {
      result = result * i;
    }
    console.log(result);
  } else {
    console.log("The number you entered is a negative value!");
  }
};
factorial(0); // 1
factorial(4); // 24
factorial(6); // 720
factorial(-3); // The number you entered is a negative number

// -----------------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 14: Multiple Sum
// Write a function called sumMultiples(n, divisor) that returns the sum of all numbers from 1 up to n that are divisible by divisor.

function sumMultiples(n, divisor) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (i % divisor == 0) {
      result = result + i;
    } else {
      continue;
    }
  }
  console.log(result);
}
sumMultiples(10, 2); // 30
sumMultiples(15, 3); // 45
sumMultiples(7, 5); // 5

// -----------------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 15: Sum of Digits
// Write a function called sumDigits(num) that takes a positive integer and returns the sum of its digits.
// Constraints:
// You cannot convert the number to a string or use arrays.
// Use arithmetic operators and loops only.

let sumDigits = function (num) {
  let sum = 0;
  for (let i = 0; num > 0; i++) {
    sum += num % 10;
    num = Math.floor(num / 10); // This is an entirely new method I picked up
  }
  console.log(sum);
};
sumDigits(123); // 6
sumDigits(4567); // 22
sumDigits(0); // 0
