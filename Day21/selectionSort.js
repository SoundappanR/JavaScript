//

// Largest number in array

let num = [2, 3, 4, 1, 6, 7];
let max = num[0];
for (let i = 0; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
  }
}
console.log(max);

// smallest number in array

let num1 = [2, 3, 4, 1, 6, 7];
let min = num[0];
for (let i = 0; i < num1.length; i++) {
  if (num1[i] < min) {
    min = num[i];
  }
}
console.log(min);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
      }
    }
    let minIndex = arr.indexOf(min);

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log(arr);
}

selectionSort([7, 6, 1, 3, 4, 2, 5]);
