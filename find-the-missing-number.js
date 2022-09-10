let nums = [8, 3, 5, 2, 4, 6, 0, 1];

console.log('im starting')
  let i = 0;
  const n = nums.length;
  while(i < n) {
    let j = nums[i];
    if (nums[i] < n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
    } else {
      i++;
    }
  }
  let array = [];
  for( let i = 0; i < nums.length; i++) {
    if( i !== nums[i]) {
      array.push(i);
    }
  }
  if(array) {
    console.log(array)
  } else {
    console.log(-1);
  }