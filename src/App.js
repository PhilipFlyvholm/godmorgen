import React, { Component } from 'react';
import {Button, View} from 'react-native';
import {Icon} from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import MainScreen from './screens/main';

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Main',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#e03d3d',
        elevation: 0,       //remove shadow on Android
        shadowOpacity: 0,   //remove shadow on iOS
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <View style={{paddingRight: 10}}>
          <Icon
            name='sliders'
            type='feather'
            color='#fff'
            size={30}
            />
        </View>
      ),
    },
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
