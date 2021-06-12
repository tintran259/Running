import {StyleSheet} from 'react-native';

const StylesListEventJoined = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    marginBottom: 30,
    color: '#576574',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  viewEventItems: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ecf0f1',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  banner: {
    width: '100%',
    height: 180,
    backgroundColor: 'red',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bodyEventItems: {
    padding: 10,
  },
  labelTitleEvent: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  viewButton: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  percentStep: {
    width: '100%',
    height: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#bdc3c7',
  },
  loading: {
    width: 10,
    height: '100%',
    backgroundColor: '#27ae60',
    borderRadius: 10,
  },
  viewButton: {
    width: ' 100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  viewPer: {
    width: '100%',
    height: 20,
    marginVertical: 5,
  },
  textStep: {
    fontSize: 12,
    textAlign: 'right',
    marginBottom: 5,
  },
  btnDetail: {
    width: '40%',
    height: '90%',
    backgroundColor: '#e74c3c',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  joned: {
    width: '40%',
    height: '90%',
    backgroundColor: '#3498db',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  viewModal: {
    width: '100%',
    maxHeight: 500,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  bannerModal: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    backgroundColor: 'red',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  btnClose: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StylesListEventJoined;
