import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import LinearGradient from 'react-native-linear-gradient';
import HeaderRightIcon from '../header/HeaderRightIcon';
import HeaderLeftIcon from '../header/HeaderLeftIcon';
import Swiper from 'react-native-swiper';
import CustomIcon from '../icon/svgIcon';
const styles = StyleSheet.create({
 container:{
   backgroundColor:'#fff',
   flex:1
 },

  slide1: {
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    backgroundColor: '#97CAE5',
  },
  slide3: {
    backgroundColor: '#92BBD9',
  },
  heading:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'900',
    color:'#1E3F8C',
    marginTop:15,
  },
  coursesWrapper:{
    flex: 0.65,
    flexDirection:'row',
    marginTop:20,
    paddingLeft:15,
    paddingRight:15,
      flexWrap:'wrap',
     justifyContent:'space-between'
  },
  coursesBox:{
    width:'48%',
    marginBottom:25,
  },
  courseImg:{
    borderWidth:1,
    borderColor:'#ddd',
    borderStyle:'solid',
    height:170,
  },
  coursesHeading:{
    color:'#000',
    marginTop:10,
  },
  coursesPrice:{
    color:'#3370E7',
    fontWeight:'900',
    fontSize:18,
    marginTop:2,
  }
});
export default class Dashboard extends Component {
  static navigationOptions = {
    title: "Dashboard",
    headerLeft: (<HeaderLeftIcon icon={'menu-bar'}/>),
    headerRight: (<HeaderLeftIcon icon={'search'}/>),
    headerStyle: {
      height: 60,
      paddingLeft:15,
      paddingRight:15,
      justifyContent: 'flex-end',
      backgroundColor:'#1F47A6',
    },
    headerTitleStyle: {
      color: '#FFFFFF',
      justifyContent: 'flex-end',
      alignSelf: 'center',
      fontSize: 20
    }


  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{flex: 0.35,height:170}}>
          <Swiper style={styles.wrapper}


            dotColor='rgba(0,0,0,0.4)'
            activeDotColor='rgba(0,0,0,1)'
            >
            <View style={styles.slide1}>
              <Image style={{width: '100%', height: 170}}
                source={{uri: 'http://hkxlogistics.com/wp-content/uploads/2016/07/career-banner.jpg'}}/>
            </View>
            <View style={styles.slide2}>
              <Image style={{width: '100%', height: 200}}
                source={{uri: 'http://www.bjc.co.th/uploads/2016/11/Career_Banner1.jpg'}}/>
            </View>

            <View style={styles.slide3}>
              <Image style={{width: '100%', height: 200}}
                source={{uri: 'https://www.janrain.com/sites/default/files/career-slider-2.jpg'}}/>
            </View>
          </Swiper>
        </View>
        <View>
          <Text style={styles.heading}>Our Courses</Text>
        </View>
        <View style={styles.coursesWrapper}>
           <View style={styles.coursesBox}>
             <Image style={styles.courseImg}
               source={{uri: 'https://www.janrain.com/sites/default/files/career-slider-2.jpg'}}/>
             <Text style={styles.coursesHeading}>Continuing Education - Online Plus Audio Format</Text>
             <Text  style={styles.coursesPrice}>$ 34.99</Text>
          </View>
          <View style={styles.coursesBox}>
            <Image style={styles.courseImg}
              source={{uri: 'https://www.janrain.com/sites/default/files/career-slider-2.jpg'}}/>
            <Text style={styles.coursesHeading}>Continuing Education - Online Plus Audio Format</Text>
            <Text  style={styles.coursesPrice}>$ 34.99</Text>
         </View>
         <View style={styles.coursesBox}>
           <Image style={styles.courseImg}
             source={{uri: 'https://www.janrain.com/sites/default/files/career-slider-2.jpg'}}/>
           <Text style={styles.coursesHeading}>Continuing Education - Online Plus Audio Format</Text>
           <Text  style={styles.coursesPrice}>$ 34.99</Text>
        </View>
        <View style={styles.coursesBox}>
          <Image style={styles.courseImg}
            source={{uri: 'https://www.janrain.com/sites/default/files/career-slider-2.jpg'}}/>
          <Text style={styles.coursesHeading}>Continuing Education - Online Plus Audio Format</Text>
          <Text  style={styles.coursesPrice}>$ 34.99</Text>
       </View>

        </View>
      </ScrollView>

    );
  }
}
