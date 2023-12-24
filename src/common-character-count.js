const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const charCount1 = {};
  const charCount2 = {};
  const arr1 = [...s1];
  const arr2 = [...s2];

  for (const char of arr1) {
    charCount1[char] = arr1.filter((el) => el === char).length;
  }

  for (const char of arr2) {
    charCount2[char] = arr2.filter((el) => el === char).length;
  }

  let commonCount = 0;

  Object.keys(charCount1).forEach((char) => {
    if (charCount2.hasOwnProperty(char)) {
      commonCount += Math.min(charCount1[char], charCount2[char]);
    }
  });

  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
