import {StyleSheet} from 'react-native';

const StyleSetting = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"#fff"
  },
  title: {
    color: '#576574',
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewRadio: {
    marginTop: 30,
    paddingBottom: 30,
    borderBottomWidth: 4,
    borderColor:"#dfe6e9"
  },
  titleLang: {
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    position:'relative',
    marginBottom: 10,
    width: "100%",
  },
  labelLang:{
    backgroundColor:"#fff",
    width:"30%",
    color:"#2d3436",
    textAlign: 'center',
    fontSize:14,
  },
  line:{
    position:"absolute",
    width: "100%",
    height:1,
    backgroundColor:"#bdc3c7"
  },
});

export default StyleSetting;
