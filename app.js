var friends = ["Pratham", "Aditya", "Ankit", "Akshay", "Ashutosh"];

for (i = 0; i < friends.length; i++) {
  let fr = friends[i];
  for (j = 99; j > 1; j--) {
    console.log(
      j +
        " lines of code, " +
        fr +
        " kills one and clears it all out, " +
        (j - 1) +
        " lines of code remaining."
    );
  }
  console.log(
    j +
      " lines of code, " +
      fr +
      " kills one and clears it all out, no more lines of code remaining."
  );
}
