import {StyleSheet} from 'react-native';

const StyleHomeButtonProfile = StyleSheet.create({
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
    marginRight: 10,
  },
  textUser: {
    textTransform: 'capitalize',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2d3436',
  },
});

export default StyleHomeButtonProfile;
