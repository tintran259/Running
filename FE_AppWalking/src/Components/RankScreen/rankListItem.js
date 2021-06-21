// libs
import React from 'react';
import {View, Text, Image} from 'react-native';
import {useMutiSetting} from '../../hooks';
// orthers
import {StyleRankScreen} from '../../Assets/Styles/RankStyle';

const RankListItems = ({item}) => {
  const {valueLang} = useMutiSetting();
  return (
    <View style={StyleRankScreen.sectionItem}>
      <Text style={StyleRankScreen.topNumber}>{`0${item.rank}`.slice(-2)}</Text>
      <Text numberOfLines={1} style={StyleRankScreen.labelUser}>
        {item.lastname}
      </Text>
      <View style={StyleRankScreen.stepUser}>
        <Text style={StyleRankScreen.stepLabel}>{item.total_steps}</Text>
        <Text style={StyleRankScreen.derea}>/{valueLang.step}</Text>
      </View>
    </View>
  );
};

export default RankListItems;
