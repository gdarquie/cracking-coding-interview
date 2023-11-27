// check that all characters are unique, 
// O(N log N) or O(1) 
// because it will return 
// false at worst after the first characters after all unqique characters have been returned
// true at worst after all unique characters have been returned
function isUniqueWithSet(myString) {
  const uniqueCharacters = new Set();
  return !myString.split("").some(char => {
    if (uniqueCharacters.has(char)) return true
    uniqueCharacters.add(char);
  });
}

function isUniqueWithForOf(myString) {
  const characterCounts = [];

  for (const char of myString) {
    if (characterCounts[char]) {
      return false;
    }
    characterCounts[char] = 1;
  }

  return true;
}

function isUniqueWithSome(myString) {
  let uniqueCharacters = [];

  return !myString.split("").some(char => {
    if (uniqueCharacters.includes(char)) {
      return true;
    } else {
      uniqueCharacters.push(char);
    }
  });
}

function isUniqueWithFor2(myString) {
  let uniqueCharacters = [];
  let result = true

  for (let i = 0; i < myString.length; i++) {
    if (uniqueCharacters[myString.charAt(i)] == true) {
      result = false;
      return result;
    };
    
    uniqueCharacters[myString.charAt(i)] = true;
  }

  return result;
}

function isUniqueWithFor(myString) {
  let uniqueCharacters = [];
  let result = true;
  const splitString = myString.split("");
  for (let i = 0; i < splitString.length; i++) {
    if(!uniqueCharacters.includes(myString.charAt(i))) {
      uniqueCharacters.push(myString.charAt(i));
    } else {
      result = false;
      return result;
    }
  }

  return result;
}

console.log(isUniqueWithForOf(process.argv[2]));