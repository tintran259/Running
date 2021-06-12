// libs
import React, {memo, useState} from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useMutiSetting} from '../../hooks';
// components
import HomeEventItems from './HomeEventItems';
// actions
import {asyncJoinEvent} from '../../Store/Event/action';
// orthers
import {StyleHomeEvent} from '../../Assets/Styles/HomeScreen';

const HomeEvent = () => {
  const dispatch = useDispatch();
  const {valueLang} = useMutiSetting();
  const listEvent = useSelector(state => state.Event.listEvent);
  const token = useSelector(state => state.Auth.token);
  const handleJoinEventItems = item => {
    const {event_id} = item;
    dispatch(asyncJoinEvent({token, event_id}));
  };
  return (
    <SafeAreaView style={StyleHomeEvent.container}>
      <Text style={StyleHomeEvent.title}>{valueLang.event}</Text>
      {listEvent &&
        listEvent.map(item => {
          return (
            <HomeEventItems
              key={item.event_id}
              item={item}
              handleJoinEventItems={handleJoinEventItems}
            />
          );
        })}
    </SafeAreaView>
  );
};

export default memo(HomeEvent);
