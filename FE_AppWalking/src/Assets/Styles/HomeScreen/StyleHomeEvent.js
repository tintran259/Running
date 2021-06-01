import {StyleSheet} from 'react-native';

const StyleHomeEvent = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#576574',
    marginBottom: 30,
  },
  imgBg: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  viewEventItems: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ecf0f1',
    marginBottom: 30
  },
  titleEvent: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#2d3436',
    marginBottom: 20,
  },
  viewBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnDetail: {
    width: '40%',
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#16a085',
  },
  labelDetail: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#16a085',
  },
  labelJoin: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  btnJoin: {
    width: '55%',
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#16a085',
    borderRadius: 10,
  },
});

export default StyleHomeEvent;
