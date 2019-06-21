import React, { Component } from 'react';
import "./style.css";

class Jumbotron extends Component {
    render() {
    return (
        <div className="jumbotron jumbotron-fluid bg-dark heading">
          <h1>Puppy Memory Game</h1>
          <h3>Click as many pups as you can without clicking the same one twice. </h3>
        </div>
    )
    }
}

export default Jumbotron;