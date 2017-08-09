import React, { Component } from 'react';

class GameBoard extends Component {
  render() {
    return (
      <div>
        Hello From Game Board
        {this.props.match.params.gameId}
      </div>
    );
  }
}

export default GameBoard;