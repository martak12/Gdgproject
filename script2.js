let score = Number(0);
function butfun() {
  alert("wellcome,are you ready");
  let sleep = Number(prompt("1, How many hours do you sleep per day?"));
  let music = prompt("2, Do you enjoy music? (yes / no)");
  let tired = String(prompt("3, Do you get tired? (yes / no)"));
  let emotion = prompt("3,do you have emotion?(yes/no");
  let isemo = emotion === "yes";
  if (sleep >= 4) {
    score = score + 1;
  } else {
    score = score;
  }
  if (music === "yes") {
    score = score + 1;
  } else {
    score = score;
  }
  if (tired === "yes") {
    score = score + 1;
  } else {
    score = score;
  }

  alert("you score  " + score);
  if (isemo) {
    score = score + 1;
  } else {
    score = score;
  }
}

function funbut() {
  let heading = document.querySelector("h3");
  if (score >= 3) {
    heading.innerHTML = "You are definitely human!😊";
  } else if (score >= 1 && score <= 2) {
    heading.innerHTML = "Half human, half robot!😊";
  } else if (score <= 0) {
    heading.innerHTML = "Robot detected😊!";
  }
}
let but = document.querySelector("button");
but.addEventListener("click", butfun);
let but2 = document.querySelector("div");
but2.addEventListener("click", funbut);
console.log(but2);
