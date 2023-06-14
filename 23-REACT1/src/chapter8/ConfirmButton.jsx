import React, { useState } from "react";

function ConfirmButton(props) { //ConfirmButton 컴포넌트
    const [isConfirmed, setIsConfirmed] = useState(false); //isConfirmed라는 상태 변수와 setIsConfirmed라는 상태 변경 함수를 생성
    //isConfirmed의 초기값을 false

    const handleConfirm = () => { //화살표 함수 대입연산자
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    }; //setIsConfirmed를 호출하여 isConfirmed 값을 현재 값의 반대로 설정

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}> 
         {/* disabled={isConfirmed}는 버튼이 isConfirmed 값이 true일 때 비활성화되도록 설정하는 속성 */}
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;