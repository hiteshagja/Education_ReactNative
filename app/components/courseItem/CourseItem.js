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
import { CourseSingleItem } from '../commonstyle/CommonStyle';
const styles = StyleSheet.create({
 container:{
   backgroundColor:'#fff',
   flex:1
 },
 courseTitle:{
   color:'#000',
   fontSize:16,

 },
 courseDetails:{
   marginLeft:20,
   flex:1,
 },
 courseRating:{
   flex:1,
   flexDirection:'row',
   alignItems:'center'
 },
 courseRatingText:{
   color:'#000',
   marginRight:7
 },
 coursePrice:{
   color:'#3370E7',
   fontSize:16,
   fontWeight:'700',
 }
});
export default class CourseItem extends Component {

  HandlerClick = () => {
     this.props.navigation.navigate('Profile')
   }
  render() {
    return (
        <CourseSingleItem onPress={this.HandlerClick}>
          <Image style={{width: 110, height: 140}}
            source={{uri:this.props.image}}/>
          <View style={styles.courseDetails}>
        <View style={{flex:0.9}}>
             <Text style={styles.courseTitle}>{this.props.title}</Text>
          </View>
          <View style={{flex:0.1,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
             <View style={styles.courseRating}>
                <Text style={styles.courseRatingText}>{this.props.rating}</Text>
                <CustomIcon style={styles.courseRatingIcon} viewport="0 0 55.867 55.867" width="10" height="10" name="star"/>
             </View>

             <Text style={styles.coursePrice}>$ {this.props.price}</Text>
          </View>
        </View>
        </CourseSingleItem>
    );
  }
}
