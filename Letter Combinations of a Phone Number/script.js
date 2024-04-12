/* Problem Description:

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order. 

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters. 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]

#NOTE : Constraints:
0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].


*/




// Solution of the above problem is given below
function letterCombinations(digits) {
  if (digits.length === 0) return [];

  const phoneMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const result = [];

  function backtrack(index, current) {
    if (index === digits.length) {
      result.push(current);
      return;
    }

    const letters = phoneMap[digits[index]];

    for (let letter of letters) {
      backtrack(index + 1, current + letter);
    }
  }

  backtrack(0, "");

  return result;
}


// Test Cases 1
letterCombinations("23");
// Output
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Test Cases 2
letterCombinations("");
// Output
// []

// Test Cases 3
letterCombinations("2");
// Output
// ["a","b","c"]
