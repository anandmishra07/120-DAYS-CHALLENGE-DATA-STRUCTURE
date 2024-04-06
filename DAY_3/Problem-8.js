//  3Sum

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array
    
    const result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) { // Avoid duplicate triplets
            let left = i + 1;
            let right = nums.length - 1;
            const target = -nums[i];
            
            while (left < right) {
                const sum = nums[left] + nums[right];
                
                if (sum === target) {
                    result.push([nums[i], nums[left], nums[right]]);
                    
                    while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
                    while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
                    
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    
    return result;
};

// Test cases
console.log(threeSum([-1,0,1,2,-1,-4])); // Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // Output: []
console.log(threeSum([0,0,0])); // Output: [[0,0,0]]
