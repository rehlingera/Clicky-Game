import React, { Component } from 'react';

function ClickItem(props) {
    return (
        <img
            style={
                {
                    width: "100%"
                }
            }
            src={props.src}
            className="clickImage"
            alt={props.alt}
            id={props.id}
            clicked={props.clicked}
            onClick={() => props.handleClickChange(props.id)}
        />
    );
}

export default ClickItem;