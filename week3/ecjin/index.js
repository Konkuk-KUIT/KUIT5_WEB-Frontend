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
      done: false
    };

    todos = [newTodo,...todos];
    input.value = "";  // 입력 필드 초기화
    render();  // UI 업데이트
  }
  
});

function deleteTodo(id) {
  todos = todos.filter(todos => todos.id !== id);
  render();
}

function toggleDone(id) {
  return new Promise((resolve, reject) => {
      const todo = todos.find(todo => todo.id === id);
      if (todo) {
          todo.done = !todo.done;
          resolve(todo);
      } else {
          reject("할 일을 찾을 수 없습니다.");
      }
  })
  .then(() => render()) // 상태 변경 후 UI 업데이트
  .catch(() => render());
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
    
    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);
    delBtn.classList.add("buttons");  // 클래스 추가

    const upBtn = document.createElement("button");
    upBtn.textContent = "수정";
    upBtn.onclick = () => updateTodo(todo.id);
    upBtn.classList.add("buttons");  // 클래스 추가

    li.appendChild(span);
    li.appendChild(upBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function updateTodo(id) {
  const todo = todos.find(todo => todo.id === id);

  input.value = todo.text; // 입력창에 기존 값 넣기
  input.focus(); // 입력창에 포커스

  deleteTodo(todo.id);

  const submitButton = document.querySelector("#submit"); // 추가 버튼 찾기
  submitButton.textContent = "변경"; // 버튼 텍스트 변경

  // 기존의 클릭 이벤트 제거 후 새 이벤트 추가
  submitButton.onclick = function (e) {
    e.preventDefault();
    const text = input.value.trim();
    if (updatedText) {
      
      const newTodo = {
        id: Date.now(),
        text,
        done: false
      };

      todos = [newTodo,...todos];
      input.value = "";  // 입력 필드 초기화
      render();  // UI 업데이트
    
      submitButton.textContent = "추가"; // 버튼 원래대로 변경
      submitButton.onclick = addTodo; // 원래 추가 함수로 복구
    }
  };
}