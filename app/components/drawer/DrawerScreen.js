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
import { Drawer,NavigationItem } from '../commonstyle/CommonStyle';
import LinearGradient from 'react-native-linear-gradient';

import CustomIcon from '../icon/svgIcon';
const styles = StyleSheet.create({
profileImg:{
  width:100,
  height:100,
  borderRadius:50
},
userDetail:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',

},
userName:{
  color:'#fff',
  fontSize:18,
  marginTop:15
},
userNavigation:{
  flex:1,
  paddingRight:50,
  paddingLeft:30,
},

userNavigationText:{
  color:'#fff',
  fontSize:15,
  marginLeft:12,
},
border:{
  paddingTop:0.5,
  paddingBottom:0.5,

}

});
export default class DrawerScreen extends Component {
  ProfileButtonClick = () => {
     this.props.navigation.navigate('Profile')
   }
   HomeButtonClick = () => {
      this.props.navigation.navigate('Dashboard')
    }
    CoursesButtonClick = () => {
       this.props.navigation.navigate('Courses')
     }
  render() {
    return (
      <ScrollView >

      <View style={{height:210}}>
        <LinearGradient  style={styles.userDetail} locations={[0,0.9,1]} colors={['#1F48A8','#1E3C82']}>
             <TouchableOpacity  onPress={this.ProfileButtonClick}>
             <Image source={require('../../assets/images/profile.jpg')}  style={styles.profileImg} />
             <Text style={styles.userName}>Laura Wilson</Text>
             </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={{height:410}}>

      <LinearGradient style={styles.userNavigation}  colors={['#1F48A9','#203E84']} start={{x: 0, y: 0.5}} end={{x: 1.0, y: 0.9}}>
        <NavigationItem onPress={this.HomeButtonClick}>
               <CustomIcon   style={styles.userNavigationIcon} name="home" viewport="0 0 482.9 482.9"/>
               <Text style={styles.userNavigationText}>Home</Text>
        </NavigationItem>
        <LinearGradient  locations={[0, 0.4,0.5,0.6, 1]} start={{x: 0, y: 0.5}} end={{x: 1.0, y: 0.5}} colors={['#1F48A9','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','#1F48A9']} style={styles.border}>
        </LinearGradient>
        <NavigationItem onPress={this.CoursesButtonClick}>
               <CustomIcon   style={styles.userNavigationIcon} name="courses" viewport="0 0 482.9 482.9"/>
               <Text style={styles.userNavigationText}>Courses</Text>
        </NavigationItem>
        <LinearGradient  locations={[0, 0.4,0.5,0.6, 1]} start={{x: 0, y: 0.5}} end={{x: 1.0, y: 0.5}} colors={['#1F48A9','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','#1F48A9']} style={styles.border}>
        </LinearGradient>
        <NavigationItem>
               <CustomIcon   style={styles.userNavigationIcon} name="account" viewport="0 0 482.9 482.9"/>
               <Text style={styles.userNavigationText}>Account</Text>
        </NavigationItem>
        <LinearGradient  locations={[0, 0.4,0.5,0.6, 1]} start={{x: 0, y: 0.5}} end={{x: 1.0, y: 0.5}} colors={['#1F48A9','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','#1F48A9']} style={styles.border}>
        </LinearGradient>
        <NavigationItem>
               <CustomIcon   style={styles.userNavigationIcon} name="phone" viewport="0 0 482.9 482.9"/>
               <Text style={styles.userNavigationText}>Contact US</Text>
        </NavigationItem>
        <LinearGradient  locations={[0, 0.4,0.5,0.6, 1]} start={{x: 0, y: 0.5}} end={{x: 1.0, y: 0.5}} colors={['#1F48A9','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','#1F48A9']} style={styles.border}>
        </LinearGradient>
        <NavigationItem>
               <CustomIcon   style={styles.userNavigationIcon} name="support" viewport="0 0 482.9 482.9"/>
               <Text style={styles.userNavigationText}>Support</Text>
        </NavigationItem>
        <LinearGradient  locations={[0, 0.4,0.5,0.6, 1]} start={{x: 0, y: 0.5}} end={{x: 1.0, y: 0.5}} colors={['#1F48A9','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','#1F48A9']} style={styles.border}>
        </LinearGradient>
        <NavigationItem>
               <CustomIcon   style={styles.userNavigationIcon} name="share" viewport="0 0 482.9 482.9"/>
               <Text style={styles.userNavigationText}>Share It</Text>
        </NavigationItem>
        <LinearGradient  locations={[0, 0.4,0.5,0.6, 1]} start={{x: 0, y: 0.5}} end={{x: 1.0, y: 0.5}} colors={['#1F48A9','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','#1F48A9']} style={styles.border}>
        </LinearGradient>
      </LinearGradient>

      </View>


      </ScrollView>

    );
  }
}
