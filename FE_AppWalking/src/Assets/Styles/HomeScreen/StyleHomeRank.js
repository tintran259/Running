import {StyleSheet} from 'react-native'

const StyleHomeRank  = StyleSheet.create({
  container:{
    borderWidth: 3,
    borderTopColor: '#ecf0f1',
    borderColor:'#fff',
    padding: 10,
    paddingTop: 20,
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    textTransform:'capitalize',
    color:"#2d3436"
  },
  ViewBody:{
    width:'100%',
    height: 300,
    display:'flex',
    flexDirection:'row',
    marginTop: 40,
  },
  ColY:{
    display:'flex',
    justifyContent: 'space-around',
    width: "20%",
    height:"100%",
  },
  textColY:{
    color:"#7f8c8d",
    // fontWeight:"bold",
  },
  colYCol:{
    width: "80%",
    display:'flex',
    flexDirection:'column',
    justifyContent: "space-around",
    position:'relative'
  },
  ViewDay:{
    width:'100%',
    position:'absolute',
  },
  lineRank:{
    width: "100%",
    height: 1,
    backgroundColor: '#dcdde1'
  },
  textDay:{
    color:"#7f8c8d"
  },
  viewDay1:{
    
  },
  stepCol:{
    width: 20,
    height: 100,
    backgroundColor:'red',
    marginBottom: 5
  },
  ViewColStep:{
    width:"100%",
    height:250,
    display:'flex',
    flexDirection:"row",
    alignItems:"flex-end",
    position:'relative'
  },
  viewTextDay:{
    display:'flex',
    flexDirection:'row',
    width:"100%",
    justifyContent:"space-around",
    marginTop: 5
  },
  ColStep1:{
    width: 20,
    backgroundColor:"#16a085",
    position:"absolute",
    left: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    opacity:0.5,
  },
  ColStep2:{
    width: 20,
    backgroundColor:"#16a085",
    position:"absolute",
    left: "17%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    opacity:0.5,
  },
  ColStep3:{
    opacity:0.5,
    width: 20,
    backgroundColor:"#16a085",
    position:"absolute",
    left: "31.5%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  ColStep4:{
    opacity:0.5,
    width: 20,
    backgroundColor:"#16a085",
    position:"absolute",
    left: "46%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  ColStep5:{
    opacity:0.5,
    width: 20,
    backgroundColor:"#16a085",
    position:"absolute",
    left: "60%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  ColStep6:{
    width: 20,
    opacity:0.5,
    backgroundColor:"#16a085",
    position:"absolute",
    left: "74%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  ColStep7:{
    opacity:0.5,
    width: 20,
    backgroundColor:"#16a085",
    position:"absolute",
    left: "88.5%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
}) 

export default StyleHomeRank