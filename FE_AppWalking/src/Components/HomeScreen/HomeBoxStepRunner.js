import React, {memo} from 'react';
import {View, Text, Image} from 'react-native';
import {useMutiSetting} from '../../hooks';
//Style
import {StylesHomeScreen} from '../../Assets/Styles/HomeScreen';

const HomeBoxStepHeader = ({step}) => {
  const {valueLang} = useMutiSetting();
  return (
    <View style={StylesHomeScreen.ViewHeaderRun}>
      <View style={StylesHomeScreen.ViewStep}>
        <Image
          style={StylesHomeScreen.iconShoes}
          source={require('../../Assets/Images/running11.png')}
        />
        <Text style={StylesHomeScreen.titleTime}>{valueLang.today}:</Text>
        <Text style={StylesHomeScreen.span}>
          <Text style={StylesHomeScreen.spanStep}>{step}</Text>/4000{' '}
          {valueLang.step}
        </Text>
      </View>
    </View>
  );
};
export default memo(HomeBoxStepHeader);
