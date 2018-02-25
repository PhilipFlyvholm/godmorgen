import React from 'react';
import WelcomeScreen from './welcome';
import SlideScreen from './slides';

export default class MainScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {started: false};
    this.handleStart = this.handleStart.bind(this);
    this.props.navigation.setParams({started: this.state.started});
      console.log(this.props.navigation.state);
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: (params && params.started) ? '#2F80ED' : '#e03d3d',
        elevation: 0,       //remove shadow on Android
        shadowOpacity: 0,   //remove shadow on iOS
      },
    };
  };
  render() {
    return this.state.started ? <SlideScreen/> : <WelcomeScreen onPress={this.handleStart}/>;
  }
  handleStart() {
    this.setState({
        started: true
    });
    this.props.navigation.setParams({started: true});

  }
}
