function uniqueChar(str) {
  const set = new Set(str.split(""));
  return [...set].join("");
}

console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog")); // thequickbrownfxjmpsvlazydg
