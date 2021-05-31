// libs
import React from 'react';
import {View, Text, Image} from 'react-native';
import {useMutiSetting} from "../../hooks"
// orthers
import {StyleRankScreen} from '../../Assets/Styles/RankStyle';

const RankTopSection = () => {
  const {valueLang} = useMutiSetting();
  return (
    <View style={StyleRankScreen.chartsWrapper}>
      <View style={StyleRankScreen.top2}>
        <View style={StyleRankScreen.ViewAvatar}>
          <Image
            style={StyleRankScreen.avatar}
            source={require('../../Assets/Images/avata.jpg')}
          />
          <Text numberOfLines={1} style={StyleRankScreen.nameMember}>Tinlee</Text>
        </View>
        <View style={StyleRankScreen.ColunmTop2}>
          <Text style={StyleRankScreen.labelTop}>{valueLang.top2}</Text>
        </View>
      </View>
      <View style={StyleRankScreen.top1}>
        <View style={StyleRankScreen.ViewAvatar}>
          <Image
            style={StyleRankScreen.avatar}
            source={require('../../Assets/Images/avata.jpg')}
          />
          <Text numberOfLines={1} style={StyleRankScreen.nameMember}>Tinlee</Text>
        </View>
        <View style={StyleRankScreen.ColunmTop1}>
          <Image
            style={StyleRankScreen.iconCup}
            source={require('../../Assets/Images/winner.png')}
          />
          <Text style={StyleRankScreen.labelTop}>{valueLang.top1}</Text>
        </View>
      </View>
      <View style={StyleRankScreen.top3}>
        <View style={StyleRankScreen.ViewAvatar}>
          <Image
            style={StyleRankScreen.avatar}
            source={require('../../Assets/Images/avata.jpg')}
          />
          <Text numberOfLines={1} style={StyleRankScreen.nameMember}>Tinlee</Text>
        </View>
        <View style={StyleRankScreen.ColunmTop3}>
          <Text style={StyleRankScreen.labelTop}>{valueLang.top3}</Text>
        </View>
      </View>
    </View>
  );
};

export default RankTopSection;
