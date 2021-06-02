import React, {useEffect, useState} from 'react';
import {View, Image, ScrollView, Alert, BackHandler} from 'react-native';
import {
  accelerometer,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';
import {map, filter} from 'rxjs/operators';
import {useMutiSetting} from '../hooks';
//Component + Action
import {
  HomeRank,
  HomeEvent,
  HomeGetGift,
  HomeButtonCoin,
  HomePercentStep,
  HomeBoxStepHeader,
  HomeButtonProfile,
} from '../Components/HomeScreen';
// orthers
import {StylesHomeScreen} from '../Assets/Styles/HomeScreen';

export default function HomeScreen() {
  //CONTRUCTOR
  const [step, setStep] = useState(0);
  const [acce, setAcce] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [sumCoin, setSumCoin] = useState(0);
  const {valueLang} = useMutiSetting();
  useEffect(() => {
    if (
      acce.x + acce.y + acce.z > 12 &&
      acce.z < 3 &&
      acce.x > 0 &&
      acce.y > 0
    ) {
      setStep(step + 1);
    }
  }, [acce.x, acce.y, acce.z]);
  useEffect(() => {
    setUpdateIntervalForType(SensorTypes.accelerometer, 600); // defaults to 100ms
    const subscription = accelerometer
      .pipe(
        map(({x, y, z}) => {
          setAcce({
            x: x,
            y: y,
            z: z,
          });
        }),
        filter(speed => speed > 20),
      )
      .subscribe(speed => console.log(`You moved your phone with ${speed}`));
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // out App
  BackHandler.addEventListener('hardwareBackPress', () => {
    Alert.alert(valueLang.quitApp, valueLang.message, [
      {text: valueLang.yes, onPress: () => BackHandler.exitApp()},
      {text: valueLang.no, onPress: () => {}},
    ]);
    return true;
  });
  const initialProps = {
    step,
    sumCoin,
    setSumCoin,
  };

  return (
    <ScrollView style={StylesHomeScreen.container}>
      <View style={StylesHomeScreen.bannerHeader}>
        <HomeButtonProfile />
        <HomeButtonCoin {...initialProps} />
        <Image
          style={StylesHomeScreen.imgBanner}
          source={require('../Assets/Images/bgb.png')}
        />
      </View>
      <View style={StylesHomeScreen.ViewRun}>
        <HomeBoxStepHeader {...initialProps} />
        <View style={StylesHomeScreen.ViewFooterRun}>
          <HomePercentStep {...initialProps} />
          <HomeGetGift {...initialProps} />
        </View>
      </View>
      <View style={StylesHomeScreen.body}>
        <HomeRank {...initialProps} />
        <HomeEvent />
      </View>
    </ScrollView>
  );
}
