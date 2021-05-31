import React from 'react';
import {View, Text,ScrollView} from 'react-native';
import {useMutiSetting} from "../hooks";
// components
import {RankTopSection,RankListItems} from "../Components/RankScreen";
import {StyleRankScreen} from "../Assets/Styles/RankStyle";

export default function RankScreen() {
  const {valueLang} = useMutiSetting();
  return (
    <ScrollView style={StyleRankScreen.container}>
      <Text style={StyleRankScreen.title}>{valueLang.rank}</Text>
      <RankTopSection/>
      <RankListItems/>
    </ScrollView>
  );
}
