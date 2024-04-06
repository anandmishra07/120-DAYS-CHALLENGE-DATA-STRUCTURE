
// Q Merge Sorted Array

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

const merge = function(nums1, m, nums2, n) {
    let i = m - 1,
        j = n - 1,
        k = m + n - 1;
    
    while (i >= 0 && j >= 0) {
        nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
    
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
};

// Define input arrays
const nums1 = [1, 2, 3, 0, 0, 0]; // Example: array with enough space to accommodate nums2
const nums2 = [2, 5, 6];
const m = 3; // Length of nums1
const n = 3; // Length of nums2

// Call the merge function
merge(nums1, m, nums2, n);

// Log the merged array nums1
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]


