// src/components/GameItem.js

import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class GameItem extends Component {
  joinGame() {
    this.props.onJoin(this.props.game)
  }

  render() {
    const { game } = this.props

    return (
      <li>
        Game by { game.createdBy.name }
        <RaisedButton onClick={this.joinGame.bind(this)} label="Join game" />
      </li>
    )
  }
}

export default GameItem
