import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const StylesDrawerLight = StyleSheet.create({
   container: {
      flex: 1
   },
   header: {
      width: "100%",
      height: hp("28%"),
      justifyContent: "center",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#ecf0f1"
   },
   body: {
      width: "100%",
      height: hp("37.5%"),
      paddingVertical: "7%",
      borderBottomWidth: 1,
      borderBottomColor: "#ecf0f1",
      justifyContent: "space-around",
   },
   footer: {
      width: "100%",
      height: hp("30%"),
   },
   footer1: {
      width: "100%",
      height: "50%",
      borderBottomWidth: 1,
      justifyContent: "center",
      borderBottomColor: "#ecf0f1",
   },
   footer2: {
      width: "100%",
      height: "50%",
      justifyContent: "center"
   },
   logo: {
      width: 60,
      height: 60
   },
   textHello: {
      marginTop: "12%",
      marginBottom: "5%",
      fontSize: 17,
      color: "#636e72",
      letterSpacing: 2
   },
   txtName: {
      fontSize: 20,
      fontWeight: "500",
      letterSpacing: 1,
      textTransform: "capitalize",
      color: "#2d3436"
   },
   Activity: {
      width: "100%",
      height: 40,
      flexDirection: "row",
      alignItems: "center",
   },
   titleBtnAc: {
      // fontWeight: "bold",
      letterSpacing: 0.5,
      fontSize: 17,
      marginRight: 50,
      color: "#252527",
      // marginBottom: 8
   },
   iconBtn: {
      width: 30,
      height: 30,
      marginLeft: 30,
      marginRight: 20
   }
})

export default StylesDrawerLight;