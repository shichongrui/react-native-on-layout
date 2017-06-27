import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'
import onLayout from './index'

const Comp = (props) => <Text>{ props.width } { props.height }</Text>
const CompOnLayout = onLayout(Comp)

describe('OnLayout', () => {
  it('renders with the initial values of 0 0', () => {
    let tree = renderer.create(
      <CompOnLayout />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with new width and height', () => {
    let render = renderer.create(
      <CompOnLayout />
    )

    render.getInstance().onLayout({
      nativeEvent: {
        layout: { width: 100, height: 100 }
      }
    })

    expect(render.toJSON()).toMatchSnapshot()
  })
})