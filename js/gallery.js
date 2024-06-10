//Gallery for sales code

//let illustrationWindow = document.getElementById("illustration");
//let gamesWindow = document.getElementById("games");
//let artsWindow = document.getElementById("arts");
// let closeillButton = document.getElementById("closeillWindow");
// let closegamWindow = document.getElementById("closegamWindow");
// let closeartWindow = document.getElementById("closeartWindow");

// console.log(illustrationWindow);
// console.log(closeillButton);

// illustrationWindow.addEventListener("click", function () {
//   document.querySelector(".illustrationWindow").classList.add("is-active");
//   console.log("Окно иллюстраций открылось.");
// });

// closeillButton.addEventListener("click", function () {
//   document.querySelector(".illustrationWindow").classList.remove("is-active");
//   console.log("Окно иллюстраций закрылось.");
// });

// gamesWindow.addEventListener("click", function () {
//   document.querySelector(".gameWindow").classList.add("is-active");
//   console.log("Окно карт таро и настольных игр открылось.");
// });

// closegamWindow.addEventListener("click", function () {
//   document.querySelector(".gameWindow").classList.remove("is-active");
//   console.log("Окно карт таро и настольных игр закрылось.");
// });

// artsWindow.addEventListener("click", function () {
//   document.querySelector(".artsWindow").classList.add("is-active");
//   console.log("Окно интерьерных картин открылось.");
// });

// closeartWindow.addEventListener("click", function () {
//   document.querySelector(".artsWindow").classList.remove("is-active");
//   console.log("Окно интерьерных картин закрылось.");
// });

//Windows for contact info

let contactsWindow1 = document.getElementById("contactsWindow-1");
let closeContactWindow = document.getElementById("closeContactWindow");
console.log(contactsWindow1);
contactsWindow1.addEventListener("click", function () {
  document.querySelector(".contacts").classList.add("is-active-for-contact");
  console.log("Контактная информация открылась.");
});

let contactsWindow2 = document.getElementById("contactsWindow-2");
console.log(contactsWindow2);
contactsWindow2.addEventListener("click", function () {
  document.querySelector(".contacts").classList.add("is-active-for-contact");
  console.log("Контактная информация открылась.");
});

//window to contact info from galleries lot arts

// linkToContact.addEventListener("click", function () {
//   document.querySelector(".contacts").classList.add("is-active-for-contact");
// });

let linkToContact = document.querySelectorAll("a.chain-icon"); // Выбираем все ссылки с классом 'myClass'
console.log(linkToContact);
for (let i = 0; i < linkToContact.length; i++) {
  linkToContact[i].addEventListener("click", function () {
    document.querySelector(".contacts").classList.add("is-active-for-contact"); // Ваш код здесь
    console.log("Контактная информация открылась.");
  });
}

closeContactWindow.addEventListener("click", function () {
  document.querySelector(".contacts").classList.remove("is-active-for-contact");
  console.log("Контактная информация закрылась.");
});

// Windows for contact info
