# react-native-on-layout

Having to get a components rendered dimensions is a pretty common pattern in React Native and this is a higher order component that makes doing so easy.

    import onLayout from 'react-native-on-layout'

    const Comp = (props) => <Text>{ this.props.width } { this.props.height }</Text>
    const CompOnLayout = onLayout(Comp)

    // use in a render method
    <CompOnLayout />

The HOC will wrap your component in a `View` component in order to do `onLayout` so if you need to style that outer view you can use the `containerStyle` prop.

    <CompOnLayout containerStyle={{ flex: 1 }} />