import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
const styles = StyleSheet.create({
  introWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:70,
    paddingLeft:30,
    paddingRight:30,
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: '#fff',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
    fontSize: 14,
  },
  title: {
    fontSize: 25,
    color: '#fff',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
    marginTop:30,
  }
});
const slides = [
  {
    key:'1',
    title:'Certificate',
    image:require('../../assets/images/profile.jpg'),
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor',
    backgroundColor: '#3370E7',
  },
  {
    key:'2',
    title:'Online Learning',
    image:require('../../assets/images/profile.jpg'),
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor',
    backgroundColor: '#1257E0',
  },
  {
    key:'3',
    title:'Online Teaching',
    image:require('../../assets/images/profile.jpg'),
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor',
    backgroundColor: '#0840AD',
  }
];
export default class AppIntro extends Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{width:0,height:0},
  }

  _renderItem = props => (
    <View  style={[styles.introWrapper,{backgroundColor:props.backgroundColor}]}>

        <Image style={styles.image} source={props.image} />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>

   </View>
  );
  handleButtonClick = () => {
     this.props.navigation.navigate('Login')
   }
  render() {
    return (

      <AppIntroSlider
          slides={slides}
          showSkipButton={true}
          renderItem={this._renderItem}
          onDone={this.handleButtonClick}
          onSkip={this.handleButtonClick}
        />


    );
  }
}
