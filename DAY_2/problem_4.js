
// Q  Reverse String

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Swap characters at left and right pointers
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        // Move the pointers towards the center
        left++;
        right--;
    }
    
    return s;
}

// Example usage:
const input1 = ["h","e","l","l","o"];
console.log(reverseString(input1)); // Output: ["o","l","l","e","h"]

const input2 = ["H","a","n","n","a","h"];
console.log(reverseString(input2)); // Output: ["h","a","n","n","a","H"]
