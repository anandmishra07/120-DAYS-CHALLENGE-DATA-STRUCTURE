//  Next Permutation


// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]
// Example 3:

// Input: nums = [1,1,5]
// Output: [1,5,1]

var nextPermutation = function(nums) {
    let i = nums.length - 2;
    // Step 1
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    // Step 2
    if (i >= 0) {
        let j = nums.length - 1;
        while (j >= 0 && nums[i] >= nums[j]) {
            j--;
        }
        swap(nums, i, j);
    }
    // Step 3
    reverse(nums, i + 1);
};

function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

function reverse(nums, start) {
    let i = start, j = nums.length - 1;
    while (i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
}

// Example usage:
let nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums); // Output: [1, 3, 2]

nums = [3, 2, 1];
nextPermutation(nums);
console.log(nums); // Output: [1, 2, 3]

nums = [1, 1, 5];
nextPermutation(nums);
console.log(nums); // Output: [1, 5, 1]
