// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringB) === cleanString(stringA);
}

function cleanString(str) {
  return str
    .replace(/[^\w]g/, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const objA = buildObj(stringA);
//   const objB = buildObj(stringB);

//   let sizeA = Object.keys(objA).length;
//   let sizeB = Object.keys(objB).length;
//   if (sizeA !== sizeB) return false;
//   for (let propA in objA) {
//     return objA[propA] === objB[propA];
//   }
// }

// function buildObj(str) {
//   const obj = {};
//   for (let char of str.replace(/[^\w]g/, "").toLowerCase()) {
//     obj[char] = obj[char] + 1 || 1;
//   }
//   return obj;
// }
