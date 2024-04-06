// Q Valid Parentheses

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

function isValid(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let char of s) {
        if (char in pairs) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (!top || pairs[top] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

// Test cases
console.log(isValid("()"));        // Output: true
console.log(isValid("()[]{}"));    // Output: true
console.log(isValid("(]"));        // Output: false
