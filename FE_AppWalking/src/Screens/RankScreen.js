import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useMutiSetting} from '../hooks';
// components
import {RankTopSection, RankListItems} from '../Components/RankScreen';
import {StyleRankScreen} from '../Assets/Styles/RankStyle';
import {asyncGetListRank} from '../Store/Rank/action';

export default function RankScreen() {
  const {valueLang} = useMutiSetting();
  const dispatch = useDispatch();
  const rank = useSelector(state => state.Rank.rankList);
  const isRank = useSelector(state => state.App.isRank);
  useEffect(() => {
    dispatch(asyncGetListRank());
  }, [isRank]);
  return (
    <ScrollView style={StyleRankScreen.container}>
      <Text style={StyleRankScreen.title}>{valueLang.rank}</Text>
      <RankTopSection rank={rank} />
      {rank &&
        rank.map(item => {
          return <RankListItems key={item.rank} item={item} />;
        })}
    </ScrollView>
  );
}
