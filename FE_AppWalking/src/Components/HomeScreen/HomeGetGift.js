import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'


import { StylesHomeScreen } from '../../Assets/Styles/HomeScreen'

export default function HomeGetGift({
   step
}) {
   console.log("step:", step);
   return (
      <View style={StylesHomeScreen.getGift}>
         <TouchableOpacity style={StylesHomeScreen.btnGift1} disabled={step >= 500 ? false : true}>
            {
               step >= 500 ?
                  <Image style={StylesHomeScreen.giftbox} source={require("../../Assets/Images/giftbox2.png")} />
                  :
                  <Image style={StylesHomeScreen.giftbox} source={require("../../Assets/Images/giftbox1.png")} />
            }
         </TouchableOpacity>
         <TouchableOpacity style={StylesHomeScreen.btnGift2} disabled={step >= 2000 ? false : true}>
            {
               step >= 2000 ?
                  <Image style={StylesHomeScreen.giftbox} source={require("../../Assets/Images/giftbox2.png")} />
                  :
                  <Image style={StylesHomeScreen.giftbox} source={require("../../Assets/Images/giftbox1.png")} />
            }
         </TouchableOpacity>
         <TouchableOpacity style={StylesHomeScreen.btnGift3} disabled={step === 4000 ? false : true}>
            {
               step === 4000 ?
                  <Image style={StylesHomeScreen.giftbox} source={require("../../Assets/Images/giftbox2.png")} />
                  :
                  <Image style={StylesHomeScreen.giftbox} source={require("../../Assets/Images/giftbox1.png")} />
            }
         </TouchableOpacity>
      </View>
   )
}