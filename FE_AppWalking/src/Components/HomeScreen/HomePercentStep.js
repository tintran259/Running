import React, { memo } from 'react';
import {View, Text} from 'react-native';

import {StyleHomePercentStep} from '../../Assets/Styles/HomeScreen';

const HomePercentStep =({step}) =>{
  return (
    <View style={StyleHomePercentStep.percentStep}>
      <View
        style={[
          StyleHomePercentStep.percentStepChild,
          {width: `${(step / 4000) * 100 >= 100 ? 100 : (step / 4000) * 100}%`},
        ]}></View>
      <View style={StyleHomePercentStep.sizeStep}>
        <View style={StyleHomePercentStep.lineStep1}>
          <View style={StyleHomePercentStep.line}></View>
          <View>
            <Text style={StyleHomePercentStep.textLine}>500</Text>
          </View>
        </View>
        <View style={StyleHomePercentStep.lineStep2}>
          <View style={StyleHomePercentStep.line}></View>
          <View>
            <Text style={StyleHomePercentStep.textLine}>2000</Text>
          </View>
        </View>
        <View style={StyleHomePercentStep.lineStep3}>
          <View>
            <Text style={StyleHomePercentStep.textLine}>4000</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default memo(HomePercentStep)
