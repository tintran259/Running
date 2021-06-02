import React,{useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {useMutiSetting} from '../../hooks';
import {useSelector,useDispatch} from "react-redux"
import AsyncStorage from '@react-native-async-storage/async-storage';
// action and components
import {actLogoutSuccess} from "../../Store/App/action"
// orthers
import {
  StylesDrawerDark,
  StylesDrawerLight,
} from '../../Assets/Styles/DrawerStyle';

export default function CustomDrawer() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {valueLang, isToggle} = useMutiSetting();
  const isLogin = useSelector(state => state.App.isLogin);
  //Navigation
  const handleAvtivityScreen = () => {
    navigation.navigate('Home');
  };
  const handleRankScreen = () => {
    navigation.navigate('Rank');
  };
  const handleSettingScreen = () => {
    navigation.navigate('Setting');
  };
  useEffect(() => {
    AsyncStorage.getItem('ACCESS_TOKEN').then(value => {
      console.log(value);
    });
  }, []);

  const handleLogout = () => {
    console.log("isLogin:",isLogin);
    AsyncStorage.removeItem('ACCESS_TOKEN');
    dispatch(actLogoutSuccess())
  };
  return (
    <DrawerContentScrollView
      style={
        isToggle ? StylesDrawerDark.container : StylesDrawerLight.container
      }>
      <View
        style={isToggle ? StylesDrawerDark.header : StylesDrawerLight.header}>
        {isToggle ? (
          <Image
            style={StylesDrawerLight.logo}
            source={require('../../Assets/Images/speed1.png')}
          />
        ) : (
          <Image
            style={StylesDrawerLight.logo}
            source={require('../../Assets/Images/speed.png')}
          />
        )}
        <Text
          style={
            isToggle ? StylesDrawerDark.textHello : StylesDrawerLight.textHello
          }>
          {' '}
          {valueLang.hello}!
        </Text>
        <Text
          style={
            isToggle ? StylesDrawerDark.txtName : StylesDrawerLight.txtName
          }>
          TinLee
        </Text>
      </View>
      <View style={isToggle ? StylesDrawerDark.body : StylesDrawerLight.body}>
        <TouchableOpacity
          style={
            isToggle ? StylesDrawerDark.Activity : StylesDrawerLight.Activity
          }
          onPress={handleAvtivityScreen}>
          {isToggle ? (
            <Image
              style={StylesDrawerLight.iconBtn}
              source={require('../../Assets/Images/running2.png')}
            />
          ) : (
            <Image
              style={StylesDrawerLight.iconBtn}
              source={require('../../Assets/Images/running.png')}
            />
          )}
          <Text
            style={
              isToggle
                ? StylesDrawerDark.titleBtnAc
                : StylesDrawerLight.titleBtnAc
            }>
            {valueLang.activity}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            isToggle ? StylesDrawerDark.Activity : StylesDrawerLight.Activity
          }
          onPress={handleRankScreen}>
          {isToggle ? (
            <Image
              style={StylesDrawerLight.iconBtn}
              source={require('../../Assets/Images/rank1.png')}
            />
          ) : (
            <Image
              style={StylesDrawerLight.iconBtn}
              source={require('../../Assets/Images/rank.png')}
            />
          )}
          <Text
            style={
              isToggle
                ? StylesDrawerDark.titleBtnAc
                : StylesDrawerLight.titleBtnAc
            }>
            {valueLang.rank}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={StylesDrawerLight.footer}>
        <View
          style={
            isToggle ? StylesDrawerDark.footer1 : StylesDrawerLight.footer1
          }>
          <TouchableOpacity
            onPress={handleSettingScreen}
            style={
              isToggle ? StylesDrawerDark.Activity : StylesDrawerLight.Activity
            }>
            {isToggle ? (
              <Image
                style={{width: 25, height: 25, marginLeft: 30, marginRight: 25}}
                source={require('../../Assets/Images/settingss1.png')}
              />
            ) : (
              <Image
                style={{width: 25, height: 25, marginLeft: 30, marginRight: 25}}
                source={require('../../Assets/Images/settingss.png')}
              />
            )}
            <Text
              style={
                isToggle
                  ? StylesDrawerDark.titleBtnAc
                  : StylesDrawerLight.titleBtnAc
              }>
              {valueLang.setting}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={
            isToggle ? StylesDrawerDark.footer2 : StylesDrawerLight.footer2
          }>
          <TouchableOpacity
            onPress={handleLogout}
            style={
              isToggle ? StylesDrawerDark.Activity : StylesDrawerLight.Activity
            }>
            {isToggle ? (
              <Image
                style={{width: 25, height: 25, marginLeft: 30, marginRight: 25}}
                source={require('../../Assets/Images/logout.png')}
              />
            ) : (
              <Image
                style={{width: 25, height: 25, marginLeft: 30, marginRight: 25}}
                source={require('../../Assets/Images/logout1.png')}
              />
            )}
            <Text
              style={
                isToggle
                  ? StylesDrawerDark.titleBtnAc
                  : StylesDrawerLight.titleBtnAc
              }>
              {valueLang.logout}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
