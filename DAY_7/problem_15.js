// Q  Jump Game

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

var canJump = function(nums) {
    let maxReach = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false; // If the current index is beyond the maximum reachable index, return false
        
        maxReach = Math.max(maxReach, i + nums[i]); // Update the maximum reachable index
        if (maxReach >= nums.length - 1) return true; // If the maximum reachable index reaches the last index, return true
    }
    
    return false;
};

// Test cases
console.log(canJump([2,3,1,1,4])); // Output: true
console.log(canJump([3,2,1,0,4])); // Output: false
