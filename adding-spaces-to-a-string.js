// You are given a 0-indexed string s and a 0-indexed integer array spaces that describes the indices in the original string where spaces will be added. Each space should be inserted before the character at the given index.
// For example, given s = "EnjoyYourCoffee" and spaces = [5, 9], we place spaces before 'Y' and 'C', which are at indices 5 and 9 respectively. Thus, we obtain "Enjoy Your Coffee".
// Return the modified string after the spaces have been added.

// Link: https://leetcode.com/problems/adding-spaces-to-a-string/description/

//1st soln O(n)

function addSpaces(s, spaces) {
  const N = spaces.length;
  const splits = new Array(N + 1);

  splits[0] = s.substring(0, spaces[0]);
  for (let i = 1; i < N; ++i) {
    splits[i] = s.substring(spaces[i - 1], spaces[i]);
  }
  splits[N] = s.substring(spaces[N - 1]);

  return splits.join(" ");
}
