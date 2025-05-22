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

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 5: Count Properties

// ---------------------------------------------------------------
console.log("---------------------------------------------------------");
// Challenge 6: Filter by Length

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
