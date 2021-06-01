import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {useMutiSetting} from '../../hooks';
import StylesHomeScreen from '../../Assets/Styles/HomeScreen/StyleHomeScreenDark';
import {StyleHomeButtonCoin} from "../../Assets/Styles/HomeScreen"

export default function HomeButtonCoin({sumCoin}) {
  const {valueLang} = useMutiSetting();
  return (
    <TouchableOpacity style={StyleHomeButtonCoin.viewBtnCoin}>
      <Text style={StyleHomeButtonCoin.textCoin}>{sumCoin}</Text>
      <Text style={StyleHomeButtonCoin.textCoin}>{valueLang.coin}</Text>
      <Image
        style={StyleHomeButtonCoin.imgCoin}
        source={require('../../Assets/Images/coin.png')}
      />
    </TouchableOpacity>
  );
}
