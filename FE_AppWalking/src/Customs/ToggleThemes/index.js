// libs
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useMutiSetting} from '../../hooks';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFeather from 'react-native-vector-icons/Feather';
//orthers
import {COLOR} from '../../Contants';
import StyleToggleThemes from './styleToggleThems';

export default function ToggleThemes({widthToggle, heightToggle, circelColor}) {
  const {isToggle, setIsToggle} = useMutiSetting();
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <View style={StyleToggleThemes.ViewToggle}>
      <TouchableOpacity
        style={[
          StyleToggleThemes.toggle_mode,
          isToggle && {borderWidth: 1, borderColor: COLOR.Border},
          widthToggle && {width: widthToggle},
          heightToggle && {height: heightToggle},
        ]}
        onPress={handleToggle}>
        <View
          style={[
            StyleToggleThemes.circel_toggle,
            isToggle ? {left: `55%`} : {left: `3%`},
            circelColor && {backgroundColor: circelColor},
          ]}></View>
        {isToggle ? (
          <IconFeather name="moon" style={StyleToggleThemes.iconMoon} />
        ) : (
          <IconFontisto name="day-sunny" style={StyleToggleThemes.iconSun} />
        )}
      </TouchableOpacity>
    </View>
  );
}
