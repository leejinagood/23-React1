import React, { useState } from "react";

function ConfirmButton(props){
    const[isConfirmed, setIsConfirmed] = useState(false);
    const handleConfirm = () => { //화살표 함수와 대입연산자
        setIsConfirmed((prevIsConfiremd) => !prevIsConfiremd);
    };
    return(
        <button onClick={handleConfirm} disabled={isConfirmed}>
        {isConfirmed ? '확인 됨' : '확인하기'}
    </button>
    )
}

export default ConfirmButton;