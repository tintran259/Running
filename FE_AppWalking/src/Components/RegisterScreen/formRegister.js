import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {getDateByTimeZoneDay, COLOR} from '../../Contants';

import {StylesRegister} from '../../Assets/Styles/LoginRegisterScreen';
import IconAntd from 'react-native-vector-icons/AntDesign';

export default function FormRegister({
  gender,
  isSubmit,
  emailExit,
  isShowDate,
  formRegister,
  onCheckEmail,
  onChangeDate,
  handleShowDate,
  checkErrorEmail,
  setFormRegister,
  onCheckPassword,
  checkErrorPassword,
  handleSubmitRegister,
}) {
  return (
    <ScrollView style={StylesRegister.formRegister}>
      <View style={StylesRegister.item}>
        <Text style={StylesRegister.title_items}>Email:</Text>
        <TextInput
          onEndEditing={e => onCheckEmail(e)}
          value={formRegister.email}
          onChangeText={text => {
            setFormRegister({...formRegister, email: text});
          }}
          textContentType="emailAddress"
          placeholder="Email . . ."
          placeholderTextColor="#535c68"
          style={[
            StylesRegister.input,
            checkErrorEmail && {borderColor: COLOR.Border_error},
            (formRegister.email === '' && isSubmit) ||
              (emailExit && {borderColor: COLOR.Border_error}),
          ]}
        />
        {checkErrorEmail && (
          <Text style={StylesRegister.alertEmail}>
            Not an email. Please enter Email correctly !
          </Text>
        )}
        {formRegister.email === '' && isSubmit && (
          <Text style={StylesRegister.textEmpty}>Please enter here !</Text>
        )}
      </View>
      <View
        style={[
          StylesRegister.item,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <View style={StylesRegister.itemLeft}>
          <Text style={StylesRegister.title_items}>Firstname:</Text>
          <TextInput
            value={formRegister.firstname}
            onChangeText={text => {
              setFormRegister({...formRegister, firstname: text});
            }}
            placeholder="Firstname. . ."
            placeholderTextColor="#535c68"
            style={[
              StylesRegister.input,
              formRegister.firstname === '' &&
                isSubmit && {borderColor: COLOR.Border_error},
            ]}
          />
        </View>
        <View style={StylesRegister.itemRight}>
          <Text style={[StylesRegister.title_items, {marginLeft: '6%'}]}>
            Lastname:
          </Text>
          <TextInput
            value={formRegister.lastname}
            onChangeText={text => {
              setFormRegister({...formRegister, lastname: text});
            }}
            placeholder="Lastname . . ."
            placeholderTextColor="#535c68"
            style={[
              StylesRegister.input,
              formRegister.lastname === '' &&
                isSubmit && {borderColor: COLOR.Border_error},
            ]}
          />
        </View>
      </View>
      <View
        style={[
          StylesRegister.item,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <View style={StylesRegister.itemRight}>
          <Text style={[StylesRegister.title_items, {marginLeft: '6%'}]}>
            Gender:
          </Text>
          <DropDownPicker
            items={gender}
            defaultValue={gender[0].value}
            onChangeItem={text =>
              setFormRegister({...formRegister, gender: text.value})
            }
            containerStyle={{height: 50}}
            style={StylesRegister.dropdown}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            labelStyle={{color: '#bdc3c7'}}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            arrowColor="#bdc3c7"
          />
        </View>
        <View style={StylesRegister.itemLeft}>
          <Text style={StylesRegister.title_items}>Your Birthday:</Text>
          <TouchableOpacity
            style={StylesRegister.birthday}
            onPress={handleShowDate}>
            <Text style={StylesRegister.textDate}>
              {getDateByTimeZoneDay(formRegister.birthday)}
            </Text>
            <IconAntd name="calendar" style={StylesRegister.iconCalander} />
          </TouchableOpacity>
          {isShowDate && (
            <DateTimePicker
              value={formRegister.birthday}
              mode="date"
              display="spinner"
              onChange={onChangeDate}
            />
          )}
        </View>
      </View>
      <View style={StylesRegister.item}>
        <Text style={StylesRegister.title_items}>Your Phone:</Text>
        <TextInput
          value={formRegister.phone}
          onChangeText={text => {
            setFormRegister({...formRegister, phone: text});
          }}
          placeholder="Phonenumber . . ."
          placeholderTextColor="#535c68"
          keyboardType="numeric"
          style={[
            StylesRegister.input,
            formRegister.phone === '' &&
              isSubmit && {borderColor: COLOR.Border_error},
          ]}
        />
        {formRegister.phone === '' && isSubmit && (
          <Text style={StylesRegister.textEmpty}>Please enter here !</Text>
        )}
      </View>
      <View style={StylesRegister.item}>
        <Text style={StylesRegister.title_items}>Address:</Text>
        <TextInput
          value={formRegister.address}
          onChangeText={text => {
            setFormRegister({...formRegister, address: text});
          }}
          placeholder="Address . . ."
          placeholderTextColor="#535c68"
          style={[
            StylesRegister.input,
            formRegister.address === '' &&
              isSubmit && {borderColor: COLOR.Border_error},
          ]}
        />
        {formRegister.address === '' && isSubmit && (
          <Text style={StylesRegister.textEmpty}>Please enter here !</Text>
        )}
      </View>
      <View style={StylesRegister.item}>
        <Text style={StylesRegister.title_items}>Password:</Text>
        <TextInput
          onEndEditing={e => onCheckPassword(e)}
          value={formRegister.password}
          onChangeText={text => {
            setFormRegister({...formRegister, password: text});
          }}
          placeholder="Password . . ."
          placeholderTextColor="#535c68"
          secureTextEntry={true}
          style={[
            StylesRegister.input,
            checkErrorPassword && {borderColor: COLOR.Border_error},
            formRegister.password === '' &&
              isSubmit && {borderColor: COLOR.Border_error},
          ]}
        />
        <Text
          style={[
            StylesRegister.cautionText,
            checkErrorPassword && {color: COLOR.Text, fontSize: 14},
          ]}>
          Minimum 8 characters, at least one letter, one number and one special
          character.
        </Text>
        {formRegister.password === '' && isSubmit && (
          <Text style={StylesRegister.textEmpty}>Please enter here !</Text>
        )}
      </View>
      <TouchableOpacity
        style={StylesRegister.ViewSubmit}
        onPress={handleSubmitRegister}>
        <Text style={StylesRegister.text_btn}>Sign up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
