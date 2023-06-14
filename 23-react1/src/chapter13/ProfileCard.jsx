import React, { useState } from "react";

function Card(props) {
    const { title, backgroundColor, children } = props; 
    //props 객체에서 title, backgroundColor, children 속성을 추출하여 각각의 변수에 할당

    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {title && <h1>{title}</h1>} 
            {/* {title && <h1>{title}</h1>}은 title이 존재할 경우 <h1> 요소를 렌더링 */}
            {children}
            {/* 카드 컴포넌트의 자식 요소를 렌더링 */}
        </div>
    );
}

function ProfileCard(props) { //프로필 카드 컴포넌트를 정의하는 함수 컴포넌트
    return (
        <Card title="Jina Lee" backgroundColor="#2E8B57">
            <p >안녕하세요, 나는 이진아</p>
            <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
        </Card>
    );
}

export default ProfileCard;