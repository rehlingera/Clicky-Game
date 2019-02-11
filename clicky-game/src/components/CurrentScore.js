import React, { Component } from "react"

const styles = {
    textStyle: {
        textAlign: "right"
    },
    divStyle: {
        display: "inline-block",
        padding: "0px 10px 0px 10px",
        margin: "8px 0px 8px 0px"
    }
};

function CurrentScore(props) {
    return (
        <div className='currentScoreDiv' style={styles.divStyle}>
            <span style={styles.textStyle} className='currentScore'>Current Score: {props.children}</span>
        </div>
    );
};

export default CurrentScore;