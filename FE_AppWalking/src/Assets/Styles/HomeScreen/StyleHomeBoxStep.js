import {StyleSheet} from 'react-native';

const StyleHomeBoxStep = StyleSheet.create({
  ViewHeaderRun: {
    width: '100%',
    height: 50,
    borderBottomWidth: 3,
    borderColor: '#b2bec3',
    justifyContent: 'center',
  },
  ViewStep: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  iconShoes: {
    width: 28,
    height: 28,
  },
  titleTime: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1abc9c',
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
});

export default StyleHomeBoxStep;
