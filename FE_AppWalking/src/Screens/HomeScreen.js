import React, { useState } from 'react'

import { View, StatusBar, Image, TouchableOpacity, Text, Animated, ScrollView } from 'react-native'
import { StylesHomeScreen } from '../Assets/Styles/HomeScreen'


//Component + Action
import { HomeBoxStepHeader, HomeGetGift, HomePercentStep } from '../Components/HomeScreen'


export default function HomeScreen() {

   //CONTRUCTOR
   const [step, setStep] = useState(3900);


   const initialProps = {
      step,
   }

   return (
      <>
         <StatusBar backgroundColor="#fdce27" />
         <ScrollView style={StylesHomeScreen.container}>
            <View style={StylesHomeScreen.bannerHeader}>
               <Image style={StylesHomeScreen.imgBanner} source={require("../Assets/Images/bg_run2.jpg")} />
            </View>
            <View style={StylesHomeScreen.ViewRun}>
               <HomeBoxStepHeader {...initialProps} />
               <View style={StylesHomeScreen.ViewFooterRun}>
                  <HomePercentStep {...initialProps} />
                  <HomeGetGift {...initialProps} />
               </View>
            </View>
            <View style={StylesHomeScreen.body}>
            </View>
         </ScrollView>
      </>
   )
}


