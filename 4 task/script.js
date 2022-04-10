const arr = [4, 5, 3, 6, 7, 1, 2, 9, 8];

function sortingNumbes(array) {
  let evenArr = array.filter(num => num % 2 === 0).sort((a, b) => a - b);
  let oddArr = array.filter(num => num % 2 !== 0).sort((a, b) => b - a);

  let sorted = evenArr.concat(oddArr);
  return sorted;
}

console.log(sortingNumbes(arr));
