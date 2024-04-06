// Q Length of Last Word

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

function lengthOfLastWord(s) {
    // Trim trailing spaces from the string
    s = s.trim();
    
    let length = 0;
    let i = s.length - 1;
    
    // Iterate from the end of the string
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }
    
    return length;
}

// Test cases
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6
