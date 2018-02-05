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
import { ButtonWrapper } from '../commonstyle/CommonStyle';
import { TextField } from 'react-native-material-textfield';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../icon/svgIcon';
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    paddingLeft:25,
    paddingRight:25,
    paddingBottom:40,
  },
  butonContainer:{
    //width:320,
    //paddingTop:20,
  },
  buttonBackground:{
    //backgroundColor:'#3370E7',
    //borderRadius:100,
    //paddingTop:18,
    //paddingBottom:18,
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
  textView:{
    flex:0.9,
    marginLeft:15,
  },
  iconWrapper:{
    flex:0.1,
    justifyContent:'center',
    alignItems:'center',
    height:50,
  },
  metaTextWrapper:{
    marginTop:30
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
    alignItems:'center',
  },
  border:{
    paddingTop:0.5,
    paddingBottom:0.5,
    flex:1,
    width:'100%',
  }

});
export default class SignupScreen extends Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{width:0,height:0},
  }
  LoginButtonClick = () => {
     this.props.navigation.navigate('Login')
   }
   SignupButtonClick = () => {
      this.props.navigation.navigate('Dashboard')
    }
  render() {
    return (
    <ScrollView>
      <LinearGradient colors={['#1F48A9','#203E84',]} style={styles.container}>

        <View style={styles.logo}>
          <Image source={require('../../assets/images/logo.png')}  style={{width: 250, height: 90,marginTop:30,marginBottom:20}} />
        </View>
        <View style={styles.flexRow}>
          <View style={styles.iconWrapper}>
            <CustomIcon  name="user" viewport="0 0 482.9 482.9"/>
          </View>
          <View style={styles.textView}>
            <TextField
              label='USER NAME'
              value='Laura wilson'
              style={styles.inputText}
              lineWidth = {0.1}
              activeLineWidth = {0.1}
              inputContainerPadding = {25}
              textColor = '#fff'
              baseColor = '#fff'
              tintColor = '#fff'
              labelFontSize = '14'
              />
          </View>
        </View>
        <LinearGradient  locations={[0, 0.4,0.5,0.6, 1]} start={{x: 0, y: 0.5}} end={{x: 1.0, y: 0.5}} colors={['#1F48A9','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','#1F48A9']} style={styles.border}>
        </LinearGradient>
        <View style={styles.flexRow}>
          <View style={styles.iconWrapper}>
            <CustomIcon name="lock"/>
          </View>
          <View style={styles.textView}>
            <TextField
              type='password'
              label='PASSWORD'
              style={styles.inputText}
              lineWidth = {0.1}
              activeLineWidth = {0.1}
              labelPadding = {4}
              textColor = '#fff'
              baseColor = '#fff'
              tintColor = '#fff'
              />
          </View>
        </View>
        <LinearGradient  locations={[0, 0.4,0.5,0.6, 1]} start={{x: 0, y: 0.5}} end={{x: 1.0, y: 0.5}} colors={['#1F48A9','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','#1F48A9']} style={styles.border}>
        </LinearGradient>
        <View style={styles.flexRow}>
          <View style={styles.iconWrapper}>
            <CustomIcon name="mail"/>
          </View>
          <View style={styles.textView}>
            <TextField
              type='email'
              label='EMAIL'
              style={styles.inputText}
              lineWidth = {0.1}
              activeLineWidth = {0.1}

              textColor = '#fff'
              baseColor = '#fff'
              tintColor = '#fff'
              />
          </View>
        </View>
        <LinearGradient  locations={[0, 0.4,0.5,0.6, 1]} start={{x: 0, y: 0.5}} end={{x: 1.0, y: 0.5}} colors={['#1F48A9','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','#1F48A9']} style={styles.border}>
        </LinearGradient>
        <View style={styles.flexRow}>
          <View style={styles.iconWrapper}>
            <CustomIcon name="mobile"/>
          </View>
          <View style={styles.textView}>
            <TextField
              type='number'
              label='PHONE NUMBER'
              style={styles.inputText}

              lineWidth = {0.1}
              activeLineWidth = {0.1}

              textColor = '#fff'
              baseColor = '#fff'
              tintColor = '#fff'
              />
          </View>
        </View>
        <LinearGradient  locations={[0, 0.4,0.5,0.6, 1]} start={{x: 0, y: 0.5}} end={{x: 1.0, y: 0.5}} colors={['#1F48A9','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','rgba(255,255,255,0.4)','#1F48A9']} style={styles.border}>
        </LinearGradient>
        <ButtonWrapper onPress={this.SignupButtonClick}>
            <Text style={styles.loginText}>Signup</Text>
        </ButtonWrapper>
        <View style={styles.metaTextWrapper}>
          <Text style={styles.metaMuteText}>Already Member?</Text>
          <TouchableOpacity onPress={this.LoginButtonClick}>
            <Text style={styles.metaText}>Login</Text>
          </TouchableOpacity>
        </View>

      </LinearGradient>
    </ScrollView>
    );
  }
}
