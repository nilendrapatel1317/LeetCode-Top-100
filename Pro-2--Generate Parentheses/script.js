/* Problem Description 

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.


Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]

Example 3:
Input: n = 0
Output: []

*/

// Solution of the above problem is given below

var generateParenthesis = function (n) {
  if (n === 0) return [];

  const result = [];

  function backtrack(current, open, close) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }

    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }
  backtrack("", 0, 0);

  return result;
};


// Test Cases 1
console.log(generateParenthesis(3));
// Output
// ["((()))","(()())","(())()","()(())","()()()"]

// Test Cases 2
console.log(generateParenthesis(2));
// Output
// ["()()","(())"]

// Test Cases 3
console.log(generateParenthesis(0));
// Output
// []
