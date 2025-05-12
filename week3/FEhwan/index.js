let todos = [];

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();//공백 제거
  if (text) {
    const newTodo = {
      id: Date.now(),
      text,
      done: false
    };
    todos = [...todos, newTodo];
    input.value = "";
    render();
  }
});

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  render();
}

function toggleDone(id) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
  render();
}

function updateTodo(id, newText) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, text: newText } : todo
  );
  //수정?이 안된다
  render();
}

function render() {
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
    editInput.onkeypress = (e) => {
      if (e.key === "Enter") {
        updateTodo(todo.id, editInput.value.trim());
      }
    };

    //수정 버튼임 이거 누르면 바뀜
    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.onclick = () => {
      span.style.display = "none";
      editInput.style.display = "inline";
      editInput.focus();
    };

    //삭제 버튼
    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    //넣기
    li.appendChild(span);
    li.appendChild(editInput);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}
