function reverse(fname) {
  let reverse = "";
  let oneLetter;
  for (let i = 0; i < fname.length; i++) {
    oneLetter = fname.charAt(i);
    reverse = oneLetter + reverse;
  }

  console.log(reverse);
}

reverse("WOLF");
