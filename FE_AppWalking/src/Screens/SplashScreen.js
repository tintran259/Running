import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { StylesSplashScreen } from '../Assets/Styles/SplashScreen'

export default function SplashScreen() {
   return (
      <View style={StylesSplashScreen.container}>
         <Image style={StylesSplashScreen.logo} source={require('../Assets/Images/speed.png')} />
         {/* <Text style={StylesSplashScreen.title}>Walking Now!</Text> */}
      </View>
   )
}