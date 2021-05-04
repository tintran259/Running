import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const StylesDrawerDark = StyleSheet.create({
   header: {
      width: "100%",
      height: hp("30%"),
      justifyContent: "center",
      alignItems: "center",
      borderBottomColor: "#2d3436",
      borderBottomWidth: 0.5
   },
   body: {
      width: "100%",
      height: hp("37.5%"),
      justifyContent: "space-around",
      paddingVertical: "7%",
      borderBottomWidth: 0.5,
      borderBottomColor: "#2d3436"
   },
   footer1: {
      width: "100%",
      height: "50%",
      borderBottomWidth: 0.5,
      justifyContent: "center",
      borderBottomColor: "#2d3436",
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
      color: "#fff",
      letterSpacing: 2
   },
   txtName: {
      fontSize: 20,
      fontWeight: "500",
      letterSpacing: 1,
      textTransform: "capitalize",
      color: "#fff"
   },
   Activity: {
      width: "100%",
      height: 40,
      flexDirection: "row",
      alignItems: "center",
      // marginBottom: "20%"
   },
   titleBtnAc: {
      fontWeight: "500",
      letterSpacing: 0.5,
      fontSize: 17,
      marginRight: 50,
      color: "#fff",
   }
})

export default StylesDrawerDark;