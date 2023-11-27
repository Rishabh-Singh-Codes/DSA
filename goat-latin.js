// You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.
// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:
// If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
// For example, the word "apple" becomes "applema".
// If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".
// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
// Return the final sentence representing the conversion from sentence to Goat Latin.

// Link: https://leetcode.com/problems/goat-latin/description/

//1st soln O(n)

var toGoatLatin = function(sentence) {
    let vowels = ["a", "e", "i", "o", "u"];

    let words = sentence.split(" ");

    for(let i = 0; i < words.length; i++) {
        if(vowels.includes(words[i][0].toLowerCase())) {
            words[i] = words[i] + "ma";
        } else {
            words[i] = words[i].slice(1) + words[i][0] + "ma";
        }

        words[i] = words[i] + "a".repeat(i+1);
    }

    return words.join(" ");
};