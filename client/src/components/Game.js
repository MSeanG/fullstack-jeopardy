import React, { Component } from 'react';
import axios from 'axios';
import GameBoard from './GameBoard';
import { GameStyle } from '../styles/Game';

class Game extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      user: "",
      points: 0,
      categories: [],
      board: []
    }
  }

  componentWillMount(){
    const id = this.props.match.params.gameId;
    axios.get(`/api/game/${id}`).then((res) => {
      this.setState({
        id: res.data._id,
        user: res.data.user,
        points: res.data.points,
        categories: res.data.categories,
        board: res.data.board
      });
    });
  }

  render() {
    return (
      <GameStyle>
        <h1>Jeopardy</h1>
        <h3>Hello {this.state.user}</h3>
        <h3>Points: {this.state.points}</h3>
        <GameBoard categories={this.state.categories} />
      </GameStyle>
    );
  }
}

export default Game;