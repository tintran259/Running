import { StyleSheet } from 'react-native'
import { COLOR } from '../../../Contants'

const StylesHomeScreen = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
   },
   bannerHeader: {
      width: '100%',
      height: 350,
      backgroundColor: "red"
   },
   body: {
      width: "100%",
      height: 500
   },
   imgBanner: {
      width: "100%",
      height: "100%"
   },
   ViewRun: {
      width: "90%",
      height: 150,
      backgroundColor: "#fff",
      borderRadius: 10,
      borderColor: "#ecf0f1",
      borderWidth: 1,
      position: "absolute",
      top: 300,
      left: "5%"
   }
})


export default StylesHomeScreen