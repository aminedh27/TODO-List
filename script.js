const addButton = document.getElementById("add");
const ul = document.querySelector("ul");
const checked = document.querySelectorAll(".check");
const lis = document.querySelectorAll("li");
const div = document.querySelectorAll(".todo");
const imgs =document.querySelectorAll("img");

//---------------EventListeners----------------
addButton.addEventListener("click", createTodo);
checked.forEach((check, i) => {
  check.addEventListener('click', () => {
    div[i].classList.toggle("completed");
  });
});
imgs.forEach((img, i) => {
  img.addEventListener('click', () => {
    div[i].style.display="none";
  });
});
//---------------Functions--------------------
function createTodo () {
  const inputfield = document.querySelector('#todo').value;
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const li = document.createElement("li");
  const text = document.createTextNode(inputfield);
  li.appendChild(text);
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttons");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("check");
  const img = document.createElement("img");
  img.src='./icons/delete.png';
  buttonsDiv.appendChild(checkbox);
  buttonsDiv.appendChild(img);
  todoDiv.appendChild(li);
  todoDiv.appendChild(buttonsDiv);
  ul.appendChild(todoDiv);

  checkbox.addEventListener('click', () => {
    todoDiv.classList.toggle("completed");
  });

  img.addEventListener('click', () => {
    todoDiv.style.display="none";
  });
}



