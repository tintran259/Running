import React, { useState, useEffect } from 'react'

import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


import { StylesRegister } from '../Assets/Styles/LoginRegisterScreen'
import IconAntd from 'react-native-vector-icons/AntDesign'

import { FormRegister } from '../Components/RegisterScreen'

export default function RegisterScreens() {
   const navigation = useNavigation();

   // state
   const [isShowDate, setIsShowDate] = useState(false)
   const [checkErrorEmail, setCheckErrorEmail] = useState(false)
   const [checkErrorPassword, setCheckErrorPassword] = useState(false)
   const [isSubmit, setIsSubmit] = useState(false)
   const [gender] = useState([
      { label: "Male", value: 'Male' },
      { label: "Female", value: 'Female' }
   ])

   const [formRegister, setFormRegister] = useState({
      email: '',
      firstname: '',
      lastname: '',
      gender: gender[0].value,
      birthday: new Date(),
      phone: '',
      address: '',
      password: ''
   })

   console.log("birthday:", formRegister.birthday);

   useEffect(() => {
      setIsSubmit(false)
   }, [formRegister.email])

   //setState 
   const onChangeDate = (e, t) => {
      console.log("e:", e);
      console.log("t:", t);
      const time = t || formRegister.birthday
      console.log("time:", time);
      setIsShowDate(false);
      setFormRegister({ ...formRegister, birthday: time });
   }

   //Redirect
   const handleBack = () => {
      navigation.goBack()
   }
   const handleShowDate = () => {
      setIsShowDate(true)
   }
   //HandleSignUp

   const handleSubmitRegister = () => {
      setIsSubmit(true);
      if (validateCheckEmpty()) {
         console.log("formRegister:", formRegister);
      }
   }
   // Validate Form Register
   const validateCheckEmpty = () => {
      if (
         formRegister.firstname === "" ||
         formRegister.lastname === "" ||
         formRegister.phone === "" ||
         formRegister.address === "" ||
         formRegister.email === " " ||
         formRegister.password === ""
      ) { return false; }
      else {
         return true;
      }
   }
   const onCheckEmail = (e) => {
      const emailCheck = e.nativeEvent.text;
      const check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (check.test(emailCheck)) {
         setCheckErrorEmail(false);
         return true;
      } else {
         setCheckErrorEmail(true);
         return false;
      }
   }
   const onCheckPassword = (e) => {
      const pass = e.nativeEvent.text;
      const whiteSpace = /\s/g;
      const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
      if (pass.match(regexPass) && !whiteSpace.test(pass)) {
         setCheckErrorPassword(false);
         return true;
      } else {
         setCheckErrorPassword(true);
         return false;
      }
   }


   const initialProps = {
      gender,
      isSubmit,
      isShowDate,
      formRegister,
      onCheckEmail,
      onChangeDate,
      handleShowDate,
      setFormRegister,
      checkErrorEmail,
      onCheckPassword,
      checkErrorPassword,
      handleSubmitRegister,
   }
   return (
      <View style={StylesRegister.container} >
         <View style={StylesRegister.headerRegister}>
            <TouchableOpacity style={StylesRegister.btn_out} onPress={handleBack}>
               <IconAntd name="arrowleft" style={StylesRegister.iconLeft} />
            </TouchableOpacity>
            <Text style={StylesRegister.titleRegister}>Register!</Text>
         </View>
         <FormRegister {...initialProps} />
      </View>
   )
}