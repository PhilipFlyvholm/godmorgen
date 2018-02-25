import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {WeatherWidget} from './weatherWidget';
//import NewsWidgets from './newsWidgets';
import Swiper from 'react-native-swiper';
import {RSSNews} from '../scripts/getRSSasJSON.js';
const newsURL = 'https://www.dr.dk/nyheder/service/feeds/allenyheder/';



export default class SlidesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      swipeContent: [<WeatherWidget/>]
    };
    this.setContent = this.setContent.bind(this);
  }
  setContent(json) {
    const content = this.state.swipeContent;
    json.map((item, key) => {
      content.push(
        <View key={key} style={styles.container}>
          <View style={styles.news}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsContent}>{item.content}</Text>
          </View>

        </View>
      );
    });
    this.setState({
      isLoaded: true,
      swipeContent: content
    });
  }
  render() {
    return (
      <Swiper showsButtons={false} loop={false} key={this.state.swipeContent.length} dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          activeDot={<View style={{backgroundColor: '#FF7575', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}>

        {this.state.swipeContent.map((item, key) => {
          return (
            <View key={key} style={styles.container}>
              {item}
            </View>
          )
        })}
      </Swiper>
    );
  }
  componentDidMount() {
    const rss = new RSSNews();
    rss.getJson(newsURL).then((result) => {
      const items = result.items;
      items.splice(5);
      this.setContent(items);
    });
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F80ED',
  },
  news: {
    paddingHorizontal: 15
  },
  newsTitle: {
    fontSize: 30,
    fontFamily: "ReemKufi",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
    textAlign: 'center',
    marginVertical: 15
  },
  newsContent: {
    fontSize: 15,
    fontFamily: "ReemKufi",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
    textAlign: 'center',
    marginVertical: 15
  }
});
