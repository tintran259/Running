import { StyleSheet } from 'react-native'
import { COLOR } from '../../../Contants'

const StylesHomeScreenLight = StyleSheet.create({
   HomeScreen: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#30336b"
   },
   container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: "8%",
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
   },
   iconUp: {
      color: COLOR.Text_Light,
      fontWeight: "bold"
   },
   footer: {
      width: "100%",
      height: 200,
      backgroundColor: "#30336b",
      paddingHorizontal: "8%",
   },
   titleFooter: {
      color: COLOR.Text_Light,
      fontWeight: "bold",
      fontSize: 20
   },

   btnMenu: {
      width: 70,
      height: "80%",
      justifyContent: "center",
      alignItems: "flex-start"
   },
   btnImg: {
      width: 28,
      height: 30
   },
   toggle_mode: {
      width: 50,
      height: 25,
      borderRadius: 15,
      borderWidth: 1,
      justifyContent: "center",
      position: "relative",
      backgroundColor: COLOR.Text_Dark,
   },
   circel_toggle: {
      width: 18,
      height: 18,
      borderRadius: 200,
      borderWidth: 1,
      borderColor: COLOR.Text,
      position: "absolute",
      left: "5%",
      backgroundColor: COLOR.Text
   },
   iconSun: {
      color: "#fff",
      position: "absolute",
      right: "10%",
      fontSize: 17
   },
   iconMoon: {
      position: "absolute",
      left: "5%",
      fontSize: 17,
      color: "#fff"
   },
   ViewToggle: {
      width: "100%",
      height: 60,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
   },
   titleHeader: {
      fontSize: 30,
      fontWeight: "bold",
      color: COLOR.Text_Dark,
      letterSpacing: 1
   },
   header: {
      width: "100%",
      height: 70,
   },
   SectionWalking: {
      width: "100%",
   },
   line1: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 30
   },
   itemWalking: {
      width: "45%",
      height: 180,
      borderWidth: 1.5,
      borderRadius: 18,
      borderColor: "#F2F2F2",
      paddingHorizontal: "7%",
      paddingVertical: "7%",
      flexDirection: "column",
      justifyContent: "space-between"
   },
   iconHeart: {
      fontSize: 20,
      color: "#e74c3c"
   },
   iconFire: {
      fontSize: 20,
      color: "#e67e22"
   },
   iconShoes: {
      width: 30,
      height: 30
   },
   textNumber: {
      fontWeight: "bold",
      fontSize: 28,
      color: COLOR.Text_Dark
   },
   textDes: {
      fontSize: 14,
      color: COLOR.Text_DesLight,
      // marginLeft: "4.5%"
   },
   textTitile: {
      fontWeight: "bold",
      fontSize: 15,
      color: COLOR.Text_Dark
   },
   headerSteps: {
      width: "100%",
      height: 40,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end"
   },

   //==========================StepManagerment ====================================
   textWalk: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#fff"
   },
   ViewCalendar: {
      flexDirection: "row"
   },
   iconCalander: {
      color: "#fff",
      fontSize: 18
   },
   dateNow: {
      color: "#fff",
      fontWeight: "bold",
      marginLeft: 10
   }
})

export default StylesHomeScreenLight;