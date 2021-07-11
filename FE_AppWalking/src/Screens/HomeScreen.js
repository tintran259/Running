import React, { useEffect, useState, useRef } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  BackHandler,
  Vibration,
} from 'react-native';
import {
  accelerometer,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';
import Modal from 'react-native-modal';
import { map, filter } from 'rxjs/operators';
import { useMutiSetting } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
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
import { asyncAddActivity } from '../Store/Home/actions';
import { asyncGetListEvent } from '../Store/Event/action';
import { asyncGetStatistical } from '../Store/Rank/action';
// orthers
import { StylesHomeScreen } from '../Assets/Styles/HomeScreen';
import { getDateByTimeZoneHour, getDate } from '../Untils/FormatDate';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.Auth.token);
  const sumStep = useSelector(state => state.Rank.statistical);
  //CONTRUCTOR
  const [tokenAsync, setToken] = useState(token)
  const [timeStart, setTimeStart] = useState(getDateByTimeZoneHour(new Date()));
  const [isShow, setisShow] = useState(false);
  const [step, setStep] = useState(0);
  const [stepNow, setStepNow] = useState(0)
  const [acce, setAcce] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [sumCoin, setSumCoin] = useState(0);
  const { valueLang } = useMutiSetting();
  const currentStep = useRef(null);
  // Call Api
  useEffect(() => {
    AsyncStorage.getItem('ACCESS_TOKEN').then((response) => {
      const data = JSON.parse(response)
      const token = data.token
      setToken(token)
      dispatch(asyncGetListEvent({ token }));
      dispatch(asyncGetStatistical({ token }));
    })
  }, []);
  useEffect(() => {
    const time = new Date();
    const year = time.getFullYear();
    const day = `0${time.getDate()}`.slice(-2);
    const month = `0${time.getMonth() >= 12 ? 1 : time.getMonth() + 1}`.slice(
      -2,
    );
    const calanderRun = year + '-' + month + '-' + day;
    const dateStep = sumStep.filter((e) => {
      return e.date === calanderRun
    })
    setStep(dateStep[0]?.total_steps ? dateStep[0].total_steps : 0)
    setStepNow(dateStep[0]?.total_steps ? dateStep[0].total_steps : 0)
  }, [sumStep])
  // When user stopping more than 10s , and then will have a Modal notification for user Running.
  useEffect(() => {

    if (step !== currentStep.current) {
      if (currentStep.current) {
        clearTimeout(currentStep.current);
      }
      currentStep.current = setTimeout(() => {
        setisShow(true);
        Vibration.vibrate(5000);
      }, 30000);
      return () => {
        clearInterval(currentStep.current);
      };
    }
  }, [step]);
  // When user begin run , and then will get time start when user running more than 1 step.
  useEffect(() => {
    const time = new Date();
    const mininus = `0${time.getMinutes()}`.slice(-2);
    const hour = `0${time.getHours()}`.slice(-2);
    const seconds = `0${time.getSeconds()}`.slice(-2);
    const timeStartRun = hour + ':' + mininus + ':' + seconds;
    const year = time.getFullYear();
    const day = `0${time.getDate()}`.slice(-2);
    const month = `0${time.getMonth() >= 12 ? 1 : time.getMonth() + 1}`.slice(
      -2,
    );
    const calanderRun = year + '-' + month + '-' + day;
    const startTimeRun = calanderRun + ' ' + timeStartRun;
    setTimeStart(startTimeRun);
  }, []);
  // Sensor Device to Increament Step (step++);
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
        map(({ x, y, z }) => {
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
  // =============================================================

  // When user want to Exit App, Sent request time end run of user.
  BackHandler.addEventListener('hardwareBackPress', () => {
    Alert.alert(valueLang.quitApp, valueLang.message, [
      {
        text: valueLang.yes,
        onPress: () => {
          const timeEnd = getDate();
          const stepCount = step - stepNow
          dispatch(asyncAddActivity({ stepCount, tokenAsync, timeStart, timeEnd })).then(
            ok => {
              if (ok) {
                AsyncStorage.setItem('COINS', `${sumCoin}`).then(() => {
                  // BackHandler.exitApp();
                  console.log(ok);
                })
              }
            },
          );
        },
      },
      { text: valueLang.no, onPress: () => { } },
    ]);
    return true;
  });

  const handleHideModal = () => {
    setisShow(false);
  };
  const initialProps = {
    step,
    sumCoin,
    setSumCoin,
  };

  return (
    <>
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
      <Modal
        onBackdropPress={handleHideModal}
        style={StylesHomeScreen.modal}
        isVisible={isShow}>
        <View style={StylesHomeScreen.viewModal}>
          <Image
            style={StylesHomeScreen.icon}
            source={require('../Assets/Images/runningman.png')}
          />
          <Text style={StylesHomeScreen.textLabel}>{valueLang.running}</Text>
        </View>
      </Modal>
    </>
  );
}
