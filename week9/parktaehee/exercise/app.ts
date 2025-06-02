let todos: Todo[] = [];

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

(form as HTMLFormElement).addEventListener("submit", (e) => {
  e.preventDefault();
  const text = (input as HTMLInputElement).value.trim();
  if (text) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      done: false,
    };
    todos = [...todos, newTodo];
    (input as HTMLInputElement).value = "";
    render();
  }
});

function deleteTodo(id: number): void {
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

function toggleDone(id: number): void {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
  render();
}

function render(): void {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.onclick = () => toggleDone(todo.id);

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "수정";
    updateBtn.onclick = () => updateTodo(todo.id, li, span);

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    li.appendChild(span);
    li.appendChild(updateBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}
function updateTodo(id: number, li: HTMLElement, span: HTMLSpanElement): void {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;

  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.text;
  input.style.width = "200px";

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const newText = input.value.trim();
      if (newText !== "") {
        todos = todos.map((t) => (t.id === id ? { ...t, text: newText } : t));
        render();
      }
    }
  });

  li.replaceChild(input, span);
  input.focus();
}
