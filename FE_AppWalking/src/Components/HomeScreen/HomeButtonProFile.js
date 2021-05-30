import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import StylesHomeScreen from '../../Assets/Styles/HomeScreen/StyleHomeScreenDark';

export default function HomeButtonProfile() {
  return (
    <TouchableOpacity style={StylesHomeScreen.ViewButtonProfile}>
      <Image style={StylesHomeScreen.avatarUser} source={require('../../Assets/Images/avata.jpg')} />
      <Text style={StylesHomeScreen.textUser}>Tin Lee</Text>
    </TouchableOpacity>
  );
}
