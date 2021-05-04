import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { StylesDrawerDark, StylesDrawerLight } from '../../Assets/Styles/DrawerStyle'



export default function CustomDrawer() {
   const navigation = useNavigation();
   const isToggle = useSelector(state => state.App.isToggle);



   //Navigation


   const handleAvtivityScreen = () => {
      navigation.navigate("Home");
   }
   const handleRankScreen = () => {
      navigation.navigate("Rank");
   }







   return (
      <DrawerContentScrollView style={isToggle ? StylesDrawerDark.container : StylesDrawerLight.container} >
         <View style={isToggle ? StylesDrawerDark.header : StylesDrawerLight.header}>
            {
               isToggle ?
                  <Image style={StylesDrawerLight.logo} source={require("../../Assets/Images/speed1.png")} />
                  :
                  <Image style={StylesDrawerLight.logo} source={require("../../Assets/Images/speed.png")} />
            }
            <Text style={isToggle ? StylesDrawerDark.textHello : StylesDrawerLight.textHello} > Hello!</Text>
            <Text style={isToggle ? StylesDrawerDark.txtName : StylesDrawerLight.txtName} >TinLee</Text>
         </View>
         <View style={isToggle ? StylesDrawerDark.body : StylesDrawerLight.body}>
            <TouchableOpacity style={isToggle ? StylesDrawerDark.Activity : StylesDrawerLight.Activity} onPress={handleAvtivityScreen}>
               {
                  isToggle ?
                     <Image style={StylesDrawerLight.iconBtn} source={require("../../Assets/Images/running2.png")} />
                     :
                     <Image style={StylesDrawerLight.iconBtn} source={require("../../Assets/Images/running.png")} />
               }
               <Text style={isToggle ? StylesDrawerDark.titleBtnAc : StylesDrawerLight.titleBtnAc}>Activity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={isToggle ? StylesDrawerDark.Activity : StylesDrawerLight.Activity} onPress={handleRankScreen}>
               {
                  isToggle ?
                     <Image style={StylesDrawerLight.iconBtn} source={require("../../Assets/Images/rank1.png")} />
                     :
                     <Image style={StylesDrawerLight.iconBtn} source={require("../../Assets/Images/rank.png")} />
               }
               <Text style={isToggle ? StylesDrawerDark.titleBtnAc : StylesDrawerLight.titleBtnAc}>Rank</Text>
            </TouchableOpacity>
            <TouchableOpacity style={isToggle ? StylesDrawerDark.Activity : StylesDrawerLight.Activity}>
               {
                  isToggle ?
                     <Image style={StylesDrawerLight.iconBtn} source={require("../../Assets/Images/running1.png")} />
                     :
                     <Image style={StylesDrawerLight.iconBtn} source={require("../../Assets/Images/running.png")} />
               }
               <Text style={isToggle ? StylesDrawerDark.titleBtnAc : StylesDrawerLight.titleBtnAc}>Activity</Text>
            </TouchableOpacity>
         </View>
         <View style={StylesDrawerLight.footer}>
            <View style={isToggle ? StylesDrawerDark.footer1 : StylesDrawerLight.footer1}>
               <TouchableOpacity style={isToggle ? StylesDrawerDark.Activity : StylesDrawerLight.Activity}>
                  {
                     isToggle ?
                        <Image style={{ width: 25, height: 25, marginLeft: 30, marginRight: 25 }} source={require("../../Assets/Images/settingss1.png")} />
                        :
                        <Image style={{ width: 25, height: 25, marginLeft: 30, marginRight: 25 }} source={require("../../Assets/Images/settingss.png")} />
                  }
                  <Text style={isToggle ? StylesDrawerDark.titleBtnAc : StylesDrawerLight.titleBtnAc}>Settings</Text>
               </TouchableOpacity>
            </View>
            <View style={isToggle ? StylesDrawerDark.footer2 : StylesDrawerLight.footer2}>
               <TouchableOpacity style={isToggle ? StylesDrawerDark.Activity : StylesDrawerLight.Activity}>
                  {
                     isToggle ?
                        <Image style={{ width: 25, height: 25, marginLeft: 30, marginRight: 25 }} source={require("../../Assets/Images/logout.png")} />
                        :
                        <Image style={{ width: 25, height: 25, marginLeft: 30, marginRight: 25 }} source={require("../../Assets/Images/logout1.png")} />
                  }
                  <Text style={isToggle ? StylesDrawerDark.titleBtnAc : StylesDrawerLight.titleBtnAc}>Log out</Text>
               </TouchableOpacity>
            </View>
         </View>
      </DrawerContentScrollView>
   )
}