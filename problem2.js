function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let spaceRemoved = str.replaceAll(" ", "");
  let onlyCapitalLetters = spaceRemoved.toUpperCase();
  return onlyCapitalLetters;
}

const result = onlyCharacter(true);
console.log(result);
