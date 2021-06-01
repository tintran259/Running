import React, {createContext, useEffect, useState} from 'react';
import {dictionary} from '../Contants/Locale';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MultiSetting = createContext();

export const MultiSettingContextProvider = ({children}) => {
  const [valueLang, setValueLang] = useState(dictionary.en);
  const [isToggle, setIsToggle] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('locel').then(value => {
      if (value) {
        const valued = JSON.parse(value);
        console.log("valued:",valued.value);
        setValueLang(valued);
      } else {
        setValueLang(dictionary.en);
      }
    });
  }, []);

  const handleChangeToVn = () => {
    const value = JSON.stringify(dictionary.vn);
    AsyncStorage.setItem('locel', value);
    setValueLang(dictionary.vn);
  };
  const handleChangeToEn = () => {
    setValueLang(dictionary.en);
    const value = JSON.stringify(dictionary.en);
    AsyncStorage.setItem('locel', value);
  };
  const initialValue = {
    isToggle: isToggle ? isToggle : false,
    valueLang,
    setIsToggle,
    handleChangeToVn,
    handleChangeToEn,
  };
  return (
    <MultiSetting.Provider value={initialValue}>
      {children}
    </MultiSetting.Provider>
  );
};
