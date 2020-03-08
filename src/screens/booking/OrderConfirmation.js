import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity} from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import FloatingLabel  from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';



export default class OrderConfirmation extends Component{

  render(){

return(
         
   

<View style={{flex:1,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
     <View>
      <Icon style={{}} size={75}  name='check'  color="red"  />
     </View>
<View>
 <Text style={{fontSize:28,color:"#5B5C5D"}}>      Order Placed!</Text>
 <Text style={{fontSize:16,color:"#5B5C5D"}}> Your order was placed successfully</Text>
 <Text style={{fontSize:16,color:"#5B5C5D"}}>For more details, check All My Orders</Text>
 <Text style={{fontSize:16,color:"#5B5C5D"}}>             page under Profile tab</Text>
</View>

     <View style={{width:"50%",marginTop:40}}>
         <Button rounded danger onPress={()=>Actions.dashboard()}
            style={{width:"100%",height:51,backgroundColor:"red"}}>
              <View style={{width:"15%"}}>

              </View>
             <View style={{width:"65%",alignItems:"center"}}>
             <Text style={{fontSize:15,fontWeight:"700",color:"white"}}>MY ORDERS</Text>
             </View>
             <View style={{width:"20%",alignItems:"flex-end",marginRight:14}}>

             <View style={{backgroundColor:"white",justifyContent:"center",
                    borderRadius:30,height:35,width:35,alignItems:"center",}}>
                  <Icon
                   style={{}}
                   size={15}
                    name='chevron-right'
                    color="red"
                    />
              </View>
             </View>
         </Button>
     </View>
    
</View>


  
    )
  }
}

const styles = StyleSheet.create({
    login: {
      color:"#575656",
      fontSize:32,
      fontWeight:"bold",
      margin:10
    },
    mainContainer:{
      marginTop:30,
      
    },
    mainCard:{
       alignItems:"center",
        height:150,
        width:"87%",
        borderTopEndRadius:10,
        borderTopLeftRadius:10,
        borderBottomEndRadius:10,
        borderBottomLeftRadius:10
    },
    cardItemViewStyle:{
        flexDirection:"column",
        alignItems:"flex-start",
        width:"90%",
        marginTop:-10
    },
    cardView:{
        alignContent:"center", 
        margin:20,
        width:"100%"
       
    },
    inputViewStyle:{
        
        flexDirection:"row",
        alignItems:"center"
    }, 
    inputViewStyle2:{
       justifyContent:"flex-start",
        flexDirection:"row",
        alignItems:"center",
    },
    inputStyle:{
        borderBottomWidth:1,
        borderColor:"#C2BEBE",
        width:"90%",
        
    },
    labelInput: {
      fontSize:15
    },
    input: {
      borderWidth: 0
    }
  });