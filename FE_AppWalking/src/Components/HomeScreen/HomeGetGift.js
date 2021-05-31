import React, {memo, useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Modal from 'react-native-modal';
import {useMutiSetting} from '../../hooks';

import {StylesHomeScreen} from '../../Assets/Styles/HomeScreen';

const HomeGetGift = ({step, sumCoin, setSumCoin}) => {
  console.log('step:', step);
  const [isVisible, setIsVisible] = useState(false);
  const [isGive, setisGive] = useState(false);
  const [isGive1, setisGive1] = useState(false);
  const [isGive2, setisGive2] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const {valueLang} = useMutiSetting();
  console.log('sumCoin:', sumCoin);

  // Close Modal
  const handleCloseModel = () => {
    setIsVisible(false);
    setisGive(true);
    setSumCoin(sumCoin + 200);
  };
  const handleCloseModel1 = () => {
    setIsVisible1(false);
    setisGive1(true);
    setSumCoin(sumCoin + 500);
  };
  const handleCloseModel2 = () => {
    setIsVisible2(false);
    setisGive2(true);
    setSumCoin(sumCoin + 1000);
  };

  // Open Modal
  const handleOpenModal = () => {
    setIsVisible(true);
  };
  const handleOpenModal1 = () => {
    setIsVisible1(true);
  };
  const handleOpenModal2 = () => {
    setIsVisible2(true);
  };
  return (
    <>
      <View style={StylesHomeScreen.getGift}>
        {step >= 500 ? (
          !isGive ? (
            // Dat Moc 500
            <TouchableOpacity
              style={StylesHomeScreen.btnGift1}
              onPress={handleOpenModal}>
              <Image
                style={StylesHomeScreen.giftbox}
                source={require('../../Assets/Images/box.png')}
              />
            </TouchableOpacity>
          ) : (
            // Da Nhan Qua 500
            <TouchableOpacity style={StylesHomeScreen.btnGift1}>
              <Image
                style={StylesHomeScreen.giftboxGiven}
                source={require('../../Assets/Images/gift.png')}
              />
            </TouchableOpacity>
          )
        ) : (
          // Chua Dat Moc 500
          <TouchableOpacity disabled style={StylesHomeScreen.btnGift1}>
            <Image
              style={StylesHomeScreen.giftbox}
              source={require('../../Assets/Images/giftbox1.png')}
            />
          </TouchableOpacity>
        )}
        {step >= 2000 ? (
          !isGive1 ? (
            // Dat Moc 2000
            <TouchableOpacity
              style={StylesHomeScreen.btnGift2}
              onPress={handleOpenModal1}>
              <Image
                style={StylesHomeScreen.giftbox}
                source={require('../../Assets/Images/box.png')}
              />
            </TouchableOpacity>
          ) : (
            // given Gift
            <TouchableOpacity style={StylesHomeScreen.btnGift2}>
              <Image
                style={StylesHomeScreen.giftboxGiven}
                source={require('../../Assets/Images/gift.png')}
              />
            </TouchableOpacity>
          )
        ) : (
          // Chua Dat Moc 2000
          <TouchableOpacity disabled style={StylesHomeScreen.btnGift2}>
            <Image
              style={StylesHomeScreen.giftbox}
              source={require('../../Assets/Images/giftbox1.png')}
            />
          </TouchableOpacity>
        )}
        {step >= 4000 ? (
          !isGive2 ? (
            // Dat Moc 4000
            <TouchableOpacity
              style={StylesHomeScreen.btnGift3}
              onPress={handleOpenModal2}>
              <Image
                style={StylesHomeScreen.giftbox}
                source={require('../../Assets/Images/box.png')}
              />
            </TouchableOpacity>
          ) : (
            // given Gift
            <TouchableOpacity style={StylesHomeScreen.btnGift3}>
              <Image
                style={StylesHomeScreen.giftboxGiven}
                source={require('../../Assets/Images/gift.png')}
              />
            </TouchableOpacity>
          )
        ) : (
          // Chua Dat Moc 4000
          <TouchableOpacity disabled style={StylesHomeScreen.btnGift3}>
            <Image
              style={StylesHomeScreen.giftbox}
              source={require('../../Assets/Images/giftbox1.png')}
            />
          </TouchableOpacity>
        )}
      </View>
      <Modal isVisible={isVisible}>
        <View style={StylesHomeScreen.viewModal}>
          <Image
            style={StylesHomeScreen.boxgift}
            source={require('../../Assets/Images/present.png')}
          />
          <Text style={StylesHomeScreen.textModal}>{valueLang.mess}</Text>
          <Text
            style={[
              StylesHomeScreen.textModal,
              {marginTop: 0, color: 'yellow'},
            ]}>
            200 {valueLang.coin}
          </Text>
          <TouchableOpacity
            style={StylesHomeScreen.btnGive}
            onPress={handleCloseModel}>
            <Text style={StylesHomeScreen.colorTextBtn}>{valueLang.give}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal isVisible={isVisible1}>
        <View style={StylesHomeScreen.viewModal}>
          <Image
            style={StylesHomeScreen.boxgift}
            source={require('../../Assets/Images/present.png')}
          />
          <Text style={StylesHomeScreen.textModal}>{valueLang.mess}</Text>
          <Text
            style={[
              StylesHomeScreen.textModal,
              {marginTop: 0, color: 'yellow'},
            ]}>
            500 {valueLang.coin}
          </Text>
          <TouchableOpacity
            style={StylesHomeScreen.btnGive}
            onPress={handleCloseModel1}>
            <Text style={StylesHomeScreen.colorTextBtn}>{valueLang.give}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal isVisible={isVisible2}>
        <View style={StylesHomeScreen.viewModal}>
          <Image
            style={StylesHomeScreen.boxgift}
            source={require('../../Assets/Images/present.png')}
          />
          <Text style={StylesHomeScreen.textModal}>{valueLang.mess}</Text>
          <Text
            style={[
              StylesHomeScreen.textModal,
              {marginTop: 0, color: 'yellow'},
            ]}>
            1000 {valueLang.coin}
          </Text>
          <TouchableOpacity
            style={StylesHomeScreen.btnGive}
            onPress={handleCloseModel2}>
            <Text style={StylesHomeScreen.colorTextBtn}>{valueLang.give}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};
export default memo(HomeGetGift);
