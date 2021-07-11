import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { memo, useEffect, useState } from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { StyleHomeButtonProfile } from '../../Assets/Styles/HomeScreen';

const HomeButtonProfile = () => {
  const infor = useSelector(state => state.User.inforUser);
  const [inforUser, setInforUser] = useState(infor)

  useEffect(() => {
    AsyncStorage.getItem('ACCESS_TOKEN').then(res => {
      const data = JSON.parse(res);
      const inforUser = data.inforUser;
      setInforUser(inforUser)
    })
  }, [])
  console.log('inforUser:', inforUser);
  return (
    <TouchableOpacity style={StyleHomeButtonProfile.ViewButtonProfile}>
      <Image
        style={StyleHomeButtonProfile.avatarUser}
        source={require('../../Assets/Images/avata.jpg')}
      />
      <Text style={StyleHomeButtonProfile.textUser}>{inforUser?.lastname}</Text>
    </TouchableOpacity>
  );
};
export default memo(HomeButtonProfile);
