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
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (text) {
        var newTodo = {
            id: Date.now(),
            text: text,
            done: false
        };
        todos.push(newTodo);
        input.value = "";
        render();
    }
});
function deleteTodo(id) {
    todos = todos.filter(function (todo) { return todo.id !== id; });
    render();
}
function toggleDone(id) {
    todos = todos.map(function (todo) {
        return todo.id === id ? __assign(__assign({}, todo), { done: !todo.done }) : todo;
    });
    render();
}
function render() {
    list.innerHTML = "";
    todos.forEach(function (todo) {
        var li = document.createElement("li");
        li.className = todo.done ? "done" : "";
        var span = document.createElement("span");
        span.textContent = todo.text;
        span.classList.add("clickable-text");
        span.onclick = function () { return toggleDone(todo.id); };
        var btnBox = document.createElement("div");
        btnBox.classList.add("btn-box");
        var delBtn = document.createElement("button");
        delBtn.textContent = "삭제";
        delBtn.onclick = function () { return deleteTodo(todo.id); };
        var editBtn = document.createElement("button");
        editBtn.textContent = "수정";
        editBtn.onclick = function () { return updateTodo(todo.id, span); };
        btnBox.appendChild(editBtn);
        btnBox.appendChild(delBtn);
        li.appendChild(span);
        li.appendChild(btnBox);
        list.appendChild(li);
    });
}
function updateTodo(id, span) {
    var input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;
    input.classList.add("edit-input");
    var parent = span.parentNode;
    parent.replaceChild(input, span);
    input.focus();
    var finishEdit = function () {
        var newText = input.value.trim();
        if (newText !== "") {
            todos = todos.map(function (todo) {
                return todo.id === id ? __assign(__assign({}, todo), { text: newText }) : todo;
            });
        }
        render();
    };
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter")
            finishEdit();
    });
}
