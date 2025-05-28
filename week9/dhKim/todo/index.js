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
//처음에 todo를 비워둠 let으로 설정한이유는 갱신이 되기 때문...
var form = document.getElementById("todo-form");
var input = document.getElementById("todo-input");
var list = document.getElementById("todo-list");
form.addEventListener("submit", function (e) {
    //submit버튼이 눌리면
    e.preventDefault(); //초기화 방지
    var text = input.value.trim();
    if (text) {
        var newTodo = {
            id: Date.now(),
            text: text,
            done: false,
        };
        todos.push(newTodo); //todos는 객체들의 배열
        input.value = ""; //인풋초기화
        render(); //렌더링
    }
});
function deleteTodo(id) {
    //li를 삭제해 버린다.
    todos = todos.filter(function (todo) { return todo.id !== id; });
    render();
}
function toggleDone(id) {
    //렌더 자체를 다시할 것이므로 todos의 done속성을 
    //바꿔버리면 된다. map을 사용해서 todos를 갱신한다.
    todos = todos.map(function (todo) { return todo.id === id ? __assign(__assign({}, todo), { done: !todo.done //새로운 객체를 생성하면서 
     }) : todo; });
    //렌더 자체를 다시한다
    render();
}
function updateTodo(id) {
    if (!list)
        return;
    var li = Array.from(list.children).find(function (li) {
        return li.id === String(id);
    });
    //const li는 
    //list의 자식요소들(li) 중에 li의 span요소의 textContent와 
    // 매개변수 id에 해당하는 todos의 text가 일치하는 li를 설정
    if (!li)
        return;
    //todo.id에 있다...그게....
    var todo = todos.find(function (todo) { return String(todo.id) === li.id; }); //이 때 todo는 객체
    if (!todo)
        return;
    var mend_input = document.createElement("input");
    mend_input.type = "text";
    mend_input.value = todo.text; //일단 input에 원래 쓰여있던 텍스트 대입
    mend_input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            var newText_1 = mend_input.value.trim();
            if (newText_1) {
                todos = todos.map(function (todo) {
                    return String(todo.id) === li.id ? __assign(__assign({}, todo), { text: newText_1 }) : todo;
                }); //todos에 수정된 text 업데이트
            }
            render(); //렌더를 한번더 해준다.
        }
    });
    //기존input을 span으로 교체 한다!! 
    li.replaceChild(mend_input, li.querySelector("span"));
}
function render() {
    //이 렌더라는 함수란 무엇일까?
    if (!list)
        return;
    list.innerHTML = ""; //일단 리스트 안 내용 초기화
    todos.forEach(function (todo) {
        var li = document.createElement("li");
        li.className = todo.done ? "done" : "";
        //todo.done이 true라면 li에 클래스명은 done으로 변경
        //li의 id를 객체의 id로 설정한다. 
        li.id = String(todo.id);
        var span = document.createElement("span");
        span.textContent = todo.text;
        span.style.cursor = "pointer";
        span.onclick = function () { return toggleDone(todo.id); };
        var mendBtn = document.createElement("button");
        mendBtn.textContent = "수정";
        mendBtn.onclick = function () { return updateTodo(todo.id); };
        var delBtn = document.createElement("button");
        delBtn.textContent = "삭제";
        delBtn.onclick = function () { return deleteTodo(todo.id); };
        var boxContainer = document.createElement("div");
        li.appendChild(span);
        li.appendChild(boxContainer);
        boxContainer.appendChild(mendBtn);
        boxContainer.appendChild(delBtn);
        list.appendChild(li);
    });
}
