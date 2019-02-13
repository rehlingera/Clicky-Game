import React, { Component } from "react";
import ClickItem from './ClickItem';
import CurrentScore from './CurrentScore';
import TopScore from './TopScore';
import Feedback from './Feedback';
import Cats from '../cats.json';

// Function for randomizing the images array
var randomize = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

randomize(Cats);

const styles = {
    divStyle: {
        display: "inline-block",
        width: "25%"
    },
    h2Style: {
        fontFamily: "Comfortaa, cursive"
    }
};

class Game extends Component {
    constructor(props) {
        super(props);
    };

    state = {
        currentScore: 0,
        topScore: 0,
        clicked: false,
        output: "Console the scared cats! But be careful not to pet the same cat twice! Stressed out cats bite people!"
    }

    handleClickChange = (id) => {
        console.log(id)
        var target = Cats.filter(item => item.id === id);
        if (target[0].clicked) {
            console.log("loss");
            this.handleIncorrect();
            this.handleReset();
        }
        else {
            target[0].clicked = true;
            this.setState({ currentScore: this.currentScore + 1 })
            console.log("good");
            this.handleIncrease();
            this.state.currentScore === 11 ? this.handleWin() : this.handleCorrect();
            randomize(Cats);
        }

    };

    handleIncrease = () => {
        if (this.state.topScore === this.state.currentScore) {
            this.setState({ currentScore: this.state.currentScore + 1 });
            this.setState({ topScore: this.state.topScore + 1 });
        }
        else {
            this.setState({ currentScore: this.state.currentScore + 1 })
        }
    };

    handleReset = () => {
        for (var i=0; i<Cats.length; i++) {
            Cats[i].clicked=false;
        };
        this.setState({ currentScore: 0 });
    };

    handleCorrect = () => {
        this.setState({ output: "Good kitty!" });
    };

    handleIncorrect = () => {
        this.setState({ output: "Oh no! Kitty bit you! Start over." });
    };

    handleWin = () => {
        this.setState({ output: "You won! You are a cat-comforting prodigy! Click any cat to start again." })
        this.handleReset();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
                    <h3 style={styles.h2Style}>Cat Consoler</h3>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="https://github.com/rehlingera/Clicky-Game">See the Code</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <CurrentScore>{this.state.currentScore}</CurrentScore> | <TopScore>{this.state.topScore}</TopScore>
                        </span>
                    </div>
                </nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <Feedback>{this.state.output}</Feedback>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'></div>
                        <div className='col-8'>
                            {
                                Cats.map(
                                    item => (
                                        <div style={styles.divStyle} key={item.id}>
                                            <ClickItem
                                                src={item.image}
                                                alt={item.id}
                                                id={item.id}
                                                handleClickChange={this.handleClickChange}
                                                handleIncrease={this.handleIncrease}
                                                handleReset={this.handleReset}
                                                clicked={item.clicked}
                                            />
                                        </div>
                                    )
                                )
                            }
                        </div>
                        <div className='col=2'></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;