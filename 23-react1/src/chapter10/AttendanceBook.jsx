import React from "react";

const students = [
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

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key = {student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;