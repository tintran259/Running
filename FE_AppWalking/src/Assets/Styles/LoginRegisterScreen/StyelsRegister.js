import { StyleSheet } from 'react-native'
import { COLOR } from '../../../Contants'

const StylesRegister = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#000",
      padding: "8%"
   },
   headerRegister: {
      width: "100%",
      height: "16%",
      justifyContent: "space-around"
   },
   btn_out: {
      width: 50,
      height: 50,
   },
   iconLeft: {
      color: COLOR.Text,
      fontSize: 25
   },
   titleRegister: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 25,
      letterSpacing: 1,
      marginBottom: 10
   },
   item: {
      marginTop: "10%"
   },
   input: {
      width: "100%",
      height: 50,
      borderColor: COLOR.Border,
      borderWidth: 1.5,
      borderRadius: 12,
      paddingHorizontal: 12,
      color: "#fff",
      backgroundColor: COLOR.BackgroudInput
   },
   itemLeft: {
      width: "60%"
   },
   itemRight: {
      width: "35%"
   },
   title_items: {
      color: "#bdc3c7",
      fontWeight: "bold",
      marginBottom: 8,
      fontSize: 15,
      marginLeft: "3%"
   },
   dropdown: {
      backgroundColor: COLOR.BackgroudInput,
      borderColor: COLOR.Border,
      borderWidth: 1.5,
      borderRadius: 12,
      zIndex: 5000
   },
   birthday: {
      width: "100%",
      height: 50,
      borderWidth: 1,
      borderColor: COLOR.Border,
      borderRadius: 15,
      backgroundColor: COLOR.BackgroudInput,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-around"
   },
   textDate: {
      color: '#bdc3c7',
      fontWeight: "bold"
   },
   iconCalander: {
      color: COLOR.Text,
      fontSize: 20
   },
   cautionText: {
      color: '#bdc3c7',
      marginTop: 10,
      fontSize: 13,
      marginLeft: '3%'
   },
   ViewSubmit: {
      width: "100%",
      height: 50,
      borderWidth: 1,
      borderColor: COLOR.Border,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 100,
      borderRadius: 15,
      backgroundColor: "#ecf0f1"
   },
   text_btn: {
      fontWeight: "bold"
   },
   alertEmail: {
      color: COLOR.Text,
      marginLeft: "3%",
      marginTop: 5
   },
   textEmpty: {
      color: COLOR.Text,
      position: "absolute",
      right: '3%'
   },
   viewModal:{
      width: '70%',
      height: 200,
      backgroundColor:'red'
   }
})

export default StylesRegister