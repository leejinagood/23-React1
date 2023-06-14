import React, { useState } from "react";

function SignUp(props) {
    const [name, setName] = useState("");
    // name이라는 상태 변수와 setName이라는 상태 변경 함수를 생성합니다. useState("")는 name의 초기값을 빈 문자열

    const [gender, setGender] = useState("남자");
    //gender라는 상태 변수와 setGender라는 상태 변경 함수를 생성합니다. useState("남자")는 gender의 초기값을 "남자"

    const handleChangeName = (event) => {
        setName(event.target.value);
    }; //입력 필드의 변경 이벤트를 처리하는 함수, 입력된 값을 name 상태에 설정

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    }; //선택 필드의 변경 이벤트를 처리하는 함수, 선택된 값을 gender 상태에 설정

    const handleSubmit = (event) => {
        alert(`이름 : ${name}, 성별 : ${gender}`);
        event.preventDefault();
    }; //alert을 사용하여 입력된 이름과 성별을 알림으로 표시하고, event.preventDefault()를 호출하여 폼의 기본 동작을 막습니다.
    //값을 폼으로 보낼 때 자동 새로고침을 막는 것

    return (
        <form onSubmit={handleSubmit}> 
        {/* 제출 이벤트가 발생했을 때 handleSubmit 함수가 호출 */}

            <label>
                이름 :
                <input type="text" value={name} onChange={handleChangeName} />
                {/* 이름 입력 필드 */}
                {/* onChange={handleChangeName}은 입력 값이 변경될 때마다 handleChangeName 함수가 호출 */}
            </label>

            <br></br>

            <label>
                성별 :
                <select value={gender} onChange={handleChangeGender}>
                {/* 성별 선택 필드 */}
                {/* 선택 값이 변경될 때마다 handleChangeGender 함수가 호출 */}
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>

            <button type="submit">제출</button>

        </form>
    )
}

export default SignUp;