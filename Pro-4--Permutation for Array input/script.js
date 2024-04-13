/* Problem Description
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/


// Solution
function permutation(nums) {
  const result = [];

  function backtrack(current, remaining) {
    if (remaining.length === 0) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
        current.push(remaining[i])
        const newRemaining = [...remaining]
        newRemaining.splice(i,1)

        backtrack(current, newRemaining)

        current.pop()
    }
  }
  backtrack([],nums)

  return result;
}

// Test Caes 1
console.log(permutation([1,2,3])) 
// Output
// [[1,2,3],[1,3,2],[2,3,1],[2,1,3],[3,2,1],[3,1,2]]

// Test case 2
console.log(permutation([0,1]))
//output
//[[0,1],[1,0]]

//Test case 3
console.log(permutation([1]))
//output
// [[1]]