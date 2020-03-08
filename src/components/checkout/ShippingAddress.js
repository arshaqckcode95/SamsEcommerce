import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';


export default class ShippingAddress extends Component{



  render(){

    return(
<View>
          <View style={{margin:5,}}> 
           <Text style={{color:"grey"}}>SHIPPING ADDRESS</Text>
           </View>

           <View style={{margin:5,alignItems:"center"}}>
            <Card style={styles.cardStyle}>
            <CardItem style={styles.itemStyle}>
              <View>
                <Text style={{fontWeight:"bold",fontSize:15}}>John Doe</Text>
                <Text style={{fontSize:14}}>No 123,Sub Street</Text>
                <Text style={{fontSize:14}}>Main Street</Text>
                <Text style={{fontSize:14}}>City Name,Province</Text>
                <Text style={{fontSize:14}}>Country</Text>
              </View>
              <View style={{justifyContent:"center"}}>
                <View style={{width:25,height:25,borderRadius:25/2,backgroundColor:"#d3d3d3" ,alignItems:"center",justifyContent:"center"}}>
                   <Icon name="chevron-right"
                      size={20}  
                     />
                 </View>
              </View>
              </CardItem>
            </Card>
           </View>

         <View style={{margin:5}}> 
           <Text style={{color:"grey"}}>PAYMENT METHOD</Text>
           </View>
           
          <View style={{alignItems:"center"}}>
            <Card style={styles.paymentCard}>
             <CardItem style={styles.itemStyle}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                 <Icon name="aperture" size={20}  />
                 <Text style={{marginLeft:5,fontWeight:"bold",fontSize:15}}>Master Card ending **00</Text>
                </View>
              <View style={{justifyContent:"center"}}>
                <View style={{width:25,height:25,borderRadius:25/2,backgroundColor:"#d3d3d3" ,alignItems:"center",justifyContent:"center"}}>
                   <Icon name="chevron-right"
                      size={20}  
                     />
                 </View>
              </View>
             </CardItem>
            </Card>
          </View> 

</View> 
        


    )
  }
}
const styles=StyleSheet.create({
  cardStyle:{
    width:"97%",
    height:120,
 
  },
  itemStyle:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  paymentCard:{
    height:50,
    width:"96%",
  }

})