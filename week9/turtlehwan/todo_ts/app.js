const todoListEl = document.getElementById("todoList");
const todoInputEl = document.getElementById("todoInput");
const API_URL = "http://localhost:8080/todos";
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => renderTodo(data));
const updateTodo = (todoId, originalTitle) => {
    const todoItem = document.querySelector(`#todo-${todoId}`);
    if (!todoItem)
        return;
    const inputContent = document.createElement("input");
    inputContent.value = originalTitle;
    inputContent.className = "updateInput";
    const fetchUpdate = () => {
        fetch(API_URL + "/" + todoId, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: inputContent.value }),
        })
            .then(() => fetch(API_URL))
            .then((response) => response.json())
            .then((data) => renderTodo(data));
    };
    const enterKeyEvent = (e) => {
        if (e.key === "Enter") {
            fetchUpdate();
        }
    };
    inputContent.addEventListener("keyup", enterKeyEvent);
    const outsideClickEvent = (e) => {
        const target = e.target;
        if (!target)
            return;
        if (inputContent.contains(target) || target.className === "updateBtn") {
            console.log("clicked inside");
        }
        else {
            console.log("clicked outside");
            fetchUpdate();
        }
    };
    document.body.addEventListener("click", outsideClickEvent);
    todoItem.removeChild(todoItem.childNodes[0]);
    todoItem.insertBefore(inputContent, todoItem.firstChild);
};
const renderTodo = (newTodos) => {
    if (!todoListEl)
        return;
    todoListEl.innerHTML = "";
    newTodos.forEach((todo) => {
        const listEl = document.createElement("li");
        listEl.textContent = todo.title;
        listEl.id = `todo-${todo.id}`;
        const deleteEl = document.createElement("span");
        deleteEl.textContent = "🗑️";
        deleteEl.className = "deleteBtn";
        deleteEl.onclick = () => deleteTodo(todo.id);
        const updateEl = document.createElement("span");
        updateEl.textContent = "✏️";
        updateEl.className = "updateBtn";
        updateEl.onclick = () => updateTodo(todo.id, todo.title);
        listEl.append(deleteEl);
        listEl.append(updateEl);
        todoListEl.append(listEl);
    });
};
const addTodo = () => {
    if (!todoInputEl)
        return;
    const title = todoInputEl.value;
    const date = new Date();
    const createdAt = date.toDateString();
    if (!title)
        return;
    const newTodo = {
        id: date.getTime(),
        title,
        createdAt,
    };
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.assign(Object.assign({}, newTodo), { completed: false })),
    })
        .then((response) => response.json())
        .then(() => {
        if (todoInputEl) {
            todoInputEl.value = "";
        }
        return fetch(API_URL);
    })
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};
const deleteTodo = (todoId) => {
    fetch(API_URL + "/" + todoId, {
        method: "DELETE",
    })
        .then(() => fetch(API_URL))
        .then((response) => response.json())
        .then((data) => renderTodo(data));
};
