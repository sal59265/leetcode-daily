/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let squares = Array(nums).fill(0);
    let left = 0;
    let right = nums.length - 1;
    let highestSquareIdx = nums.length - 1;
    while(left <= right) {
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];
        if(leftSquare > rightSquare) {
            squares[highestSquareIdx] = leftSquare;
            left += 1;
        } else {
            squares[highestSquareIdx] = rightSquare;
            right -= 1;
        }
        highestSquareIdx -= 1;
    }
    return squares
};