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
            this.setState({ currentScore: 0 });
            console.log("loss");
            this.handleIncorrect();
            this.handleReset();
        }
        else {
            target[0].clicked = true;
            this.setState({ currentScore: this.currentScore + 1 })
            console.log("good");
            this.handleIncrease();
            this.handleCorrect();
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
    };

    handleCorrect = () => {
        this.setState({ output: "Good kitty!" });
    };

    handleIncorrect = () => {
        this.setState({ output: "Oh no! Kitty bit you!" });
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
                    <a className="navbar-brand" href="#">Cat Consoler</a>
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