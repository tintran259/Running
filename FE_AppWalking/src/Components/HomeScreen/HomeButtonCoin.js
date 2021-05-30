import React from 'react';
import { Text,TouchableOpacity,Image } from 'react-native';
import StylesHomeScreen from '../../Assets/Styles/HomeScreen/StyleHomeScreenDark';

export default function HomeButtonCoin ({sumCoin}) {
  return(
    <TouchableOpacity style={StylesHomeScreen.viewBtnCoin}>
      <Text style={StylesHomeScreen.textCoin}>{sumCoin}</Text>
      <Text style={StylesHomeScreen.textCoin}>Xu</Text>
      <Image style={StylesHomeScreen.imgCoin} source={require("../../Assets/Images/coin.png")} />
    </TouchableOpacity>
  )
}
