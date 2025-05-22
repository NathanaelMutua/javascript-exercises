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

function findLongestWord(array){
  let longest = 0;
  let longestWord = null;
  for (let i = 0; i < array.length; i++){
    let item = array[i];
    if (item.length > longest){
      longest = item.length;
      longestWord = array[i];
    }
  }
  console.log(longestWord)
}
findLongestWord(["apple", "banana", "pear", "grapefruit"]) // grapefruit

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 5: Count Properties

let countProperties = function(object){
  const keys = Object.keys(object); // got this function from a array/object tutorial
  console.log(keys.length +" properties: "+ keys)
}
countProperties({ name: "Alice", age: 25, city: "Paris" }) // 3

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 6: Filter by Length

function filterByLength(array, minLength){
  let filteredArray = []
  for (let i = 0; i < array.length; i++){
    let string = array[i];
    if (string.length >= minLength){
      filteredArray.push(string)
    }
  }
  return filteredArray // I wanted to try out return, wasn't really familiar with it
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5)) // returns: ["giraffe", "hippo", "elephant"]

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 7: Sum of Even Numbers

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 8: Difference Between Sum of Even and Odd Numbers

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 9: Count Truthy

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 10: Average of Numbers

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 11: Linear Search

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
