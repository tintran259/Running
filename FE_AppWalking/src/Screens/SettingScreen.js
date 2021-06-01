// libs
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useMutiSetting} from '../hooks';
import RadioButton from '../Customs/RadioButton';

// components
import {SettingDarkMode} from "../Components/SettingScreen"

// orthers
import {StyleSetting} from '../Assets/Styles/SettingScreen';

export default function SettingScreen() {
  const [value] = useState([
    {label: 'Vietnamese', value: 0},
    {label: 'English', value: 1},
  ]);

  const {valueLang, handleChangeToEn, handleChangeToVn} = useMutiSetting();

  const handleSelecetd = item => {
    const {value} = item;
    if (value === 0) {
      handleChangeToVn();
    } else {
      handleChangeToEn();
    }
  };

  return (
    <View style={StyleSetting.container}>
      <Text style={StyleSetting.title}>{valueLang.setting}</Text>
      <View style={StyleSetting.viewRadio}>
        <View style={StyleSetting.titleLang}>
          <View style={StyleSetting.line}></View>
          <Text style={StyleSetting.labelLang}>{valueLang.language}</Text>
        </View>
        <RadioButton
          items={value}
          onChange={handleSelecetd}
          borderStyleColor="#636e72"
          borderStyleSelected="#0984e3"
          circelStyleSelected="#0984e3"
          labelColor="#000"
        />
      </View>
      <SettingDarkMode/>
    </View>
  );
}
