import React from 'react';
import { TouchableOpacity,View,Text } from 'react-native';
import Styles from './style';
import CustomIcon from '../icon/svgIcon';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
export default class HeaderRightIcon extends React.Component {
  render () {
    const { icon, text, msgCount } = this.props;
    return (

      <TouchableOpacity style={ Styles.headerRightContainer } onPress={this.onPress}>
        {
          icon ?
          <CustomIcon newMessage={this.state.showNewMsgIcon} name={icon=='inbox'?'new_msg':icon} />
          :
          <View/>
        }
        {
          text ?
          <Text style={Styles.headerRightText}>{this.props.text}</Text>
          :
          <View/>
        }
      </TouchableOpacity>
    )
  }
}
