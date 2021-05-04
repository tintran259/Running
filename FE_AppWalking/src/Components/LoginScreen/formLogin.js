import React from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, ScrollView } from 'react-native'


import { StylesLogin } from '../../Assets/Styles/LoginRegisterScreen'
import IconFeather from 'react-native-vector-icons/Feather'

export default function FormLogin({
   isSubmit,
   formLogin,
   setFormLogin,
   isShowPassword,
   handleShowPassword
}) {
   return (
      <View style={StylesLogin.FormLogin}>
         <KeyboardAvoidingView
            style={{ flex: 1, paddingBottom: 50 }}
            behavior={Platform.OS === "android" ? "padding" : "height"}
         >
            <View style={StylesLogin.username}>
               <TextInput
                  value={formLogin.username}
                  onChangeText={text => { setFormLogin({ ...formLogin, username: text }) }}
                  style={[StylesLogin.input, { borderColor: `${isSubmit && formLogin.username === "" ? "#f6c700" : "#4e4c4c"}` }]}
                  placeholderTextColor="#ecf0f1"
                  placeholder="Email ..."
               />
               {
                  isSubmit && formLogin.username === ""
                     ?
                     <Text style={StylesLogin.inputEmpty}>Please enter here !</Text>
                     :
                     <Text style={{ display: 'none' }}></Text>
               }
            </View>
            <View style={StylesLogin.password}>
               <TextInput
                  value={formLogin.password}
                  onChangeText={text => { setFormLogin({ ...formLogin, password: text }) }}
                  secureTextEntry={!isShowPassword}
                  style={[StylesLogin.input, { borderColor: `${isSubmit && formLogin.password === "" ? "#f6c700" : "#4e4c4c"}` }]}
                  placeholderTextColor="#ecf0f1"
                  placeholder="Password ..."
               />
               {
                  isSubmit && formLogin.password === ""
                     ?
                     <Text style={StylesLogin.inputEmpty}>Please enter here !</Text>
                     :
                     <Text style={{ display: 'none' }}></Text>
               }
               <TouchableOpacity style={StylesLogin.btn_eye} onPress={handleShowPassword}>
                  <IconFeather style={StylesLogin.iconEye} name={isShowPassword ? 'eye' : 'eye-off'} />
               </TouchableOpacity>
            </View>
         </KeyboardAvoidingView>
      </View>
   )
}