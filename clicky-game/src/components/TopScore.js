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

function TopScore(props) {
    return (
        <div className='topScoreDiv' style={styles.divStyle}>
            <span style={styles.textStyle} className='topScore'>Top Score: {props.children}</span>
        </div>
    );
};

export default TopScore;