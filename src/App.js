import React, { Component } from "react";
import images from "./images.json";
import "./App.css";
import Jumbotron from "./components/jumbotron/index";
import ScoreHeader from "./components/scoreHeader/index";
import MemoryCard from "./components/memoryCard/index";
import Container from "./components/cardContainer/index";
import shuffle from 'shuffle-array';
let keyList = [];
let bigScore;
let wrong;


class App extends Component {
  constructor(props) {
    super(props)
    this.cardShuffle = this.cardShuffle.bind(this);
    this.cardClick = this.cardClick.bind(this);
    this.highScore = this.highScore.bind(this);
  }
  
  state = {
    images,
    score: 0,
    topScore: 0
  }

  highScore = (state) => {
    this.state.score >= this.state.topScore ? 
      bigScore = (this.state.score) +1 : bigScore = this.state.topScore;
    }
  

  cardShuffle = (state) => {
    shuffle(this.state.images);
    this.setState ({
      images
    })
  }

  
  

  cardClick = (id) => {
    // console.log(id);
    let key = id;
    let score = this.state.score;
    let myKey = key;
    
    // console.log(myKey)

    if (!keyList.includes(myKey)) {
      
      score++;
      this.setState({
        score: score
      });
      this.highScore(this.state);
      this.setState({
        topScore: bigScore
      });
      console.log(this.state.topScore)
      // console.log("key " + key)
      keyList.push(myKey);
      // console.log("keyList: " + keyList)
      // console.log("Object BEFORE" + JSON.stringify(this.state.images));
      this.cardShuffle(this.state);
      wrong = false;
      // console.log("Object " + JSON.stringify(this.state.images[id -1]));
      
    } else {
      score = 0
      keyList = [];
      this.setState ({
        score: score
      });
      wrong = true;

    } 
  }

  render() {
    // console.log("Object AFTER" + JSON.stringify(this.state.images));
    return (
      <Container>
        <Jumbotron />
        <ScoreHeader score={this.state.score} highScore={this.state.topScore}/>
        {this.state.images.map(image => (
          <MemoryCard
          wrong={wrong}
          cardClick={this.cardClick} 
          cardShuffle={this.cardShuffle}
          key={image.id} 
          id={image.id}
          name={image.name} 
          image={image.image} 
          />
        ))}
      </Container>
    );
  }
}

export default App;
