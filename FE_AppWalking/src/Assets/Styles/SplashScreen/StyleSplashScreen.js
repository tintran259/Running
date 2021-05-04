import { StyleSheet } from 'react-native'


const StylesSplashScreen = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: "center"
   },
   logo: {
      width: '23%',
      height: '13.5%'
   },
   title: {
      fontSize: 20,
      marginTop: 30,
      fontWeight: "bold",
      letterSpacing: 1
   }
})

export default StylesSplashScreen;