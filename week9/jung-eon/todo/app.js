var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todos = [];
var form = document.getElementById("todo-form");
var input = document.getElementById("todo-input");
var list = document.getElementById("todo-list");
var API_URL = "https://localhost:8080/todos";
fetch(API_URL)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    todos = data;
    renderTodo(todos);
});
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (text) {
        var newTodo = {
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
    todos = todos.filter(function (todo) { return todo.id !== id; });
    renderTodo(todos);
}
function toggleDone(id) {
    todos = todos.map(function (todo) {
        return todo.id === id ? __assign(__assign({}, todo), { completed: !todo.completed }) : todo;
    });
    renderTodo(todos);
}
var renderTodo = function (newTodos) {
    list.innerHTML = "";
    newTodos.forEach(function (todo) {
        var li = document.createElement("li");
        li.className = todo.completed ? "done" : "";
        var span = document.createElement("span");
        span.textContent = todo.title;
        span.style.cursor = "pointer";
        span.className = todo.completed ? "text done" : "text";
        span.onclick = function () { return toggleDone(todo.id); };
        var delBtn = document.createElement("button");
        delBtn.className = "delete";
        delBtn.textContent = "삭제";
        delBtn.onclick = function () { return deleteTodo(todo.id); };
        var editBtn = document.createElement("button");
        editBtn.className = "edit";
        editBtn.textContent = "수정";
        editBtn.disabled = todo.completed;
        editBtn.onclick = function () {
            editBtn.className = "done1";
            editBtn.textContent = "완료";
            var input = document.createElement("input");
            input.type = "text";
            input.value = todo.title;
            li.replaceChild(input, span);
            setTimeout(function () { return input.focus(); }, 0);
            var save = function () {
                var newText = input.value.trim();
                if (newText !== "") {
                    todo.title = newText;
                    renderTodo(todos);
                }
            };
            input.addEventListener("keydown", function (e) {
                if (e.key === "Enter") {
                    save();
                }
            });
            editBtn.onclick = save;
        };
        var buttonGroup = document.createElement("div");
        buttonGroup.className = "button-group";
        buttonGroup.appendChild(editBtn);
        buttonGroup.appendChild(delBtn);
        li.appendChild(span);
        li.appendChild(buttonGroup);
        list.appendChild(li);
    });
};
function updateTodo() { }
