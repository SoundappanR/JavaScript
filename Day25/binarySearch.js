let nums = [4, 5, 7, 12, 19, 32, 37, 89];
let target = 7;
let start = 0;
let end = nums.length - 1;
let foundAt = -1;
while (start <= end) {
  let middle = Math.floor((start + end) / 2);
  if (target === nums[middle]) {
    foundAt = middle;
    break;
  } else if (target < nums[middle]) {
    end = middle - 1;
  } else {
    start = middle + 1;
  }
}
console.log(foundAt);
