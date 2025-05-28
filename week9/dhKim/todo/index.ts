export {};//이 파일을 모듈 스코프로 만듦

interface Todo {
    id: number;
    text: string;
    done: boolean;
}


let todos: Todo[]=[];
//처음에 todo를 비워둠 let으로 설정한이유는 갱신이 되기 때문...


const form = document.getElementById("todo-form") as HTMLFormElement|null;
const input = document.getElementById("todo-input") as HTMLInputElement|null;
const list = document.getElementById("todo-list") as HTMLUListElement|null;

if(!form||!input||!list){
    throw new Error("폼 요소 존재x");
}

form.addEventListener("submit", (e:Event) => {
    //submit버튼이 눌리면
    if(!input)return;
  e.preventDefault();//초기화 방지
  const text = input.value.trim();
  if (text) {
    const newTodo:Todo = {
      id: Date.now(),
      text,
      done: false,
    };
    todos.push(newTodo);//todos는 객체들의 배열
    input.value="";//인풋초기화
    render();//렌더링
  }
});

function deleteTodo(id:number):void {
    //li를 삭제해 버린다.
    todos=todos.filter(todo=>todo.id!==id);
    render();
}

function toggleDone(id:number):void {
    //렌더 자체를 다시할 것이므로 todos의 done속성을 
    //바꿔버리면 된다. map을 사용해서 todos를 갱신한다.
   
    todos=todos.map(todo=>todo.id===id?{
        ...todo,done:!todo.done//새로운 객체를 생성하면서 
        //done값만 변경
        //todo객체를 복사한 후, done 속성만 업데이트한다.
        //여기서 ...todo를  쓰지않으면 기존 todo객체의 
        //나머지 속성이 전부 사라진다.
    }:todo);
    //렌더 자체를 다시한다
    render();
}

function updateTodo(id:number):void{
    if(!list) return;
    const li=Array.from(list.children).find((li)=>
        (li as HTMLLIElement).id===String(id)
    )as HTMLLIElement | undefined;
    //const li는 
    //list의 자식요소들(li) 중에 li의 span요소의 textContent와 
    // 매개변수 id에 해당하는 todos의 text가 일치하는 li를 설정

    if(!li) return;
    //todo.id에 있다...그게....
    const todo=todos.find(todo=>String(todo.id)===li.id);//이 때 todo는 객체
    if(!todo) return;
    
    const mend_input=document.createElement("input") as HTMLInputElement;
    mend_input.type="text";
    mend_input.value=todo.text;//일단 input에 원래 쓰여있던 텍스트 대입
    
    mend_input.addEventListener("keypress",(e:KeyboardEvent)=>{
        if(e.key==="Enter"){
            const newText=mend_input.value.trim();
            if(newText){
                todos=todos.map(todo=>
                    String(todo.id)===li.id?{...todo,text:newText}:todo
                );//todos에 수정된 text 업데이트
            }
            render();//렌더를 한번더 해준다.
        } 
    });

    //기존input을 span으로 교체 한다!! 
    const newSpan:HTMLSpanElement|null=li.querySelector("span");
    if(!newSpan) return;
    li.replaceChild(mend_input,newSpan);
    
}

function render() : void {
    //이 렌더라는 함수란 무엇일까?
    if(!list) return;
    list.innerHTML = "";//일단 리스트 안 내용 초기화

    todos.forEach(todo => {//각각의 투두 요소마다 시행
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";
    //todo.done이 true라면 li에 클래스명은 done으로 변경
    //li의 id를 객체의 id로 설정한다. 
    li.id=String(todo.id);
    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.onclick = () => toggleDone(todo.id);
    
    const mendBtn=document.createElement("button");
    mendBtn.textContent="수정";
    mendBtn.onclick=()=>updateTodo(todo.id);

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    const boxContainer=document.createElement("div");

    li.appendChild(span);
    li.appendChild(boxContainer);
    boxContainer.appendChild(mendBtn);
    boxContainer.appendChild(delBtn);
    list.appendChild(li);
  });
}

