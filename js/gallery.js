let illustrationWindow = document.getElementById("illustration");
let gamesWindow = document.getElementById("games");
let artsWindow = document.getElementById("arts");
let closeillButton = document.getElementById("closeillWindow");
let closegamWindow = document.getElementById("closegamWindow");
let closeartWindow = document.getElementById("closeartWindow");

console.log(illustrationWindow);
console.log(closeillButton);

illustrationWindow.addEventListener("click", function () {
  document.querySelector(".illustrationWindow").classList.add("is-active");
});

closeillButton.addEventListener("click", function () {
  document.querySelector(".illustrationWindow").classList.remove("is-active");
});

gamesWindow.addEventListener("click", function () {
  document.querySelector(".gameWindow").classList.add("is-active");
});

closegamWindow.addEventListener("click", function () {
  document.querySelector(".gameWindow").classList.remove("is-active");
});

artsWindow.addEventListener("click", function () {
  document.querySelector(".artsWindow").classList.add("is-active");
});

closeartWindow.addEventListener("click", function () {
  document.querySelector(".artsWindow").classList.remove("is-active");
});
