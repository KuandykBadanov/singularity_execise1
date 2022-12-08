function isPalindrome(str) {
  const lower = str.toLowerCase();
  const reversed = lower.split("").reverse().join("");
  return lower === reversed;
}

console.log(isPalindrome("loki")); // false
console.log(isPalindrome("aba")); // true
console.log(isPalindrome("abab")); // false
console.log(isPalindrome("Qazaq")); // true
