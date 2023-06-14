import React, { useState } from "react";

function MyButton(props){ //props 매개변수임
    const handleDelete = (id, event) => { // 두 개의 매개변수를 받음
        console.log(id, event.target); //console.log를 사용하여 id와 event.target 값을 콘솔에 출력
    }
    return(
        <button onClick={(event) => this.deleteItem(1, event)}> 삭제하기</button>
        // 버튼을 클릭할 때마다 deleteItem 함수를 호출하는 이벤트 핸들러를 연결한 버튼 생성
        //deleteItem 함수에는 1과 event를 인자로 전달
    )
}
export default MyButton;