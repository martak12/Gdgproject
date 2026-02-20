function forbutton() {
  let heading = document.querySelector("h2");
  let name = prompt(" Wellcome👋 what is your name ?");
  let something = prompt(
    "👋 hello " + name + " Enter the item you want to buy?",
  );
  let budgetAmount = Number(prompt(" 👋" + name + " enter your Budget amount"));
  let savingAmount = Number(prompt("enter saving amount"));
  let saving = savingAmount ? Number(savingAmount) : 0; // Saving is optional so the default is 0 if nothing entered
  let itemprice = Number(prompt("Now please Enter the price"));
  let total = budgetAmount + saving;
  if (total > itemprice) {
    heading.innerHTML = name + " you can afford to buy " + something + " 😊 ";
  } else {
    heading.innerHTML = name + " you can't afford to buy " + something + " 🙁";
  }
}
let ask = document.querySelector("button");
ask.addEventListener("click", forbutton);
