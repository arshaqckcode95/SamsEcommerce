import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';


export default class ProfileDetails extends Component{



  render(){

    return(
    <View style={{backgroundColor:"white"}}>       

          <View style={{alignItems:"center",margin:5}}>
            <Card style={styles.paymentCard}>
             <CardItem style={styles.itemStyle}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                 <Icon name="menu" size={20}  />
                 <Text style={{marginLeft:5,fontSize:15}}>All My Orders</Text>
                </View>
              <View style={{justifyContent:"center"}}>
                <View style={{width:20,height:20,borderRadius:25/2,backgroundColor:"#d3d3d3" ,alignItems:"center",justifyContent:"center"}}>
                   <Icon name="chevron-right"
                      size={16}  
                     />
                 </View>
              </View>
             </CardItem>

            <CardItem style={styles.itemStyle}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                 <Icon name="credit-card" size={20}  />
                 <Text style={{marginLeft:5,fontSize:15}}>Pending Shipments</Text>
                </View>
              <View style={{justifyContent:"center"}}>
                <View style={{width:20,height:20,borderRadius:25/2,backgroundColor:"#d3d3d3" ,alignItems:"center",justifyContent:"center"}}>
                   <Icon name="chevron-right"
                      size={16}  
                     />
                 </View>
              </View>
             </CardItem>

                    <CardItem style={styles.itemStyle}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                 <Icon name="dollar-sign" size={20}  />
                 <Text style={{marginLeft:5,fontSize:15}}>Pending Payments</Text>
                </View>
              <View style={{justifyContent:"center"}}>
                <View style={{width:20,height:20,borderRadius:25/2,backgroundColor:"#d3d3d3" ,alignItems:"center",justifyContent:"center"}}>
                   <Icon name="chevron-right"
                      size={16}  
                     />
                 </View>
              </View>
             </CardItem>
                    <CardItem style={styles.itemStyle}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                 <Icon name="check-square" size={20}  />
                 <Text style={{marginLeft:5,fontSize:15}}>Finished Orders</Text>
                </View>
              <View style={{justifyContent:"center"}}>
                <View style={{width:20,height:20,borderRadius:25/2,backgroundColor:"#d3d3d3" ,alignItems:"center",justifyContent:"center"}}>
                   <Icon name="chevron-right"
                      size={16}  
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
     Allcategories: {
      color:"#575656",
      fontSize:30,
      fontWeight:"bold",
      margin:10,
      marginTop:-20
    },
itemStyle:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:2
  },
  paymentCard:{
    height:200,
    width:"96%",
       borderTopEndRadius:10,
    borderTopLeftRadius:10, 
    borderBottomLeftRadius:10,
    borderBottomEndRadius:10, 
  }
})