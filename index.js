import React, { Component } from 'react'
import { View } from 'react-native'

export default class OnLayout extends Component {
  constructor (props) {
    super(props)
    this.state = { dimensions: { width: 0, height: 0 }}
  }

  onLayout = (e) => {
    this.setState({
      dimensions: e.nativeEvent.layout
    })
  }

  render () {
    let { children, ...props } = this.props
    return (
      <View {...props} onLayout={this.onLayout}>
        {this.props.children(this.state.dimensions)}
      </View>
    )
  }
}