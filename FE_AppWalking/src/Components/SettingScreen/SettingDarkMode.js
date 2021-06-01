import React from "react";
import {View,Text} from "react-native";
import ToggleThemes from "../../Customs/ToggleThemes";
import {useMutiSetting} from "../../hooks"
// orthers
import {StyleSetting} from "../../Assets/Styles/SettingScreen"

const SettingDarkMode = () =>{
  const {valueLang} = useMutiSetting();
  return(
    <View style={StyleSetting.sectionDarkMode}>
      <Text style={StyleSetting.titleDarkMode}>{valueLang.dark}</Text>
      <ToggleThemes 
        widthToggle={40}
        heightToggle={20}
      />
    </View>
  )
}

export default SettingDarkMode ;