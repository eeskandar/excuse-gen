/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const h1 = document.querySelector("#excuse");

  let who = ["My dog", "Mah bruddah", "Idk who", "I", "You"];
  let did = ["ate", "burned", "messed", "sold", "took"];
  let what = ["my milkshake", "my car", "my homework", "the sun", "idk what"];
  let when = [
    "this morning",
    "yesterday evening",
    "a few secs ago",
    "idk when",
    "10 years ago... after the great war... I still remember..."
  ];
  function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  h1.innerHTML =
    random(who) + " " + random(did) + " " + random(what) + " " + random(when);
};
