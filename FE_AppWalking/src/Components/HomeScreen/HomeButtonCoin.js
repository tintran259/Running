// libs
import React, { memo, useEffect, useState } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// hooks
import { useMutiSetting } from '../../hooks';
// others
import { StyleHomeButtonCoin } from '../../Assets/Styles/HomeScreen';

const HomeButtonCoin = () => {
  const navigation = useNavigation();
  const { valueLang, sumCoin } = useMutiSetting();
  const [coin, setCoin] = useState(sumCoin);
  return (
    <TouchableOpacity style={StyleHomeButtonCoin.viewBtnCoin} onPress={() => navigation.navigate('Coins', { allCoins: coin })}>
      <Text style={StyleHomeButtonCoin.textCoin}>{sumCoin}</Text>
      <Text style={StyleHomeButtonCoin.textCoin}>{valueLang.coin}</Text>
      <Image
        style={StyleHomeButtonCoin.imgCoin}
        source={require('../../Assets/Images/coin.png')}
      />
    </TouchableOpacity>
  );
};

export default memo(HomeButtonCoin);
