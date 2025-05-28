let todos = [];
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const API_URL = "https://localhost:8080/todos";
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
    todos = data;
    renderTodo(todos);
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text) {
        const newTodo = {
            id: Date.now(),
            title: text,
            createdAt: new Date().toISOString(),
            completed: false,
        };
        todos.push(newTodo);
        input.value = "";
        renderTodo(todos);
    }
});
function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodo(todos);
}
function toggleDone(id) {
    todos = todos.map((todo) => todo.id === id ? Object.assign(Object.assign({}, todo), { completed: !todo.completed }) : todo);
    renderTodo(todos);
}
const renderTodo = (newTodos) => {
    list.innerHTML = "";
    newTodos.forEach((todo) => {
        const li = document.createElement("li");
        li.className = todo.completed ? "done" : "";
        const span = document.createElement("span");
        span.textContent = todo.title;
        span.style.cursor = "pointer";
        span.className = todo.completed ? "text done" : "text";
        span.onclick = () => toggleDone(todo.id);
        const delBtn = document.createElement("button");
        delBtn.className = "delete";
        delBtn.textContent = "삭제";
        delBtn.onclick = () => deleteTodo(todo.id);
        const editBtn = document.createElement("button");
        editBtn.className = "edit";
        editBtn.textContent = "수정";
        editBtn.disabled = todo.completed;
        editBtn.onclick = () => {
            editBtn.className = "done1";
            editBtn.textContent = "완료";
            const input = document.createElement("input");
            input.type = "text";
            input.value = todo.title;
            li.replaceChild(input, span);
            setTimeout(() => input.focus(), 0);
            const save = () => {
                const newText = input.value.trim();
                if (newText !== "") {
                    todo.title = newText;
                    renderTodo(todos);
                }
            };
            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    save();
                }
            });
            editBtn.onclick = save;
        };
        const buttonGroup = document.createElement("div");
        buttonGroup.className = "button-group";
        buttonGroup.appendChild(editBtn);
        buttonGroup.appendChild(delBtn);
        li.appendChild(span);
        li.appendChild(buttonGroup);
        list.appendChild(li);
    });
};
function updateTodo() { }
