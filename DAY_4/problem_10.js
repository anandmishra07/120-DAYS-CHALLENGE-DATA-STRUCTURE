// Q Longest Common Prefix

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; 
  
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i]; 
       
        for (let j = 1; j < strs.length; j++) {
     
            if (strs[j][i] !== char || i >= strs[j].length) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
};

// Test cases
console.log(longestCommonPrefix(["flower","flow","flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));    // Output: ""
