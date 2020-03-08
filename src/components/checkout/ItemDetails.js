import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';


export default class ItemDetails extends Component{



  render(){

    return(
    <View>
          <View style={{margin:5}}> 
             <Text style={{color:"grey"}}>ITEM</Text>
           </View>
    
        <View style={{width:"100%",flexDirection:"row",margin:20}}>
          <View style={{width:"20%"}}>
             <Card style={{width:70,height:70,alignItems:"center",justifyContent:"center",borderRadius:70/2,}}>
               <Image 
                source={{uri:"https://cdn.shopify.com/s/files/1/1124/8494/products/scarves-default-sheer-batik-cotton-scarf-in-raspberry-red-scarf032-6590426906670.jpg?v=1558562428"}} 
                style={{margin:2,width: 60, height: 60}} 
                resizeMode="contain"/>
             </Card>
          </View>
        <View style={{width:"60%",justifyContent:"center",marginLeft:10}}>
           <Text style={{fontWeight:'bold',fontSize:12,color:"black"}}>Order :#101048 </Text>
           <Text >Red cotton Scarf 2ft </Text>
           <Text style={{fontWeight:'bold',fontSize:12,color:"red"}}>$11.00 </Text>
       </View>
       <View style={{width:"20%",justifyContent:"center",}}>
          <View style={{width:25,height:25,borderRadius:25/2,backgroundColor:"#d3d3d3" ,alignItems:"center",justifyContent:"center"}}>
             <Icon name="chevron-right"size={20}  />
         </View>
      </View>
   </View>

          <View style={{alignItems:"center"}}>
            <Card style={styles.paymentCard}>
             <CardItem style={styles.itemStyle}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                  <Icon name="shield" size={20} color="red" />
                  <Text style={{marginLeft:5,fontSize:15,color:"red"}}>Add Promo Code</Text>
                </View>
              <View style={{justifyContent:"center"}}>
                 <View style={{width:25,height:25,borderRadius:25/2,backgroundColor:"#d3d3d3" ,alignItems:"center",justifyContent:"center"}}>
                   <Icon name="chevron-right"  size={20}/>
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
  itemStyle:{
       flexDirection:"row",
       justifyContent:"space-between"
  },
  paymentCard:{
       height:50,
       width:"96%",
  }
 });