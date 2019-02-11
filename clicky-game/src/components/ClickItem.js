import React, { Component } from 'react';

const styles = {
    imgStyle: {
        width: "100%"
    }
};

function ClickItem(props, state) {
    return (
        <img
            src={props.src}
            style={styles.imgStyle}
            className="clickImage"
            alt={props.alt}
            id={props.id}
            clicked={props.clicked}
            onClick={() =>props.handleClickChange(props.id)}
        />
    );
}

export default ClickItem;