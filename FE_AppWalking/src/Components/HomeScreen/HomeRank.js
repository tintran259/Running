import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import StyleHomeRank from '../../Assets/Styles/HomeScreen/StyleHomeRank';

export default function HomeRank({step}) {
  // Cha
  const day = new Date();
  const DayNow = day.getDay();
  const perStep = step*100/4000;
  return (
    <View style={StyleHomeRank.container}>
      <Text style={StyleHomeRank.title}>Bản Thống kê</Text>
      <View style={StyleHomeRank.ViewBody}>
        <View style={StyleHomeRank.ColY}>
          <Text style={StyleHomeRank.textColY}>4.000</Text>
          <Text style={StyleHomeRank.textColY}>3.200</Text>
          <Text style={StyleHomeRank.textColY}>2.400</Text>
          <Text style={StyleHomeRank.textColY}>1.600</Text>
          <Text style={StyleHomeRank.textColY}>800</Text>
          <Text style={StyleHomeRank.textColY}>0</Text>
        </View>
        <View horizontal style={StyleHomeRank.colYCol}>
          <View style={StyleHomeRank.lineRank}></View>
          <View style={StyleHomeRank.lineRank}></View>
          <View style={StyleHomeRank.lineRank}></View>
          <View style={StyleHomeRank.lineRank}></View>
          <View style={StyleHomeRank.lineRank}></View>
          <View style={StyleHomeRank.lineRank}></View>
          <View style={StyleHomeRank.ViewDay}>
            <View style={StyleHomeRank.ViewColStep}>
              <View style={[StyleHomeRank.ColStep1,DayNow === 1 ? {opacity:1, height:`${perStep}%`} : '']}></View>
              <View style={[StyleHomeRank.ColStep2,DayNow === 2 ? {opacity:1, height:`${perStep}%`} : '']}></View>
              <View style={[StyleHomeRank.ColStep3,DayNow === 3 ? {opacity:1, height:`${perStep}%`} : '']}></View>
              <View style={[StyleHomeRank.ColStep4,DayNow === 4 ? {opacity:1, height:`${perStep}%`} : '']}></View>
              <View style={[StyleHomeRank.ColStep5,DayNow === 5 ? {opacity:1, height:`${perStep}%`} : '']}></View>
              <View style={[StyleHomeRank.ColStep6,DayNow === 6 ? {opacity:1, height:`${perStep}%`} : '']}></View>
              <View style={[StyleHomeRank.ColStep7,DayNow === 0 ? {opacity:1, height:`${perStep}%`} : '']}></View>
            </View>
            <View style={StyleHomeRank.viewTextDay}>
              <Text style={[StyleHomeRank.textDay,DayNow === 1 ? {fontWeight:'bold',color:"#2d3436"} : '']}>T2</Text>
              <Text style={[StyleHomeRank.textDay,DayNow === 2 ? {fontWeight:'bold',color:"#2d3436"} : '']}>T3</Text>
              <Text style={[StyleHomeRank.textDay,DayNow === 3 ? {fontWeight:'bold',color:"#2d3436"} : '']}>T4</Text>
              <Text style={[StyleHomeRank.textDay,DayNow === 4 ? {fontWeight:'bold',color:"#2d3436"} : '']}>T5</Text>
              <Text style={[StyleHomeRank.textDay,DayNow === 5 ? {fontWeight:'bold',color:"#2d3436"} : '']}>T6</Text>
              <Text style={[StyleHomeRank.textDay,DayNow === 6 ? {fontWeight:'bold',color:"#2d3436"} : '']}>T7</Text>
              <Text style={[StyleHomeRank.textDay,DayNow === 0 ? {fontWeight:'bold',color:"#2d3436"} : '']}>CN</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
