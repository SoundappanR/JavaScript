// Bubble sort is a slow algorithm

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

bubbleSort([6, 7, 1, 3, 2, 5]); //[ 1, 2, 3, 5, 6, 7 ]
