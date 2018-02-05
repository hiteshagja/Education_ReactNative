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
import CustomIcon from '../icon/svgIcon';
const styles = StyleSheet.create({

  container: {

    flex:1,
    alignItems:'center',
    paddingLeft:25,
    paddingRight:25,
  },
  butonContainer:{
    width:320,
    paddingTop:20,
  },
  buttonBackground:{
    backgroundColor:'#3370E7',
    borderRadius:100,
    paddingTop:18,
    paddingBottom:18,
  },
  loginText:{
    color:'#fff',
    textAlign:'center',
    fontSize:18,
    fontWeight:'700',
  },
  inputText:{
    color:'#A6AECD',
    fontSize:14,
  },
  metaTextWrapper:{
    marginTop:40
  },
  metaMuteText:{
    textAlign:'center',
    color:'#A6AECD',
  },

  metaText:{
    textAlign:'center',
    color:'#fff',
    marginTop:10,
    fontSize:16,
  },

  flexRow:{
    flexDirection:'row',
    alignItems:'center'
  }

});
export default class LoginScreen extends Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{width:0,height:0},
  }
  LoginButtonClick = () => {
     this.props.navigation.navigate('Dashboard')
   }
   SignupButtonClick = () => {
      this.props.navigation.navigate('Signup')
    }
  render() {
    return (
      <LinearGradient colors={['#1F48A9','#203E84',]} style={styles.container}>
        <View style={styles.logo}>
          <Image source={require('../../assets/images/logo.png')}  style={{width: 250, height: 90,marginTop:50,marginBottom:50}} />
        </View>
        <View style={styles.flexRow}>
          <View style={{flex:0.1}}>
            <CustomIcon name="user" viewport="0 0 482.9 482.9"/>
          </View>
          <View style={{flex:0.9,marginLeft:15}}>
            <TextField
              label='USER NAME'
              value='Laura wilson'
              style={styles.inputText}
              textColor = '#fff'
              baseColor = '#fff'
              tintColor = '#fff'
              />
          </View>
        </View>
        <View style={styles.flexRow}>
          <View style={{flex:0.1}}>
            <CustomIcon name="lock"/>
          </View>
          <View style={{flex:0.9,marginLeft:15}}>
            <TextField
              type='password'
              label='PASSWORD'
              style={styles.inputText}
              textColor = '#fff'
              baseColor = '#fff'
              tintColor = '#fff'
              />
          </View>
        </View>
        <View style={styles.butonContainer}>
          <TouchableOpacity style={styles.buttonBackground}  onPress={this.LoginButtonClick}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.metaTextWrapper}>
          <Text style={styles.metaMuteText}>Don't have an account?</Text>
          <TouchableOpacity onPress={this.SignupButtonClick}>
            <Text style={styles.metaText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

    );
  }
}
