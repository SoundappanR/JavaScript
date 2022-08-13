function palindrome(fname) {
  let reverse = "";
  let oneLetter;
  for (let i = 0; i < fname.length; i++) {
    oneLetter = fname.charAt(i);
    reverse = oneLetter + reverse;
  }

  if (fname == reverse) {
    console.log("Palindrome");
  } else {
    console.log("Not a palindrome");
  }
}

palindrome("AMMA");
palindrome("wolf");
