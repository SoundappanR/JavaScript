function leapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(year, ": Leap Year");
  } else {
    console.log(year, ": Not aLeap Year");
  }
}

leapYear(2001);
leapYear(2008);
