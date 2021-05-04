import React, { useState } from 'react'

import { View, StatusBar, Image, TouchableOpacity, Text, Animated, ScrollView } from 'react-native'
import { StylesHomeScreen } from '../Assets/Styles/HomeScreen'


import { HomeSection } from '../Components/HomeScreen'


export default function HomeScreen() {

   return (
      <>
         <StatusBar backgroundColor="#fdce27" />
         <ScrollView style={StylesHomeScreen.container}>
            <View style={StylesHomeScreen.bannerHeader}>
               <Image style={StylesHomeScreen.imgBanner} source={require("../Assets/Images/bg_run2.jpg")} />
            </View>
            <HomeSection />
            <View style={StylesHomeScreen.body}>

            </View>
         </ScrollView>
      </>
   )
}


