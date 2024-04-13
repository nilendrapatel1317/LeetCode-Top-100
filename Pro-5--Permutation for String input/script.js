/* Problem Description
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:
Input: ABSG
Output: ABGS ABSG AGBS AGSB ASBG ASGB BAGS BASG BGAS BGSA BSAG BSGA GABS GASB GBAS GBSA GSAB GSBA SABG SAGB SBAG SBGA SGAB SGBA

Example 2:
Input = AAA
Output: AAA AAA AAA AAA AAA AAA


 

Constraints:

1 ≤ size of string ≤ 5
*/

// Solution
function permutation(str) {
  const result = [];

  function backtrack(current, remaining) {
    if (remaining.length === 0) {
      result.push(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const newCurrent = current + remaining[i]
      const newRemaining = [...remaining];
      newRemaining.splice(i, 1);

      // const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);

      backtrack(newCurrent, newRemaining);

      current.pop();
    }
  }
  backtrack('', str);

  return result;
}

// Test Caes 1
console.log(permutation('ABSG'));
// Output
// ABGS ABSG AGBS AGSB ASBG ASGB BAGS BASG BGAS BGSA BSAG BSGA GABS GASB GBAS GBSA GSAB GSBA SABG SAGB SBAG SBGA SGAB SGBA

// Test case 2
console.log(permutation("AAA"));
//output
//AAA AAA AAA AAA AAA AAA


