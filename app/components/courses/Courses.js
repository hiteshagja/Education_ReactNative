import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import HeaderRightIcon from '../header/HeaderRightIcon';
import HeaderLeftIcon from '../header/HeaderLeftIcon';
import CustomIcon from '../icon/svgIcon';
import CourseItem from '../courseItem/CourseItem';
import { Divider } from '../commonstyle/CommonStyle';
import LinearGradient from 'react-native-linear-gradient';
const styles = StyleSheet.create({
 container:{
   backgroundColor:'#fff',
   flex:1,
   paddingTop:30,
   backgroundColor:'#E6E7EC'
 },
 filterButtonText:{
   color:'#fff',
   textAlign:'center',
     fontSize: 20,
     lineHeight:60,
 }

});
export default class Courses extends Component {
  static navigationOptions = {
    title: "Our Courses",
    headerLeft: (<HeaderLeftIcon icon={'left-arrow'}/>),
    headerRight: (<HeaderLeftIcon icon={'search'}/>),
    headerStyle: {
      height: 60,
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
      <View  style={styles.container}>
      <ScrollView style={{padding:15,paddingTop:0,marginBottom:25}}>
        <CourseItem image="https://images.techhive.com/images/article/2015/08/business-team-meeting1-100608026-primary.idge.jpg" price="25.99" rating="3.4" title="Continuing Education-Online Plus Audio Format"/>
        <Divider/>
        <CourseItem image="http://theworkzine.com/wp-content/uploads/2017/06/meeting.jpg" price="34.99" rating="4.4" title="Missouri SalesPerson Pre-Exam"/>
        <Divider/>
        <CourseItem image="http://www.hfflp.com/App_Common/143/139/Library/10/Services_Advisory_Services.jpg" price="22.99" rating="4.4" title="Kansas Salesperson Pre-Exam"/>

      </ScrollView>
      <TouchableOpacity>
       <LinearGradient  style={styles.filterButton} locations={[0,0.9,1]} colors={['#1F48A8','#1E3C82']}>

          <Text style={styles.filterButtonText}>Filters</Text>
       </LinearGradient>
          </TouchableOpacity>
      </View>

    );
  }
}
