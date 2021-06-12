import {StyleSheet} from 'react-native';

const StyleHomeEvent = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    flex: 1,
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
    marginBottom: 30,
  },
  titleEvent: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#2d3436',
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
    width: '100%',
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#16a085',
    borderRadius: 10,
  },
  textDes: {
    marginBottom: 10,
  },
  viewTime: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  viewLabel: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelTime: {
    marginLeft: 5,
    fontSize: 10,
  },
  titleTimeStart: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  titleTimeEnd: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  limitLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  labelLimit: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  veiwlinePer: {
    width: '100%',
    height: 7,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#3498db',
  },
  perLine: {
    width: 30,
    height: '100%',
    backgroundColor: '#2980b9',
    borderRadius: 10,
  },
});

export default StyleHomeEvent;
