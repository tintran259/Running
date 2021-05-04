import React from 'react'
import { View, Text } from 'react-native'

import { StylesHomeScreen } from '../../Assets/Styles/HomeScreen'

export default function HomePercentStep({
   step
}) {
   return (
      <View style={StylesHomeScreen.percentStep}>
         <View style={[StylesHomeScreen.percentStepChild, { width: `${(step / 4000) * 100}%` }]}></View>
         <View style={StylesHomeScreen.sizeStep}>
            <View style={StylesHomeScreen.lineStep1}>
               <View style={StylesHomeScreen.line}></View>
               <View>
                  <Text style={StylesHomeScreen.textLine}>
                     500
                  </Text>
               </View>
            </View>
            <View style={StylesHomeScreen.lineStep2}>
               <View style={StylesHomeScreen.line}></View>
               <View>
                  <Text style={StylesHomeScreen.textLine}>
                     2000
                  </Text>
               </View>
            </View>
            <View style={StylesHomeScreen.lineStep3}>
               <View>
                  <Text style={StylesHomeScreen.textLine}>
                     4000
                  </Text>
               </View>
            </View>
         </View>
      </View>
   )
}

