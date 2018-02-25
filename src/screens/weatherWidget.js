'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {Weather} from '../scripts/getWeather';
import {icons} from '../assets/icons'

class Temputures extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.rowFlex}>
        <View>
          <Text style={styles.tempTitle}>HØJST</Text>
          <Text style={styles.tempText}>
            {this.props.maxTemperature}°
          </Text>
        </View>
        <View>
          <Text style={styles.tempTitle}>MINDST</Text>
          <Text style={styles.tempText}>
            {this.props.minTemperature}°
          </Text>
        </View>
      </View>
    );
  }
}


class WeatherIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const icon = icons[this.props.icon];
    return (
      <View>
        <Image
          style={{width: 100, height: 100}} source={icon}/>
      </View>
    );
  }
}

export class WeatherWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxTemperature: null,
      minTemperature: null,
      cloudState: '',
      icon: '',
      cityName: '',
      isLoading: true
    };
  }
  componentDidMount() {
    const service = new Weather();
    service.fetchData().then((result) => {
      this.setState({
        minTemperature: result.main.temp_min,
        maxTemperature: result.main.temp_max,
        cityName: result.name,
        cloudState: result.weather[0].description,
        icon: result.weather[0].icon,
        isLoading: false
      });
    });
  }
  render() {
    if (this.state.isLoading) {
      return (
          <Text style={styles.title}>
            Loading..
          </Text>
      );
    }
    return (
        <View style={styles.container}>

          <Text style={styles.cityText}>{this.state.cityName}</Text>
          <WeatherIcon icon={this.state.icon}/>
          <Text style={styles.cloudText}>{this.state.cloudState}</Text>
          <Temputures minTemperature={this.state.minTemperature} maxTemperature={this.state.maxTemperature}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F80ED',
  },
  rowFlex: {
    flexDirection: 'row'
  },
  tempTitle: {
    fontSize: 30,
    fontFamily: "ReemKufi",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
    textAlign: 'center',
    marginHorizontal: 15
  },
  cloudText: {
    fontSize: 30,
    fontFamily: "ReemKufi",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
    textAlign: 'center',
    marginHorizontal: 25
  },
  cityText: {
    fontSize: 20,
    fontFamily: "ReemKufi",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
    textAlign: 'center',
    marginHorizontal: 25
  },
  tempText: {
    fontSize: 25,
    fontFamily: "ReemKufi",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
    textAlign: 'center'
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
