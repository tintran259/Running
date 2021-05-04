import React from 'react'
import { View, Text, Image } from 'react-native'

//Style
import { StylesHomeScreen } from '../../Assets/Styles/HomeScreen'

export default function HomeBoxStepHeader({
   step
}) {
   return (
      <View style={StylesHomeScreen.ViewHeaderRun}>
         <View style={StylesHomeScreen.ViewStep} >
            <Image style={StylesHomeScreen.iconShoes} source={require("../../Assets/Images/runningLogo.png")} />
            <Text style={StylesHomeScreen.titleTime}>Hôm nay:</Text>
            <Text style={StylesHomeScreen.span}>
               <Text style={StylesHomeScreen.spanStep}>{step}</Text>/4000 bước</Text>
         </View>
      </View>
   )
}