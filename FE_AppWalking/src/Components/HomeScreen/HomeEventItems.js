// libs
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useMutiSetting} from '../../hooks';
import {StyleHomeEvent} from '../../Assets/Styles/HomeScreen';

const HomeEventItems = () => {
  const {valueLang} = useMutiSetting();
  return (
    <View style={StyleHomeEvent.viewEventItems}>
      <Image
        style={StyleHomeEvent.imgBg}
        source={{
          uri:
            'https://lh3.googleusercontent.com/proxy/mFKA_BJR9JnUWsCXstYfjIIRieVrmMcD1ye_5zqYu1HHPQuotObvyUPH8Xc3nW8beYxGRe2xcofgI2W-n-pQYx0NDxiGD1J9GckhJqxayVgOWDA5m5bjLJFFr9IxOsLTNujzFlEg0-VPnJAHqv0TtluY-YV62Lyfvvpl5pM-JrBUoA',
        }}
      />
      <Text numberOfLines={2} style={StyleHomeEvent.titleEvent}>
        DASDASD
      </Text>

      <View style={StyleHomeEvent.viewBtn}>
        <TouchableOpacity style={StyleHomeEvent.btnDetail}>
          <Text style={StyleHomeEvent.labelDetail}> {valueLang.detail}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleHomeEvent.btnJoin}>
          <Text style={StyleHomeEvent.labelJoin}> {valueLang.join}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeEventItems;
