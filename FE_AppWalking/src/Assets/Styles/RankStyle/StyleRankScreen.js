import {StyleSheet} from 'react-native';

const StyleRankScreen = StyleSheet.create({
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
  },
  chartsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    borderBottomWidth: 2,
    borderColor: '#ecf0f1',
    paddingBottom: 20,
    marginBottom: 20,
    width: '100%',
    height: 250,
  },
  top2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 80,
    marginLeft: 40,
  },
  ColunmTop2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 60,
    height: '50%',
    backgroundColor: '#0abde3',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  ViewAvatar: {
    width: 50,
    height: 50,
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 80,
  },
  ColunmTop1: {
    display: 'flex',
    alignItems: 'center',
    width: 60,
    height: '70%',
    backgroundColor: '#1dd1a1',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  top3: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 80,
    marginRight: 40,
  },
  ColunmTop3: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 60,
    height: '30%',
    backgroundColor: '#ff6b6b',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  iconCup: {
    width: 40,
    height: 40,
  },
  labelTop: {
    marginBottom: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  nameMember: {
    marginBottom: 10,
    textAlign: 'center',
    color: '#636e72',
  },
  sectionItem: {
    width: '100%',
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ecf0f1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  labelUser: {
    color: '#636e72',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    width: 140,
    marginRight: 15,
  },

  cupTh: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  avatarU: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 15,
  },
  stepUser: {
    display: 'flex',
    flexDirection: 'row',
  },
  stepLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  derea: {
    fontSize: 12, 
  },
  topNumber:{
    fontSize: 24,
    fontWeight:"bold",
    marginRight: 15,
    color:"#e74c3c"
  }
});

export default StyleRankScreen;