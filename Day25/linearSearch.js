// let and const are block scope

// Time complexity --> O(n)

let nums = [1, 2, 3, 4, 5];

let target = 12;

let isAvailable = false;

for (num of nums) {
  if (num === target) {
    isAvailable = true;
  }
}

if (isAvailable) console.log("Found");
else console.log("Not found");

let foundAt = -1;

for (let i = 0; i < nums.length; i++) {
  if (num[i] === target) {
    foundAt = i;
  }
}

console.log(foundAt);
