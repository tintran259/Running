import {StyleSheet} from 'react-native';

const StyleHomeButtonCoin = StyleSheet.create({
  viewBtnCoin:{
    display: 'flex',
    flexDirection:'row',
    position:'absolute',
    top: 35,
    right:10,
    alignItems:'center',
    justifyContent:'flex-end',
    zIndex:20,
    borderRadius: 20,
    borderColor:'#bdc3c7',
    borderWidth: 1,
    backgroundColor:'#ecf0f1',
    paddingHorizontal:5,
    height: 30,
  },
  imgCoin:{
    width:20,
    height:20
  },
  textCoin:{
    color:"#7f8c8d",
    marginRight:5
  }
});

export default StyleHomeButtonCoin;
