import React, {memo} from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {StyleHomeButtonProfile} from '../../Assets/Styles/HomeScreen';

const HomeButtonProfile = () => {
  const inforUser = useSelector(state => state.User.inforUser);
  console.log('inforUser:', inforUser);
  return (
    <TouchableOpacity style={StyleHomeButtonProfile.ViewButtonProfile}>
      <Image
        style={StyleHomeButtonProfile.avatarUser}
        source={require('../../Assets/Images/avata.jpg')}
      />
      <Text style={StyleHomeButtonProfile.textUser}>{inforUser.firstname}</Text>
    </TouchableOpacity>
  );
};
export default memo(HomeButtonProfile);
