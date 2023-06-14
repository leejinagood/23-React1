import React from "react";

const students = [ //students라는 배열은 학생들의 정보를 담고 있습니다. 각 학생은 id와 name을 가진 객체로 표현
    {
        id: 1,
        name: "이진아",
    },
    {
        id: 2,
        name: "리진아",
    },
    {
        id: 3,
        name: "진진자라",
    },
    {
        id: 4,
        name: "야옹",
    },
];

function AttendanceBook(props) { //AttendanceBook 컴포넌트
    return (
        <ul> 
            {/* <ul>은 순서 없는 목록 요소 */}
            {students.map((student) => {
                // students 배열을 순회하면서 각 항목에 대해 함수를 실행하는 map 메서드를 사용합니다. student 매개변수는 배열의 각 요소
                
                return <li key = {student.id}>{student.name}, {student.id}</li>;
                // 리스트 아이템을 생성합니다. key 속성은 각 항목의 고유한 식별자를 제공
            })}
        </ul>
    );
}

export default AttendanceBook;