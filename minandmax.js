function minAndMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (const a of arr) {
    if (min > a) {
      min = a;
    }

    if (max < a) {
      max = a;
    }
  }

  return [min, max];
}

console.log(minAndMax([17, 5, 10, 2, 20, 12, 11, 16, 14, 9])); // [2, 20]
console.log(minAndMax([6, 7, 16, 11, 12, 10, 9, 4, 1, 15])); // [1, 16]
