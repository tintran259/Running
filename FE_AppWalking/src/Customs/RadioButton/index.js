import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// orthers
import StyleRadio from './styleRadioButton';

export default function RadioButton({
  items,
  borderStyleSelected,
  circelStyleSelected,
  borderStyleColor,
  circelStyleColor,
  onChange,
  labelColor,
  style,
}) {
  const [isSelected, setIsSelected] = useState(items && items[0].value);

  const handleRadio = item => {
    setIsSelected(item.value);
    onChange && typeof onChange === 'function' && onChange(item);
  };

  return items ? (
    items.map((item, index) => {
      return (
        <View key={index} style={[StyleRadio.container,style] }>
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
