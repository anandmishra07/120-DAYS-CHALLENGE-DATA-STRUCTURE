// Q Remove Duplicates from Sorted Array II

// Example 1:

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).




function removeDuplicates(nums) {
    let count = 1; // Initialize count to 1 as the first element is always considered unique
    let index = 1; // Start index from 1
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            count++; // Increment count if current element is equal to the previous one
        } else {
            count = 1; // Reset count if current element is different from previous one
        }
        
        if (count <= 2) {
            nums[index++] = nums[i]; // Place the current element in the correct position
        }
    }
    
    return index; // Return the length of the modified array
}

// Example usage:
let nums1 = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums1)); // Output: 5, nums1 = [1, 1, 2, 2, 3, _]

let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums2)); // Output: 7, nums2 = [0, 0, 1, 1, 2, 3, 3, _, _]
