const initialText = document.querySelector(".initial-text");
const changeStyle = document.querySelector(".change-style");
const voidList = document.querySelector(".void-list");

function changeText(){
  initialText.textContent = "Ejercicio 2. otro texto en vez del inicial";
}
changeText();

function changeColor(){
  changeStyle.style.color = "red";
}
changeColor();

function insertLi(){
  let liInsert = document.createElement("li");
  liInsert.innerHTML = "Elemento de lista añadido";
  voidList.append(liInsert);
}
insertLi();

const namesArr = ["Airam", "Guacimara", "Gara", "Jonay", "Dácil", "Guayarmina", "Yaiza", "Zebenzui", "Yeray", "Nauzet"]