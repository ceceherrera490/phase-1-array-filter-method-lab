// Code your solution here
function findMatching(arr, string) {
  const matchName = arr.filter(
    (name) => name.toLowerCase() === string.toLowerCase()
  );
  return matchName;
}

function fuzzyMatch(arr, string) {
  const provideLetters = arr.filter((lettrs) => lettrs[0] === string[0]);
  return provideLetters;
}

function matchName(arr, string) {
  let elementFind = arr.filter((person) => person.name === string);
  return elementFind;
}
