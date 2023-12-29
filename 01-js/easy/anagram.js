/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


function isAnagram(str1, str2) {
  if(str1.length != str2.length)
  {
    return false;
  }

  // Convert strings to lowerCase, then to arrays of characters, sort them, and join back into strings
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;

/*
// Or we could wven do it using objects using the frequency check method

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  // Create objects to store the frequency of characters in each string
  const charCount1 = {};
  const charCount2 = {};

  // Convert all in uppercase or lower case to check it properly
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Count characters in str1
  for (let char of str1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }
  
  // Count characters in str2
  for (let char of str2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }
  
  // Compare the frequency of characters in both strings
  for (let char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }
  
  // If all checks pass, the strings are anagrams
  return true;
}

*/ 
