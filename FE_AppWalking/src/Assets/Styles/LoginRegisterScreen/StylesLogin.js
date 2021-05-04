import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const StylesLogin = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#000000",
      padding: '8%'
   },
   header: {
      marginTop: hp('8%'),
   },
   title: {
      color: "#fff",
      fontSize: 30,
      fontWeight: "bold",
      letterSpacing: 2
   },
   textView: {
      marginTop: 20
   },
   textContent: {
      letterSpacing: 1,
      fontSize: 30,
      color: "#ecf0f1",
      lineHeight: 40,
   },
   FormLogin: {
      width: '100%',
      height: hp('32%'),
      marginTop: '20%',
   },
   input: {
      width: '100%',
      height: 55,
      borderColor: "#4e4c4c",
      borderWidth: 1.5,
      borderRadius: 20,
      backgroundColor: "#2f2e2e",
      paddingLeft: 20,
      paddingRight: 70,
      color: "#ecf0f1",
      position: "relative",
      fontWeight: "bold",
   },
   password: {
      marginTop: '10%'
   },
   textFooter: {
      flexDirection: 'row',
      justifyContent: "center"
   },
   textFirst: {
      color: "#ecf0f1",
      fontSize: 16
   },
   textSecord: {
      color: "#f6c700",
      marginLeft: 10,
      fontWeight: "bold",
      fontSize: 16
   },
   btn_login: {
      marginTop: 30,
      width: '100%',
      height: 55,
      justifyContent: 'center',
      alignItems: "center",
      backgroundColor: '#ecf0f1',
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
   },
   textBtn: {
      fontWeight: "bold",
      fontSize: 16,
      color: "#1f1b1b"
   },
   btn_eye: {
      padding: 15,
      position: 'absolute',
      top: '0%',
      right: '0%',
   },
   iconEye: {
      borderWidth: 1,
      borderColor: '#4e4c4c',
      paddingTop: 8,
      paddingLeft: 8,
      paddingBottom: 6,
      paddingRight: 6,
      borderRadius: 10,
      color: "#7f8c8d"
   },
   inputEmpty: {
      position: 'absolute',
      right: '4%',
      top: '-35%',
      color: '#f6c700',
      fontWeight: "bold",
      fontSize: 12,
      letterSpacing: 1
   }
})

export default StylesLogin