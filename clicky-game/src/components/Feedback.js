import React, { Component } from "react";

const styles = {
    textStyle: {
        textAlign: "center",
        height:"100px"
    }
};

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            output: ""
        };
    };

    render() {
        return (
            <h2 style={styles.textStyle}>{this.props.children}</h2>
        )
    }
}

export default Feedback;