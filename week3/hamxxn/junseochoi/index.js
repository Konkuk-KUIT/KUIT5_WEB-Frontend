let todos = [];

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    const newTodo = {
      id: Date.now(),
      text,
      done: false,
    };
    todos.push(newTodo); 
    render(); 
    input.value = ""; 
   
  }
});

function deleteTodo(id) {
  todos
    = todos.filter((todo) => todo.id !== id);
  render();
  
}

function toggleDone(id) {
  todos = todos.map(todo => 
    todo.id === id ? { ...todo, done: !todo.done } : todo
  ); 
  render(); 
}

function updateTodo(id, newText) {
  // submit event를 이용해 수정을 누르면 span이 input이 되고 
  // 엔터를 치면 input이 span으로 되고 todo에 업데이트하고 
  // 다시 render하면 된다.
  todos = todos.map(todo => 
    todo.id === id ? { ...todo, text: newText } : todo
  );
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
    span.className = "todo"
    span.onclick = () => toggleDone(todo.id);
    
    const delBtn = document.createElement("button");
    delBtn.className = "delete"
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    const editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.textContent = "수정";
    editBtn.onclick = () => {
      const input = document.createElement("input");
      input.type = "text";
      input.value = todo.text;
      input.onblur = () => {
        updateTodo(todo.id, input.value);
      };
      input.onkeydown = (e) => {
        if (e.key === "Enter") {
          updateTodo(todo.id, input.value);
        }
      };
      li.replaceChild(input, span);
      input.focus();
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}