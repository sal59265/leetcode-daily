function highestRank(arr) {
  let freq = 0;
  let highNum = 0;
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      freq = freq + 1;
      highNum = arr[i];
    }
  }
  return freq, highNum;
}
