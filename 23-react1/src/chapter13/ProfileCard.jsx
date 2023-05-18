import React, { useState } from "react";
import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title="Jina Lee" backgroundColor="#2E8B57">
            <p >안녕하세요, 나는 이진아</p>
            <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
        </Card>
    );
}

export default ProfileCard;