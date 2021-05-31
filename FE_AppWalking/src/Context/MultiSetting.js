import React, {createContext, useState} from 'react';
import {dictionary} from '../Contants/Locale';

export const MultiSetting = createContext();

export const MultiSettingContextProvider = ({children}) => {
  const [valueLang, setValueLang] = useState(dictionary.vn);
  const [isToggle, setIsToggle] = useState(false);
  const handleChangeToVn = () => {
    setValueLang(dictionary.vn);
  };
  const handleChangeToEn = () => {
    setValueLang(dictionary.en);
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
