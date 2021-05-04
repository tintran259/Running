import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StylesHomeScreenLight, StylesHomeScreenDark } from '../../Assets/Styles/HomeScreen'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { actHandleIsToggle } from '../../Store/App/action'
import { COLOR } from '../../Contants'
import IconFontisto from 'react-native-vector-icons/Fontisto'
import IconFeather from 'react-native-vector-icons/Feather'

export default function HeaderScreen() {
   const dispatch = useDispatch();
   const navigation = useNavigation();
   const isToggle = useSelector(state => state.App.isToggle);

   const handleToggle = () => {
      dispatch(actHandleIsToggle(!isToggle))
   }
   const handleShowDrawer = () => {
      navigation.openDrawer();
   }

   return (
      <View style={StylesHomeScreenLight.ViewToggle}>
         {
            isToggle ?
               <TouchableOpacity style={StylesHomeScreenLight.btnMenu} onPress={handleShowDrawer}>
                  <Image source={require("../../Assets/Images/menu2.png")} style={StylesHomeScreenLight.btnImg} />
               </TouchableOpacity>
               :
               <TouchableOpacity style={StylesHomeScreenLight.btnMenu} onPress={handleShowDrawer}>
                  <Image source={require("../../Assets/Images/menu1.png")} style={StylesHomeScreenLight.btnImg} />
               </TouchableOpacity>
         }
         <TouchableOpacity style={[StylesHomeScreenLight.toggle_mode, isToggle && { borderWidth: 1, borderColor: COLOR.Border }]} onPress={handleToggle}>
            <View style={[StylesHomeScreenLight.circel_toggle, isToggle ? { left: `55%` } : { left: `5%` }]}>
            </View>
            {
               isToggle ?
                  <IconFeather name="moon" style={StylesHomeScreenLight.iconMoon} />
                  :
                  <IconFontisto name="day-sunny" style={StylesHomeScreenLight.iconSun} />
            }
         </TouchableOpacity>
      </View>
   )
}