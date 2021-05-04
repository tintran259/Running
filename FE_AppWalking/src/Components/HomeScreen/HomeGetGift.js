import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'


import { StylesHomeScreen } from '../../Assets/Styles/HomeScreen'

export default function HomeGetGift() {
   return (
      <View style={StylesHomeScreen.getGift}>
         <TouchableOpacity style={StylesHomeScreen.btnGift1}>
            <Image style={StylesHomeScreen.giftbox} source={require("../../Assets/Images/giftbox.png")} />
         </TouchableOpacity>
         <TouchableOpacity style={StylesHomeScreen.btnGift2}>
            <Image style={StylesHomeScreen.giftbox} source={require("../../Assets/Images/giftbox.png")} />
         </TouchableOpacity>
         <TouchableOpacity style={StylesHomeScreen.btnGift3}>
            <Image style={StylesHomeScreen.giftbox} source={require("../../Assets/Images/giftbox.png")} />
         </TouchableOpacity>
      </View>
   )
}