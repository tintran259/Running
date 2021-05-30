import {StyleSheet} from 'react-native';
import {COLOR} from '../../../Contants';

const StylesHomeScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerHeader: {
    width: '100%',
    height: 380,
    position: 'relative',
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
    height: 170,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#dfe6e9',
    borderWidth: 1,
    marginLeft:"5%",
    marginBottom:70,
  },
  ViewHeaderRun: {
    width: '100%',
    height: 50,
    borderBottomWidth: 3,
    borderColor: '#b2bec3',
    justifyContent: 'center',
  },
  iconShoes: {
    width: 28,
    height: 28,
  },
  ViewStep: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  titleTime: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2ecc71',
    marginRight: 20,
    marginLeft: 10,
  },
  span: {
    color: '#636e72',
    fontSize: 13,
  },
  spanStep: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#636e72',
  },
  percentStep: {
    width: '90%',
    height: 12,
    borderColor: '#74b9ff',
    borderRadius: 10,
    borderWidth: 1,
    position: 'relative',
    top: 30,
  },

  ViewFooterRun: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  sizeStep: {
    position: 'absolute',
    width: '100%',
    height: 40,
    top: -20,
  },
  percentStepChild: {
    width: '20%',
    height: 10,
    borderRadius: 10,
    backgroundColor: '#1abc9c',
  },
  lineStep1: {
    width: 60,
    height: 50,
    position: 'absolute',
    top: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
  line: {
    width: 2,
    height: 18,
    backgroundColor: '#2d3436',
    borderRadius: 50,
  },
  textLine: {
    fontWeight: 'bold',
    color: '#2d3436',
  },
  lineStep2: {
    width: 60,
    height: 50,
    position: 'absolute',
    top: 16,
    left: 115,
    flexDirection: 'column',
    alignItems: 'center',
  },
  lineStep3: {
    width: 60,
    height: 50,
    position: 'absolute',
    top: 16,
    left: 270,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  getGift: {
    width: '100%',
    height: 50,
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  giftbox: {
    width: 25,
    height: 25,
  },
  giftbox1: {
    width: 25,
    height: 25,
    marginLeft: 35,
  },
  giftbox2: {
    width: 25,
    height: 25,
    marginLeft: 90,
  },
  giftbox3: {
    width: 25,
    height: 25,
    marginLeft: 110,
  },
  btnGift1: {
    marginLeft: 16,
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGift2: {
    marginLeft: 55,
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGift3: {
    marginLeft: 80,
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxgift: {
    width: 220,
    height: 220,
    marginLeft: 30,
  },
  // viewModal: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  textModal: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
  },
  btnGive: {
    width: 100,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 110,
    marginTop: 50,

    borderRadius: 10,
    backgroundColor: '#fff',
  },
  colorTextBtn: {
    fontWeight: 'bold',
  },
  giftboxGiven:{
    width:35,
    height: 35
  }
});

export default StylesHomeScreen;
