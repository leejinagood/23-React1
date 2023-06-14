import React, { useState } from "react"; //useState훅 가져오는 

function Toggle(props){ //props를 매개변수로 받음

    const [isToggleOn, setIsToggleOn] = useState(true);
    //isToggleOn이라는 상태 변수와 setIsToggleOn이라는 상태 변경 함수 선언
    //isToggleOn 초기 값은 true

    const handleClick = () => { //handleClick버튼을 클릭했을 때 호출되는 이벤트 핸들러
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }
    return(
        // isToggleOn 값에 따라 버튼에 표시되는 텍스트를 조건부로 설정
        <button onClick={handleClick}> 
            {isToggleOn ? '켜짐' : '꺼짐'}
        </button>
    );
}
export default Toggle; 
//컴포넌트를 외부에서 사용할 수 있도록 내보내는 구문