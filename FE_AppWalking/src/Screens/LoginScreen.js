import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
// components
import {FormLogin} from '../Components/LoginScreen';
import {
  actLoginSuccess,
  actShowLoading,
  actHideLoading,
} from '../Store/App/action';
// orthers
import {StylesLogin} from '../Assets/Styles/LoginRegisterScreen';

export default function LoginScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formLogin, setFormLogin] = useState({
    username: '',
    password: '',
  });

  //Redirect
  const handleNextRegister = () => {
    setIsSubmit(false);
    navigation.navigate('RegisterScreen');
  };

  //Submit
  const handleSubmit = () => {
    setIsSubmit(true);
    if (validateIsEmpty()) {
      dispatch(actShowLoading());
      setTimeout(() => {
        dispatch(actHideLoading());
        dispatch(actLoginSuccess());
      }, 2000);
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
        contentContainerStyle={{paddingBottom: 50}}
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
