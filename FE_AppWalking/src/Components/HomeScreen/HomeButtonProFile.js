import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {StyleHomeButtonProfile} from '../../Assets/Styles/HomeScreen';

export default function HomeButtonProfile() {
  return (
    <TouchableOpacity style={StyleHomeButtonProfile.ViewButtonProfile}>
      <Image
        style={StyleHomeButtonProfile.avatarUser}
        source={require('../../Assets/Images/avata.jpg')}
      />
      <Text style={StyleHomeButtonProfile.textUser}>Tin Lee</Text>
    </TouchableOpacity>
  );
}
