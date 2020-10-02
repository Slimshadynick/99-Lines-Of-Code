let btn = document.querySelector("button");
btn.addEventListener("click", sing);

function sing() {
  var friends = ["Pratham", "Aditya", "Ankit", "Akshay", "Ashutosh"];

  for (i = 0; i < friends.length; i++) {
    let fr = friends[i];
    var div = document.createElement("div");
    div.className += "friend";
    let h3 = document.createElement("h3");
    let text = document.createTextNode(fr);
    h3.appendChild(text);
    div.appendChild(h3);
    for (j = 99; j > 1; j--) {
      let p = document.createElement("p");
      let text = document.createTextNode(
        j +
          " lines of code, " +
          fr +
          " kills one and clears it all out, " +
          (j - 1) +
          " lines of code remaining."
      );
      p.appendChild(text);
      div.appendChild(p);
    }
    let p = document.createElement("p");
    text = document.createTextNode(
      j +
        " lines of code, " +
        fr +
        " kills one and clears it all out, no more lines of code remaining."
    );
    p.appendChild(text);
    div.appendChild(p);
    document.body.appendChild(div);
  }
}
