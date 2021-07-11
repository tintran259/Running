import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 44,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1'
  },
  btnLeft: {
    width: 50,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18
  },
  headerView: {
    width: '100%',
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewCircel: {
    width: 130,
    height: 130,
    borderRadius: 2000,
    borderWidth: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#3498db',

  },
  text: {
    color: '#3498db',
    fontSize: 19,
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#2d3436'
  },
  bodyView: {
    paddingHorizontal: 15
  },
  textLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2d3436',
  },
  viewCoinsItems: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 20,
    borderColor: '#bdc3c7',
  },
  BTNgIVE: {
    padding: 10,
    backgroundColor: '#f1c40f',
    borderRadius: 20,
    marginRight: 10
  },
  colorBtn: {
    color: '#d35400',
    fontWeight: 'bold'
  },
  textBrt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#636e72'
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ViewModal: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  btnD: {
    borderWidth: 1,
    width: 80,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#fff',
    padding: 10
  },
  valueCard: {
    textAlign: 'center',
    fontSize: 19,
    marginBottom: 30
  },
  titleModal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20
  },
  btnView: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30
  },
  btnTe: {
    width: '50%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTongDai: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewModalCard: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  labelcard: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 30
  },
  titleCard: {
    fontSize: 20,
    textAlign: 'center'
  },
  cardASDASD: {
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10
  }
})

export default Styles