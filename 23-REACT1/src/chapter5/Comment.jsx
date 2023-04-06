import React from 'react';

import cat from './cat.JPG';

function Comment(props){
    const style={
        wrapper: {
            margin: 8,
            padding: 8,
            display: "flex",
            flexDirection: "row",
            border: "1px solid grey",
            borderRadius: 16,
        },
        imageContainer: {},
        image: {
            width: 50,
            height: 50,
            borderRadius: 25,
        },
        contentContainer: {
            marginLeft: 8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        nameText: {
            color: "black",
            fontSize: 16,
            fontWeight: "bold",
        },
        commentText: {
            color: "black",
            fontSize: 16,
        },
          };

    return (
        <div style={style.wrapper}>
          <div style={style.imageContainer}>
            <img src={cat} alt="" style={style.image} />
          </div>
          <div style={style.contentContainer}>
            <span style={style.nameText}>{props.name}</span>
            <span style={style.text}>{props.Comment}</span>
          </div>
        </div>
    );
}


export default Comment;