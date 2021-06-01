import {StyleSheet} from "react-native"

const StyleHomePercentStep = StyleSheet.create({
  percentStep: {
    width: '90%',
    height: 12,
    borderColor: '#74b9ff',
    borderRadius: 10,
    borderWidth: 1,
    position: 'relative',
    top: 30,
  },
  percentStepChild: {
    width: '20%',
    height: 10,
    borderRadius: 10,
    backgroundColor: '#1abc9c',
  },
  sizeStep: {
    position: 'absolute',
    width: '100%',
    height: 40,
    top: -20,
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
})

export default StyleHomePercentStep;