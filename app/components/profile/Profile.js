import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import HeaderRightIcon from '../header/HeaderRightIcon';
import HeaderLeftIcon from '../header/HeaderLeftIcon';
import { UserProfile,Divider } from '../commonstyle/CommonStyle';
import CourseItem from '../courseItem/CourseItem';
import CustomIcon from '../icon/svgIcon';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1,
    padding:15
  },
  containerTab:{
    flex:1,
    height:100,
    backgroundColor:'blue',
  },
  userName:{
    color:'#000',
    fontSize:20,

  },
  userEmail:{
    color:'#666',
      fontSize:14,
  },
  profileImg:{
    width:100,
    height:100,
    borderRadius:50,
    elevation:1,
  },
});
const initialLayout = {
  height:0,
  width: Dimensions.get('window').width,
};
const coursesTab = () =>
<ScrollView style={{marginTop:20}}>
  <CourseItem image="https://images.techhive.com/images/article/2015/08/business-team-meeting1-100608026-primary.idge.jpg" price="25.99" rating="3.4" title="Continuing Education-Online Plus Audio Format"/>
  <Divider/>
  <CourseItem image="http://theworkzine.com/wp-content/uploads/2017/06/meeting.jpg" price="34.99" rating="4.4" title="Missouri SalesPerson Pre-Exam"/>
  <Divider/>
  <CourseItem image="http://www.hfflp.com/App_Common/143/139/Library/10/Services_Advisory_Services.jpg" price="22.99" rating="4.4" title="Kansas Salesperson Pre-Exam"/>
</ScrollView>;
const accountTab = () => <View style={[ styles.containerTab, { backgroundColor: '#673ab7' } ]} />;
const certificatesTab = () => <View style={[ styles.containerTab, { backgroundColor: 'red' } ]} />;

export default class Profile extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'courses', title: 'Courses' },
      { key: 'account', title: 'Account' },
      { key: 'certificates', title: 'Certificates' },
    ],
  };
  _handleIndexChange = index => this.setState({ index });

  _renderLabel = props => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
      const inputRange2 = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(
      inputIndex => (inputIndex === index ? '#fff' : '#000')
    );
    const outputBgRange = inputRange2.map(
      inputIndex => (inputIndex === index ? 'red' : '#fff')
    );

    const color = props.position.interpolate({
      inputRange,
      outputRange,
    });

    const backgroundColor = outputBgRange;

    return (

      <View style={{flex: 1, alignItems:'center',justifyContent:'center',width:'100%',height:'100%',backgroundColor:index === 0 ? '#1E3E89':'#fff'}}>
      <Animated.Text style={[styles.label, {color}]}>
        {route.title}
      </Animated.Text>
    </View>
    );
  };

  _renderHeader = props =>

  <TabBar

   renderLabel={this._renderLabel(props)}
  style = {{backgroundColor:'#fff',elevation:0,opacity:1}}
  indicatorStyle={{backgroundColor:'transparent',opacity:1}}
  tabStyle = {{padding:0,height:40,backgroundColor:'#fff',borderWidth:0.5,borderColor:'#ddd'}}
  labelStyle = {{fontSize:12,color:'#000',backgroundColor:'red'}}

  {...props} />;



_renderScene = SceneMap({
  courses: coursesTab,
  account: accountTab,
  certificates: certificatesTab,
});


static navigationOptions = {
  title: "Profile",
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
  },

}

render() {

  return (
    <View style={styles.container}>
      <UserProfile>
            <Image source={require('../../assets/images/profile.jpg')}  style={styles.profileImg} />
           <View style={{  marginLeft:20,}}>
          <Text style={styles.userName}>Laura Wilson</Text>
            <Text style={styles.userEmail}>laurawilson@gmail.com</Text>
          </View>
      </UserProfile>
    <TabViewAnimated
      navigationState={this.state}
      renderScene={this._renderScene}
      renderHeader={this._renderHeader}
      onIndexChange={this._handleIndexChange}
      />
  </View>
  );
}
}
