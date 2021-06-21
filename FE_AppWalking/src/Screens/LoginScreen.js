import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
// components
import { FormLogin } from '../Components/LoginScreen';
import { asyncLogin } from '../Store/Auth/action';
// orthers
import { StylesLogin } from '../Assets/Styles/LoginRegisterScreen';

export default function LoginScreen({ route }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formLogin, setFormLogin] = useState({
    username: '',
    password: '',
  });
  useEffect(() => {
    if (route.params) {
      setFormLogin({
        username: route.params.username,
        password: route.params.password
      })
    }
  }, [route])
  console.log("route:", route);

  //Redirect
  const handleNextRegister = () => {
    setIsSubmit(false);
    navigation.navigate('RegisterScreen');
  };

  //Submit
  const handleSubmit = () => {
    setIsSubmit(true);
    if (validateIsEmpty()) {
      const { username, password } = formLogin;
      dispatch(asyncLogin({ username, password })).then(({ ok, inforUser }) => {
        if (ok) {
          ToastAndroid.showWithGravityAndOffset(
            `Xin chào ${inforUser.firstname}`,
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            25,
          );
        } else {
          ToastAndroid.showWithGravityAndOffset(
            'Sai tài khoản hoặc mật khẩu',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            15,
            10,
          );
        }
      });
    }
  };
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  //Validate

  const validateIsEmpty = () => {
    if (formLogin.username === '' || formLogin.password === '') {
      return false;
    }
    return true;
  };
  const initialProps = {
    isSubmit,
    formLogin,
    setFormLogin,
    isShowPassword,
    handleShowPassword,
  };

  return (
    <>
      <StatusBar backgroundColor="#000000" />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        style={StylesLogin.container}>
        <View style={StylesLogin.header}>
          <Text style={StylesLogin.title}>Let's sign you in.</Text>
          <View style={StylesLogin.textView}>
            <Text style={StylesLogin.textContent}>Wellcome back.</Text>
            <Text style={StylesLogin.textContent}>You've been missed!</Text>
          </View>
        </View>
        <FormLogin {...initialProps} />
        <View style={StylesLogin.footer}>
          <View style={StylesLogin.textFooter}>
            <Text style={StylesLogin.textFirst}>Don't have an account?</Text>
            <TouchableOpacity onPress={handleNextRegister}>
              <Text style={StylesLogin.textSecord}>Register</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={StylesLogin.btn_login}
            onPress={handleSubmit}>
            <Text style={StylesLogin.textBtn}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
