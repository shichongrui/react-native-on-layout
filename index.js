import React, { Component } from 'react'
import { View } from 'react-native'
import hoistStatics from 'hoist-non-react-statics'

export default function onLayout (TheirComponent) {
  class OnLayout extends Component {
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
      return (
        <View style={this.props.containerStyle} onLayout={this.onLayout}>
          <TheirComponent {...this.props} {...this.state.dimensions} />
        </View>
      )
    }
  }

  return hoistStatics(OnLayout, TheirComponent)
}