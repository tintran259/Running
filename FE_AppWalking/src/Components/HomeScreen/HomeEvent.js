// libs
import React from "react";
import {View,Text} from "react-native";
import {useMutiSetting} from "../../hooks";
// components
import HomeEventItems from "./HomeEventItems";
// orthers
import {StyleHomeEvent} from "../../Assets/Styles/HomeScreen"


const HomeEvent = () =>{
  const {valueLang} = useMutiSetting();
  return(
    <View style={StyleHomeEvent.container}>
      <Text style={StyleHomeEvent.title}>{valueLang.event}</Text>
      <HomeEventItems/>
    </View>
  )
}

export default HomeEvent;