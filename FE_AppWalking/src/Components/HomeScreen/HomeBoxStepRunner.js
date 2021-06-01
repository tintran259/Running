import React, {memo} from 'react';
import {View, Text, Image} from 'react-native';
import {useMutiSetting} from '../../hooks';
//Style
import {StyleHomeBoxStep} from '../../Assets/Styles/HomeScreen';


const HomeBoxStepHeader = ({step}) => {
  const {valueLang} = useMutiSetting();
  return (
    <View style={StyleHomeBoxStep.ViewHeaderRun}>
      <View style={StyleHomeBoxStep.ViewStep}>
        <Image
          style={StyleHomeBoxStep.iconShoes}
          source={require('../../Assets/Images/running11.png')}
        />
        <Text style={StyleHomeBoxStep.titleTime}>{valueLang.today}:</Text>
        <Text style={StyleHomeBoxStep.span}>
          <Text style={StyleHomeBoxStep.spanStep}>{step}</Text>/4000{' '}
          {valueLang.step}
        </Text>
      </View>
    </View>
  );
};
export default memo(HomeBoxStepHeader);
