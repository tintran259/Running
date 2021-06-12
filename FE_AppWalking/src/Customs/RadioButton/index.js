import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
// actions
import {actShowLoading, actHideLoading} from '../../Store/App/action';

// orthers
import StyleRadio from './styleRadioButton';

export default function RadioButton({
  items,
  style,
  onChange,
  labelColor,
  circelStyleColor,
  borderStyleColor,
  borderStyleSelected,
  circelStyleSelected,
}) {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(0);
  useEffect(() => {
    AsyncStorage.getItem('locel').then(value => {
      const valued = JSON.parse(value);
      setIsSelected(valued.value);
    });
  }, [isSelected]);
  const handleRadio = item => {
    dispatch(actShowLoading());
    setTimeout(() => {
      dispatch(actHideLoading());
      setIsSelected(item.value);
      onChange && typeof onChange === 'function' && onChange(item);
    }, 1000);
  };

  return items ? (
    items.map((item, index) => {
      return (
        <View key={index} style={[StyleRadio.container, style]}>
          <TouchableOpacity
            style={[StyleRadio.radio]}
            onPress={() => handleRadio(item)}>
            <View
              style={[
                StyleRadio.radioOutSide,
                borderStyleColor && {borderColor: borderStyleColor},
                borderStyleSelected &&
                  isSelected === item.value && {
                    borderColor: borderStyleSelected,
                  },
              ]}>
              {isSelected === item.value && (
                <View
                  style={[
                    StyleRadio.radioCircel,
                    circelStyleColor && {backgroundColor: circelStyleColor},
                    circelStyleSelected &&
                      isSelected === item.value && {
                        backgroundColor: circelStyleSelected,
                      },
                  ]}></View>
              )}
            </View>
          </TouchableOpacity>
          <View style={StyleRadio.viewLabel}>
            <Text style={[StyleRadio.label, labelColor && {color: labelColor}]}>
              {item.label}
            </Text>
          </View>
        </View>
      );
    })
  ) : (
    <View style={{display: 'none'}}></View>
  );
}
