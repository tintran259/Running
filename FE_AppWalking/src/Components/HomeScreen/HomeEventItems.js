// libs
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useMutiSetting } from '../../hooks';
import { StyleHomeEvent } from '../../Assets/Styles/HomeScreen';
import { getDateByTimeZoneHour } from '../../Untils/FormatDate';

const HomeEventItems = ({ isJoin, handleJoinEventItems, item }) => {
  const [isJoined, setIsJoined] = useState(false);
  const { valueLang } = useMutiSetting();
  const handleJoin = () => {
    handleJoinEventItems(item);
    setIsJoined(true);
  };
  return (
    <View style={StyleHomeEvent.viewEventItems}>
      <Image
        style={StyleHomeEvent.imgBg}
        source={require("../../Assets/Images/event.jpg")}
      />
      <Text numberOfLines={2} style={StyleHomeEvent.titleEvent}>
        {item.name}
      </Text>
      <Text style={StyleHomeEvent.textDes} numberOfLines={3}>
        {item.detail_event}
      </Text>
      <View style={StyleHomeEvent.viewTime}>
        <View style={StyleHomeEvent.viewLabel}>
          <Text style={StyleHomeEvent.titleTimeStart}>{valueLang.start}</Text>
          <Text style={StyleHomeEvent.labelTime}>
            {getDateByTimeZoneHour(item.time_begin)}
          </Text>
        </View>
        <View style={StyleHomeEvent.viewLabel}>
          <Text style={StyleHomeEvent.titleTimeEnd}>{valueLang.end}</Text>
          <Text style={StyleHomeEvent.labelTime}>
            {getDateByTimeZoneHour(item.time_end)}
          </Text>
        </View>
      </View>
      <View style={StyleHomeEvent.viewLine}>
        <View style={StyleHomeEvent.limitLine}>
          <Text style={StyleHomeEvent.labelLimit}>0</Text>
          <Text style={StyleHomeEvent.labelLimit}>{item.steps_finish}</Text>
        </View>
        <View style={StyleHomeEvent.veiwlinePer}>
          <View style={StyleHomeEvent.perLine}></View>
        </View>
      </View>

      <View style={StyleHomeEvent.viewBtn}>
        <TouchableOpacity
          style={[
            StyleHomeEvent.btnJoin,
            isJoined && { backgroundColor: '#3498db' },
          ]}
          onPress={handleJoin}>
          {isJoined ? (
            <Text style={StyleHomeEvent.labelJoin}> {valueLang.joined}</Text>
          ) : (
            <Text style={StyleHomeEvent.labelJoin}> {valueLang.join}</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeEventItems;
