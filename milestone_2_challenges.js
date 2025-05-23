// Challenge 1: Sum of Positives

function sumOfPositives(array) {
  let sum = 0;
  let iterations = array.length;
  for (let i = 0; i < iterations; i++) {
    if (array[i] > -1) {
      sum += array[i];
    } else {
      continue;
    }
  }
  console.log(sum);
}
sumOfPositives([1, -3, 5, -2, 9, -8]); // 15

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 2: Find Maximum Value

let findMax = function (array) {
  let largest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  console.log(largest);
};
findMax([3, 7, 2, 9, 5]); // returns: 9

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 3: Election Winner

function findWinner(object) {
  let maxVotes = 0;
  let winner = null;
  for (let i = 0; i < object.length; i++) {
    let candidate = object[i];
    if (candidate.votes > maxVotes) {
      maxVotes = candidate.votes;
      winner = candidate;
    }
  }
  console.log(winner);
}
const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 },
];
findWinner(candidates); // { name: "Bob", votes: 75 }

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 4: Longest Word

function findLongestWord(array) {
  let longest = 0;
  let longestWord = null;
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (item.length > longest) {
      longest = item.length;
      longestWord = array[i];
    }
  }
  console.log(longestWord);
}
findLongestWord(["apple", "banana", "pear", "grapefruit"]); // grapefruit

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 5: Count Properties

let countProperties = function (object) {
  const keys = Object.keys(object); // got this function from a array/object tutorial
  console.log(keys.length + " properties: " + keys);
};
countProperties({ name: "Alice", age: 25, city: "Paris" }); // 3

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 6: Filter by Length

function filterByLength(array, minLength) {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    let string = array[i];
    if (string.length >= minLength) {
      filteredArray.push(string);
    }
  }
  return filteredArray; // I wanted to try out return, wasn't really familiar with it
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5)); // returns: ["giraffe", "hippo", "elephant"]

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 7: Sum of Even Numbers

let sumEvenNumbers = function(array){
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 == 0){
      sum += array[i];
    }
  }
  console.log(sum)
}
sumEvenNumbers([1, 2, 3, 4, 5, 6]) // returns: 12

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 8: Difference Between Sum of Even and Odd Numbers

function differenceEvenOdd(array){
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 == 0){
      sumEven += array[i];
    } else {
      sumOdd += array[i];
    }
  }
  let sumDifferenceEvenAndOdd = sumEven - sumOdd; //slightly concerned that it can give negative values.
  console.log(sumDifferenceEvenAndOdd)
}
differenceEvenOdd([1, 2, 3, 4, 5, 6])// returns: 3

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 9: Count Truthy

function countTruthy(object){
  let truthyCount = 0;
  let values = Object.values(object);
  for (let i = 0; i < values.length; i++){
    if(values[i] == "null" || values[i] == "0" || values[i] == "false" || values[i] == ""){
      continue
    } else {
      truthyCount++;
    }
  }
  console.log(truthyCount)
}
countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }) // returns: 2

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 10: Average of Numbers

// average = sum / number of items
function average(array){
  let sumOfItems = 0;
  for(let i = 0; i < array.length; i++){
    sumOfItems += array[i];
  }
  let averageOfArray = 0;
  if (array.length != 0){
    averageOfArray = sumOfItems / array.length;
  } else{
    averageOfArray = 0;
  }
  console.log(averageOfArray)
}
average([2, 4, 6, 8]) // returns: 5
average([]) // returns: 0

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 11: Linear Search

function linearSearch(array, value){
  let firstValueOccurrence = -1;
  for (let i = 0; i < array.length; i++){
    if (array[i] === value){
      firstValueOccurrence = i;
      break
    }
  }
  console.log(firstValueOccurrence)
}
linearSearch([5, 3, 7, 1, 4], 7)  // returns: 2
linearSearch([5, 3, 7, 1, 4], 10) // returns: -1

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 12: Reverse Linear Search

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 13: Linear Search All Indices

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 14: Count Occurences

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 15: Remove Duplicate

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 16: Most Frequent
