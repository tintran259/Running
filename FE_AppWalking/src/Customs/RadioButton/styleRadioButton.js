import {StyleSheet} from "react-native" ;

const styleRadioButton  = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection:"row",
    alignItems:"center",
  },
  radio:{
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    width: 30,
    height: 30,
    marginRight: 10,
  },
  radioOutSide:{
    width: "65%",
    height:"65%",
    borderWidth: 1.5,
    borderColor: "red",
    borderRadius: 100,
    position:"relative",
  },
  radioCircel:{
    position:"absolute",
    top: "10.5%",
    left: "10.67%",
    backgroundColor:"red",
    borderRadius: 50,
    width: 13,
    height: 13,
  },
  viewLabel:{},
  label:{},
})

export default styleRadioButton