import React, { useState } from 'react';
const styles = {
  greeting: {
    fontSize: 20,
    fontWeight: 'bold'
  }
};
function LoginControl(props) {
  const [isLoggedln, setIsLoggedln] = useState(false);
  const handleClickLogin = () => {
    setIsLoggedln(true);
  };
  const handleClickLogout = () => {
    setIsLoggedln(false);
  };
  return (
    <>
      {isLoggedln && <span style={styles.greeting}>환영합니다!</span>}
      <button onClick={isLoggedln ? handleClickLogout : handleClickLogin}>
        {isLoggedln ? '로그아웃' : '로그인'}
      </button>
    </>
  );
}
export default LoginControl;
