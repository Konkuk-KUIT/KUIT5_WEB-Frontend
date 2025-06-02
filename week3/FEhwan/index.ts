//export {};


type Todo = {
  id: number;
  text: string;
  done: boolean;
};

let todos: Todo[] = [];

const form = document.getElementById("todo-form") as HTMLFormElement;
const input = document.getElementById("todo-input") as HTMLInputElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      done: false,
    };
    todos = [...todos, newTodo];
    input.value = "";
    render();
  }
});

function deleteTodo(id: number): void {
  todos = todos.filter(todo => todo.id !== id);
  render();
}

function toggleDone(id: number): void {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
  render();
}

function updateTodo(id: number, newText: string): void {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, text: newText } : todo
  );
  render();
}

function render(): void {
  list.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.onclick = () => toggleDone(todo.id);

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = todo.text;
    editInput.style.display = "none";
    editInput.onkeypress = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        updateTodo(todo.id, editInput.value.trim());
      }
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.onclick = () => {
      span.style.display = "none";
      editInput.style.display = "inline";
      editInput.focus();
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    li.appendChild(span);
    li.appendChild(editInput);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}
