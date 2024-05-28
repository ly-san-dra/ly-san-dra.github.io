let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "barbara.png") {
    myImage.setAttribute("src", "images/barbie-bizarre.jpg");
  } else {
    myImage.setAttribute("src", "barbara.png");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Veuillez saisir votre nom.");
  localStorage.setItem("nom", myName);
  myHeading.textContent = "It's a barbie world ! " + myName;
}
if (!localStorage.getItem("nom")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("nom");
  myHeading.textContent = "It's a barbie world ! " + storedName;
}
myButton.addEventListener("click", function () {
  setUserName();
});
