// Find the Kth Largest Integer in the Array

// Example 1:

// Input: nums = ["3","6","7","10"], k = 4
// Output: "3"
// Explanation:
// The numbers in nums sorted in non-decreasing order are ["3","6","7","10"].
// The 4th largest integer in nums is "3".
// Example 2:

// Input: nums = ["2","21","12","1"], k = 3
// Output: "2"
// Explanation:
// The numbers in nums sorted in non-decreasing order are ["1","2","12","21"].
// The 3rd largest integer in nums is "2".
// Example 3:

// Input: nums = ["0","0"], k = 2
// Output: "0"
// Explanation:
// The numbers in nums sorted in non-decreasing order are ["0","0"].
// The 2nd largest integer in nums is "0".

var kthLargestNumber = function(nums, k) {
    // Convert strings to integers and sort them
    nums.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });

    // Return the kth largest integer as a string
    return nums[nums.length - k];
};

// Test cases
console.log(kthLargestNumber(["3","6","7","10"], 4)); // Output: "3"
console.log(kthLargestNumber(["2","21","12","1"], 3)); // Output: "2"
console.log(kthLargestNumber(["0","0"], 2)); // Output: "0"
