/* Problem Description

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input

Test Case 1
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Test case 2
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Test case 3
Input: candidates = [2], target = 1
Output: []
*/

// Solution given below

function combinationSum(candidates, target) {
  const result = [];

  // candidates.sort((a, b) => a - b); //Elements in a combination (a1, a2, …, ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).

  function backtrack(start, target, path) {
    if (target < 0) return;

    if (target === 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > target) break;
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      path.push(candidates[i]);
      backtrack(i, target - candidates[i], path);
      path.pop();
    }
  }

  backtrack(0, target, []);

  return result;
}

// Test case 1
console.log(combinationSum([2, 3, 6, 7], 7));
// Output
// [[2,2,3],[7]]

// Test case 2
console.log(combinationSum([2, 3, 5], 8));
// Output
// [[2,2,2,2],[3,5],[2,3,3]]

// Test case 3
console.log(combinationSum([2], 1));
// Output
// []
