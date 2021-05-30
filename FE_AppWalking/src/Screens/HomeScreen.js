import React, {useEffect, useState, useRef} from 'react';
import {View, Image, ScrollView} from 'react-native';
import {StylesHomeScreen} from '../Assets/Styles/HomeScreen';

import {
  accelerometer,
  gyroscope,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';
import {map, filter} from 'rxjs/operators';
//Component + Action
import {
  HomeBoxStepHeader,
  HomeGetGift,
  HomePercentStep,
  HomeButtonProfile,
  HomeButtonCoin,
  HomeRank,
} from '../Components/HomeScreen';

export default function HomeScreen() {
  //CONTRUCTOR
  const [step, setStep] = useState(0);
  const [acce, setAcce] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [sumCoin, setSumCoin] = useState(0);
  useEffect(() => {
    if (acce.x + acce.y + acce.z > 12) {
      setStep(step + 1);
    }
  }, [acce.x, acce.y, acce.z]);
  console.log('acce', acce);
  setUpdateIntervalForType(SensorTypes.accelerometer, 700); // defaults to 100ms
  useEffect(() => {
    accelerometer
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
  }, []);

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
          source={require('../Assets/Images/bgbg4.jpg')}
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
      </View>
    </ScrollView>
  );
}
