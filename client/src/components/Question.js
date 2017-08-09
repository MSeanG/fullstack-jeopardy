import React, { Component } from 'react';
import { TileStyle } from '../styles/Game';

class Question extends Component {
  constructor(){
    super();
    this.state = {
      active: false,
    };
  }

  _toggleActive = () => {
    this.setState({active: !this.state.active});
  }
  render() {
    return (
      <TileStyle question={true}>
        {this.props.question.value}
      </TileStyle>
    );
  }
}

export default Question;