// libs
import React from 'react';
import {View, Text, Image} from 'react-native';
import {useMutiSetting} from "../../hooks"
// orthers
import {StyleRankScreen} from '../../Assets/Styles/RankStyle';

const RankListItems = () => {
  const {valueLang} = useMutiSetting();
  return (
    <View style={StyleRankScreen.sectionItem}>
      <Text style={StyleRankScreen.topNumber}>01</Text> 
      <Image
        style={StyleRankScreen.avatarU}
        source={require('../../Assets/Images/avata.jpg')}
      />
      <Text numberOfLines={1} style={StyleRankScreen.labelUser}>TinLee</Text>
      <View style={StyleRankScreen.stepUser}>
        <Text style={StyleRankScreen.stepLabel}>2000</Text>
        <Text style={StyleRankScreen.derea}>/{valueLang.step}</Text>
      </View>
    </View>
  );
};

export default RankListItems;
