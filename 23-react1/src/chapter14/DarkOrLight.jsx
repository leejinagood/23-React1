import { useState, useCallback } from "react";
//useState는 상태를 관리하기 위해 사용되는 훅이고, useCallback은 콜백 함수를 메모이제이션하는 훅 이전에 생성된 콜백 함수 인스턴스를 재사용한다는 의미
import { useContext } from "react";
//useContext는 컨텍스트를 사용하기 위해 가져온 훅, 객체의 값을 읽어오는 기능을 제공
import React from "react";

const ThemeContext = React.createContext(); //ThemeContext라는 새로운 컨텍스트를 생성
ThemeContext.displayName = "ThemeContext"; //디스플레이 이름을 설정

function DarkOrLight(props) { //DarkOrLight 컴포넌트
    const [theme, setTheme] = useState("light");
    //theme과 setTheme 상태를 생성하고, 초기값을 "light"

    const toggleTheme = useCallback(() => {
        //toggleTheme이라는 콜백 함수를 생성합니다. 이 함수는 theme 상태에 따라 테마를 토글하는 역할
        //useCallback 훅을 사용하여 콜백 함수를 메모이제이션합니다. theme이 변경될 때마다 이 함수가 새로 생성되지 않고, 기존의 함수가 재사용
        if (theme == "light") {
            setTheme("dark");
        } else if (theme == "dark") {
            setTheme("light");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {/* ThemeContext.Provider 컴포넌트를 사용하여 theme과 toggleTheme을 제공 */}
            <MainContent />
        </ThemeContext.Provider>
    );
}

function MainContent(props) { //MainContent 컴포넌트
    const { theme, toggleTheme } = useContext(ThemeContext);
    //useContext 훅을 사용하여 ThemeContext의 값을 가져옵니다. theme과 toggleTheme을 추출하여 변수에 할당

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
            <button onClick={toggleTheme}>테마 변경</button>
            {/* 클릭 이벤트에 toggleTheme 함수를 연결하여 테마를 토글할 수 있도록 */}
        </div>
    );
}


export default DarkOrLight;