import { StyleSheet } from 'react-native'
import { COLOR } from '../../../Contants'

const StylesHomeScreen = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
   },
   bannerHeader: {
      width: '100%',
      height: 380,
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
      height: 170,
      backgroundColor: "#fff",
      borderRadius: 10,
      borderColor: "#ecf0f1",
      borderWidth: 1,
      position: "absolute",
      top: 300,
      left: "5%"
   },
   ViewHeaderRun: {
      width: "100%",
      height: 50,
      borderBottomWidth: 3,
      borderColor: "#ecf0f1",
      justifyContent: "center"
   },
   iconShoes: {
      width: 28,
      height: 28
   },
   ViewStep: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 20
   },
   titleTime: {
      fontWeight: "bold",
      fontSize: 16,
      color: "#fdce27",
      marginRight: 20,
      marginLeft: 10
   },
   span: {
      color: "#636e72",
      fontSize: 13
   },
   spanStep: {
      fontWeight: "bold",
      fontSize: 25,
      color: "#2d3436"
   },
   percentStep: {
      width: '90%',
      height: 12,
      borderColor: "#74b9ff",
      borderRadius: 10,
      borderWidth: 1,
      position: "relative",
      top: 30,
   },

   ViewFooterRun: {
      width: "100%",
      height: "100%",
      flexDirection: "column",
      alignItems: "center",
   },
   sizeStep: {
      position: "absolute",
      width: "100%",
      height: 40,
      top: -20,
   },
   percentStepChild: {
      width: '20%',
      height: 10,
      borderRadius: 10,
      backgroundColor: "#0984e3",
   },
   lineStep1: {
      width: 60,
      height: 50,
      position: "absolute",
      top: 16,
      flexDirection: "column",
      alignItems: "center"
   },
   line: {
      width: 2,
      height: 18,
      backgroundColor: "#2d3436",
      borderRadius: 50,
   },
   textLine: {
      fontWeight: "bold",
      color: "#2d3436"
   },
   lineStep2: {
      width: 60,
      height: 50,
      position: "absolute",
      top: 16,
      left: 115,
      flexDirection: "column",
      alignItems: "center"
   },
   lineStep3: {
      width: 60,
      height: 50,
      position: "absolute",
      top: 16,
      left: 270,
      flexDirection: "column",
      justifyContent: "center"
   },
   getGift: {
      width: "100%",
      height: 50,
      marginTop: 50,
      flexDirection: "row",
      alignItems: "center"
   },
   giftbox: {
      width: 25,
      height: 25
   },
   btnGift1: {
      marginLeft: 16,
      width: 60,
      height: 30,
      justifyContent: "center",
      alignItems: "center"
   },
   btnGift2: {
      marginLeft: 55,
      width: 60,
      height: 30,
      justifyContent: "center",
      alignItems: "center"
   },
   btnGift3: {
      marginLeft: 80,
      width: 60,
      height: 30,
      justifyContent: "center",
      alignItems: "center"
   }
})


export default StylesHomeScreen