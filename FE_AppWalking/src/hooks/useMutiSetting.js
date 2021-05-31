import {useContext} from 'react';
import {MultiSetting} from '../Context/MultiSetting';

export default function useMultiSetting() {
  const {
    isToggle,
    valueLang,
    setIsToggle,
    handleChangeToVn,
    handleChangeToEn,
  } = useContext(MultiSetting);
  return {isToggle, valueLang, setIsToggle, handleChangeToVn, handleChangeToEn};
}
