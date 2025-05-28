import React from "react";

export default function Search({search,handleSearch,handleBtn}){
    return (//handleSearh는 입력된 search값으로 카드를 찾아내는 함수??
        //handlebtn은 버튼을 누르면 handleSearch를 시행?
        //onChange는 사용자가 입력필드의 값을 변경할 때마다 호출되는 이벤트 핸들러
        <>
            <input value={search} onChange={handleSearch}/>
            <button onClick={handleBtn}>검색</button>
            
        </>
        
    );
}