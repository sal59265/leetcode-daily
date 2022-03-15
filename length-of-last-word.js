/**
 * @param {string} s
 * @return {number}
 */
 let lengthOfLastWord = function(s) {
    let trimmed = s.trim();
    let totalLength = trimmed.length;
    let lastSpace = trimmed.lastIndexOf(" ");
    return (totalLength - lastSpace -1);
};