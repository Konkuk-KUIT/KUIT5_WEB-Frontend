var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
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
      done: false,
    };
    todos = __spreadArray(__spreadArray([], todos, true), [newTodo], false);
    input.value = "";
    render();
  }
});
function deleteTodo(id) {
  todos = todos.filter(function (todo) {
    return todo.id !== id;
  });
  render();
}
function toggleDone(id) {
  todos = todos.map(function (todo) {
    return todo.id === id
      ? __assign(__assign({}, todo), { done: !todo.done })
      : todo;
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
    span.style.cursor = "pointer";
    span.onclick = function () {
      return toggleDone(todo.id);
    };
    var updateBtn = document.createElement("button");
    updateBtn.textContent = "수정";
    updateBtn.onclick = function () {
      return updateTodo(todo.id, li, span);
    };
    var delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = function () {
      return deleteTodo(todo.id);
    };
    li.appendChild(span);
    li.appendChild(updateBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}
function updateTodo(id, li, span) {
  var todo = todos.find(function (t) {
    return t.id === id;
  });
  if (!todo) return;
  var input = document.createElement("input");
  input.type = "text";
  input.value = todo.text;
  input.style.width = "200px";
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      var newText_1 = input.value.trim();
      if (newText_1 !== "") {
        todos = todos.map(function (t) {
          return t.id === id
            ? __assign(__assign({}, t), { text: newText_1 })
            : t;
        });
        render();
      }
    }
  });
  li.replaceChild(input, span);
  input.focus();
}
