import React from 'react';
import ReactDOM from 'react-dom';

function Clock(props){
    return(
        <div>
            <h1>안녕 리액트?</h1>
            <h2>현재시간 : {new Date().toLocaleDateString()}</h2>
        </div>
    )
}
export default Clock;