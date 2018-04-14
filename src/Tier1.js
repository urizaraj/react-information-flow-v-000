import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {
  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const childColor = this.state.childColor
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={childColor} onClick={this.handleChildClick.bind(this)} handleChildClick={this.handleChildClick} />
        <Tier2 color={childColor} onClick={this.handleChildClick.bind(this)} handleChildClick={this.handleChildClick} />
      </div>
    )
  }

  handleClick(event) {
    const newColor = getRandomColor()
    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor)
    })
  }

  handleChildClick(event) {
    event.stopPropagation()
    const newColor = getRandomColor()
    this.setState({
      childColor: getReducedColor(newColor)
    })
  }
}
