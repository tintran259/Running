import {StyleSheet} from 'react-native';
import {COLOR} from "../../Contants";

const StyleToggleThemes = StyleSheet.create({
  ViewToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggle_mode: {
    width: 50,
    height: 25,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: COLOR.Text_Dark,
    display:"flex",
    flexDirection:"row",
    alignItems:"center"
  },
  circel_toggle: {
    width: "40%",
    height: "80%",
    borderRadius: 200,
    borderWidth: 1,
    borderColor: COLOR.Text,
    position: "absolute",
    left: "5%",
    backgroundColor: COLOR.Text
 },
 iconMoon: {
  position: "absolute",
  left: "5%",
  fontSize: 17,
  color: "#fff",
},
iconSun: {
  color: "#fff",
  position: "absolute",
  right: "5%",
  fontSize: 17,
},
});

export default StyleToggleThemes;
