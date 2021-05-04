import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux'

import HomeScreen from '../../Screens/HomeScreen';
import RankScreen from '../../Screens/RankScreen';
import CustomDrawer from './CustomDrawer';
const Drawer = createDrawerNavigator();


export default function DrawerApp() {
   const isToggle = useSelector(state => state.App.isToggle);
   return (
      <Drawer.Navigator
         initialRouteName="Home"
         drawerType={'back'}
         drawerStyle={{ width: 230, backgroundColor: isToggle ? '#171616' : '#fff' }}
         drawerContent={props => <CustomDrawer {...props} />}
      >
         <Drawer.Screen name="Home" component={HomeScreen} />
         <Drawer.Screen name="Rank" component={RankScreen} />
      </Drawer.Navigator>
   )
}