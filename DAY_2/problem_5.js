
// Q Contains Duplicate
// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


var containsDuplicate = function(nums) {
    // Create an empty object to store encountered numbers
    const encountered = {};
    
    // Iterate through the array
    for (let num of nums) {
        // If the number is already in the encountered object, return true
        if (encountered[num]) {
            return true;
        } else {
            // Otherwise, mark the number as encountered
            encountered[num] = true;
        }
    }
    
    // If no duplicate is found, return false
    return false;
};

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Output: true
console.log(containsDuplicate([1,2,3,4])); // Output: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // Output: true
