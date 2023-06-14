import React, { useState } from 'react';

const styles = { //스타일 객체
  greeting: { //greeting라는 키를 가지고 있음
    fontSize: 20,
    fontWeight: 'bold'
  }
};

function LoginControl(props) { //컴포넌트
  const [isLoggedln, setIsLoggedln] = useState(false); //isLoggedln이라는 상태 변수와 setIsLoggedln이라는 상태 변경 함수, 초기값은 false
  
  const handleClickLogin = () => {
    setIsLoggedln(true);
  };
//로그인 버튼을 클릭했을 때 호출되는 이벤트 핸들러입니다. setIsLoggedln(true)를 호출하여 isLoggedln 값을 true로 설정
  const handleClickLogout = () => {
    setIsLoggedln(false);
  };
//로그아웃 버튼을 클릭했을 때 호출되는 이벤트 핸들러입니다. setIsLoggedln(false)를 호출하여 isLoggedln 값을 false로 설정

  return (
    <>
      {isLoggedln && <span style={styles.greeting}>환영합니다!</span>}
      {/* isLoggedln 값이 true일 때에만 <span> 요소가 렌더링되도록 하는 조건부 렌더링 */}

      <button onClick={isLoggedln ? handleClickLogout : handleClickLogin}>
      {/* isLoggedln이 true인 경우 handleClickLogout 함수가 호출되며, false인 경우 handleClickLogin 함수가 호출 */}
      
        {isLoggedln ? '로그아웃' : '로그인'}
        {/* 텍스트는 isLoggedln 값에 따라 '로그아웃' 또는 '로그인'으로 설정 */}
      </button>
    </>
  );
}

export default LoginControl;
