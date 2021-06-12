import {StyleSheet} from 'react-native';

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
    marginLeft: '5%',
    marginBottom: 70,
  },
  ViewFooterRun: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewModal: {
    width: '80%',
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  textLabel: {
    fontSize: 18,
  },
});

export default StylesHomeScreen;
