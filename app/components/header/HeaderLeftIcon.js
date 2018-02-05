import React from 'react';
import { TouchableOpacity } from 'react-native';
import Styles from './style';
import CustomIcon from '../icon/svgIcon';
class HeaderLeftIcon extends React.Component {
  render () {
    const { icon } = this.props;
    return (
      <TouchableOpacity style={ Styles.headerLeftContainer}>
        <CustomIcon name={icon} />
      </TouchableOpacity>
    )
  }
}
export default HeaderLeftIcon;
