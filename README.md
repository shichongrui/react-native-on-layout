# react-native-on-layout

Having to get a components rendered dimensions is a pretty common pattern in React Native and this is a component that makes doing so easy.

    import OnLayout from 'react-native-on-layout'

    <OnLayout>
        {({ width, height}) => (
            <Text>{width} {height}</text>
        )}
    </OnLayout>

OnLayout renders a `View` component to do `onLayout` so you can pass any `View` prop to `OnLayout` and it will pass them as props to the rendered `View` component.