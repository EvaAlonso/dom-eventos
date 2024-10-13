const initialText = document.querySelector(".initial-text");
const changeStyle = document.querySelector(".change-style");
const voidList = document.querySelector(".void-list");
const nameList = document.querySelector(".name-list");

/* 1. Cambiar el texto de un elemento */
function changeText(){
  initialText.textContent = "Ejercicio 2. otro texto en vez del inicial";
}
changeText();

/* 2. Cambiar el estilo de un elemento */
function changeColor(){
  changeStyle.style.color = "red";
}
changeColor();

/* 3. Agregar y eliminar elementos */
function insertLi(){
  let liInsert = document.createElement("li");
  liInsert.innerHTML = "Elemento de lista añadido";
  voidList.append(liInsert);
}
insertLi();

/* 4. Mostrar una lista de nombres desde un array */
const namesArr = ["Airam", "Guacimara", "Gara", "Jonay", "Dácil", "Guayarmina", "Yaiza", "Zebenzui", "Yeray", "Nauzet"];
function writeNames(arr){
  arr.map((name) =>{
    let liName = document.createElement("li");
    liName.innerText = name;
    nameList.append(liName)
  })
}
writeNames(namesArr);

/* 5. Contar elementos de un array
Crea un array de números y una función que imprima en pantalla cuántos elementos tiene el array.
*/

/* 6. Crear un formulario con nodos 
Mediante JavaScript, genera los elementos necesarios para crear un formulario básico (input, label, botón) y agrégalo al DOM.
*/

/* 7. Crear una tabla a partir de un array de nombres
Crea una tabla HTML usando JavaScript para mostrar los nombres de un array en filas y columnas.
*/

/* 8. Mostrar un objeto en una tabla 
Usando el siguiente array de objetos, imprime cada elemento en la tabla creada en el ejercicio anterior.
*/
let array = [ 
	{
   "id": 1,
   "name": "Rick Sanchez",
   "status": "Alive",
   "species": "Human",
   "type": "",
   "gender": "Male",
   },
   {
   "id": 2,
   "name": "Morty Smith",
   "status": "Alive",
   "species": "Human",
   "type": "",
   "gender": "Male",
   },
   {
   "id": 3,
   "name": "Summer Smith",
   "status": "Alive",
   "species": "Human",
   "type": "",
   "gender": "Female",
   },
   {
   "id": 4,
   "name": "Beth Smith",
   "status": "Alive",
   "species": "Human",
   "type": "",
   "gender": "Female",
   },
   {
   "id": 5,
   "name": "Jerry Smith",
   "status": "Alive",
   "species": "Human",
   "type": "",
   "gender": "Male",
   },
   {
   "id": 6,
   "name": "Abadango Cluster Princess",
   "status": "Alive",
   "species": "Alien",
   "type": "",
   "gender": "Female",
   },
   {
   "id": 7,
   "name": "Abradolf Lincler",
   "status": "unknown",
   "species": "Human",
   "type": "Genetic experiment",
   "gender": "Male",
   },
   {
   "id": 8,
   "name": "Adjudicator Rick",
   "status": "Dead",
   "species": "Human",
   "type": "",
   "gender": "Male",
   },
   {
   "id": 9,
   "name": "Agency Director",
   "status": "Dead",
   "species": "Human",
   "type": "",
   "gender": "Male",
   },
   {
   "id": 10,
   "name": "Alan Rails",
   "status": "Dead",
   "species": "Human",
   "type": "Superhuman (Ghost trains summoner)",
   "gender": "Male",
   }

];
/* 9. Eliminar un elemento de la lista al hacer clic 
Crea una lista con algunos elementos. Al hacer clic en cualquier elemento de la lista, elimínalo del DOM.
*/
/* 10. Cambiar el contenido de un párrafo con un evento de teclado 
Crea un campo de texto y un párrafo. Cada vez que el usuario presione una tecla, actualiza el contenido del párrafo con el texto del input.
*/
/* 11. Ocultar y mostrar un párrafo 
Crea un botón y un párrafo. Al hacer clic en el botón, alterna entre ocultar y mostrar el párrafo.
*/
/* 12. Cambiar el color de fondo de la página
Crea un menú desplegable con varios colores. Al seleccionar un color, cambia el fondo de la página al color seleccionado.
*/
/* 13. Contar el número de clics de un botón 
Crea un botón que cuente cuántas veces se ha hecho clic en él y muestre el resultado en un párrafo.
*/
/* 14. Mostrar la longitud del texto ingresado en tiempo real 
Crea un input de texto. Muestra en un párrafo la cantidad de caracteres que se ingresan en tiempo real.
*/
/* 15. Cambiar la imagen al pasar el ratón 
Crea una imagen que cambie cuando el ratón pasa por encima de ella y vuelva a la original cuando se retira el ratón.
*/
/* 16. Añadir una tarea a una lista de tareas
Crea un campo de texto y un botón "Agregar Tarea". Al hacer clic en el botón, añade el contenido del campo de texto a una lista de tareas.
*/
/* 17. Contar palabras de un párrafo en tiempo real 
Crea un textarea y un párrafo. A medida que el usuario escribe en el textarea, muestra cuántas palabras ha escrito.
*/
/* 18. Mostrar un alerta cuando se completa un campo
Crea un input de texto. Cuando el usuario deje de escribir y salga del input, muestra una alerta con el contenido ingresado.
*/
/* 19. Cambiar el estilo de los elementos de la lista al hacer doble clic
Crea una lista de elementos. Al hacer doble clic en cualquier elemento, cambia su estilo (color, tamaño de fuente, etc.).
*/
/* 20. Crear un alista desplegable con contenido dinámico
Crea una lista desplegable (select) que se rellene dinámicamente con elementos de un array al cargar la página.
*/