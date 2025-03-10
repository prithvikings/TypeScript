import './style.css';

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

const todosContainer = document.querySelector(".todocontainer") as HTMLDivElement;
const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;
const myForm = document.getElementById("myform") as HTMLFormElement;

myForm.onsubmit = (e) => {
  e.preventDefault();
  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: Date.now().toString(),
  };

  todos.push(todo);
  todoInput.value = "";
  updateLocalStorage();
  renderTodos();
};

const generateTodoItem = (todo: Todo) => {
  const todoDiv = document.createElement("div");
  todoDiv.className = "todo";

  // Creating a checkbox
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = todo.isCompleted;

  checkBox.addEventListener("change", () => {
    const todoIndex = todos.findIndex((t) => t.id === todo.id);
    if (todoIndex !== -1) {
      todos[todoIndex].isCompleted = checkBox.checked;
      updateLocalStorage();
      renderTodos();
    }
  });

  // Creating paragraph for title
  const paragraph = document.createElement("p");
  paragraph.innerText = todo.title;
  if (todo.isCompleted) {
    paragraph.classList.add("textCut");
  }

  // Creating delete button
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.innerText = "X";

  deleteButton.addEventListener("click", () => {
    const filteredTodos = todos.filter((t) => t.id !== todo.id);
    todos.length = 0;
    todos.push(...filteredTodos);
    updateLocalStorage();
    renderTodos();
  });

  // Appending elements
  todoDiv.appendChild(checkBox);
  todoDiv.appendChild(paragraph);
  todoDiv.appendChild(deleteButton);
  todosContainer.appendChild(todoDiv);
};

const renderTodos = () => {
  todosContainer.innerHTML = todos.length ? "" : "<p>No Todo</p>";
  todos.forEach(generateTodoItem);
};

const updateLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

document.addEventListener("DOMContentLoaded", renderTodos);
