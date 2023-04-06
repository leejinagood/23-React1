import React from 'react';
import Comment from './Comment';

function CommentList(props){
    return(
        <div>
            <Comment name={"이진아"} Comment={"안녕하세요, 이진아입니다."}/>
            <Comment name={"이진아"} Comment={"안녕하세요, 이진아입니다."}/>
            <Comment name={"이진아"} Comment={"안녕하세요, 이진아입니다."}/>
        </div>
    )
}

export default CommentList;