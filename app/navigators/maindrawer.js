import React from 'react'; import {View} from 'react-native';
import { DrawerNavigator} from 'react-navigation';
import DrawerScreen from '../components/drawer/DrawerScreen';
import MainStack from './mainstack';
const MainDrawer =
DrawerNavigator(
  { 	MainStack: { screen: MainStack},
},{
  initialRouteName: 'MainStack',
  contentComponent: props => <DrawerScreen {...props} />,
});
export default MainDrawer;
