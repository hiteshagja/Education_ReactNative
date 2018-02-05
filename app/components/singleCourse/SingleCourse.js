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
const styles = StyleSheet.create({
 container:{
   backgroundColor:'#fff',
   flex:1,
   padding:15,
   paddingTop:30,
   backgroundColor:'#E5E7EC'
 },
 courseBanner:{
   width:'100%',
      height:170,
      borderRadius:10,

 },
 descriptionArea:{
   paddingBottom:50
 },
 descriptionText:{
   textAlign:'center',
   marginTop:20,
   color:'#666',
   lineHeight:25,
 }

});
export default class SingleCourse extends Component {

  static navigationOptions = {
    title: "React Native",
    headerLeft: (<HeaderLeftIcon icon={'left-arrow'}/>),
    headerRight: (<HeaderLeftIcon icon={'share'}/>),
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
      <ScrollView style={styles.container}>
           <Image style={styles.courseBanner}  source={{uri: 'http://blog.rangle.io/content/images/2016/05/React-native_Banner2.png'}} />
           <View style={styles.descriptionArea}>
             <Text style={styles.descriptionText}>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
             </Text>
             <Text style={styles.descriptionText}>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
             </Text>
            </View>
      </ScrollView>

    );
  }
}
