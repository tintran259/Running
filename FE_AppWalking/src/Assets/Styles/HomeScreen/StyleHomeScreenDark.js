import {StyleSheet} from 'react-native';
import {COLOR} from '../../../Contants';

const StylesHomeScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerHeader: {
    width: '100%',
    height: 350,
    backgroundColor: 'red',
  },
  body: {
    width: '100%',
    height: 500,
  },
  imgBanner: {
    width: '100%',
    height: '100%',
  },
  ViewRun: {
    width: '90%',
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#ecf0f1',
    borderWidth: 1,
    position: 'absolute',
    top: 300,
    left: '5%',
  },
  ViewButtonProfile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 20,
  },
  avatarUser: {
    width: 45,
    height: 45,
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1.5,
    marginRight: 10
  },
  textUser:{
    textTransform: "capitalize",
    fontSize: 17,
    fontWeight: "bold",
    color:"#2d3436"
  },
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
    // width: 100,
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

export default StylesHomeScreen;
