import React, { Component } from 'react';
import "./style.css";

class ScoreHeader extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluids score-area">
                <h2>YOUR SCORE: {this.props.score}  <span className="topScore"> YOUR TOP SCORE: {this.props.highScore}</span></h2>
            </div>
        )
    }
}

export default ScoreHeader;