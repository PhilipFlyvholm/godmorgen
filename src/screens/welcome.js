import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          godmorgen
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}><Text style={styles.buttonText}>lad os gå igang</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e03d3d',
  },
  title: {
    fontSize: 50,
    fontFamily: "ReemKufi",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonText: {
    fontFamily: "ReemKufi",
    color: '#000',
    fontSize: 25
  }
});
