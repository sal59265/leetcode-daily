/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function(numRows) {
    let triangle = [];
    if(numRows === 0) {
        return triangle;
    }
    
    triangle.push([1]);
    for(let i = 1; i<numRows;i++) {
        let prevRow = triangle[i -1];
        let newRow = [];
        newRow.push(1);
        for(let j = 1; j < prevRow.length; j++) {
            newRow.push(prevRow[j-1] + prevRow[j]);
            //referring to the previous row and getting the number from indice of current and one before
        }
        newRow.push(1);
        triangle.push(newRow)
    }
    return triangle;
};