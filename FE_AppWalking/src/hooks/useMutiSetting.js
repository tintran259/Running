import { useContext } from 'react';
import { MultiSetting } from '../Context/MultiSetting';

export default function useMultiSetting() {
  return useContext(MultiSetting);
}
