import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useMutiSetting} from '../../hooks';
// components
import HomeScreen from '../../Screens/HomeScreen';
import RankScreen from '../../Screens/RankScreen';
import SettingScreen from '../../Screens/SettingScreen';
import CustomDrawer from './CustomDrawer';
import ListEventJoined from '../../Screens/ListEventJoined';
const Drawer = createDrawerNavigator();

export default function DrawerApp() {
  const {isToggle} = useMutiSetting();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType={'back'}
      drawerStyle={{width: 230, backgroundColor: isToggle ? '#171616' : '#fff'}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Rank" component={RankScreen} />
      <Drawer.Screen name="Event" component={ListEventJoined} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
}
