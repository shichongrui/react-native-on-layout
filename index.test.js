import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'
import OnLayout from './index'


describe('OnLayout', () => {
  it('renders with the initial values of 0 0', () => {
    let tree = renderer.create(
      <OnLayout>
        {({ width, height }) => (
          <Text>{width} {height}</Text>
        )}
      </OnLayout>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with new width and height', () => {
    let render = renderer.create(
      <OnLayout>
        {({ width, height }) => (
          <Text>{width} {height}</Text>
        )}
      </OnLayout>
    )

    render.getInstance().onLayout({
      nativeEvent: {
        layout: { width: 100, height: 100 }
      }
    })

    expect(render.toJSON()).toMatchSnapshot()
  })
})