function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  return "ok";
}

const result = isSame([] , []);
console.log(result);
