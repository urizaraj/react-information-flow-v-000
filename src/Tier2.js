import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  render() {
    const childColor = this.state.childColor
    return (
      <div className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}} onClick={this.props.onClick} >
        <Tier3 color={childColor} handleChildClick={this.props.handleChildClick.bind(this)} />
        <Tier3 color={childColor} handleChildClick={this.props.handleChildClick.bind(this)} />
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      childColor: getReducedColor(nextProps.color)
    })
  }
}
