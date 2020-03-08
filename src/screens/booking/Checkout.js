import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';
import BottomNav from '../../components/bottomNavigation/BottomNav';
import ShippingAddress from '../../components/checkout/ShippingAddress';
import ItemDetails from '../../components/checkout/ItemDetails';

export default class Checkout extends Component{



  render(){

    return(

   <View style={{flex:1,backgroundColor:"white"}}>
     <ScrollView>
                 
      <View style={{height:80,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
            <Icon name="x" size={23}  style={{color:"red",marginRight:15}}/>
        </View>

          <View style={styles.mainContainer}>
             <Text style={styles.categories}>Checkout</Text>
          </View>

       <ShippingAddress/>
        
        <ItemDetails/>
        
    
          
</ScrollView>
       
        

    <View style={{width:"100%",}}>   
         <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
             <View style={{width:"50%",}}> 
               <Text style={{fontSize:12,marginLeft:8}}>TOTAL</Text>
               <Text style={{fontSize:19,marginLeft:10,fontWeight:"bold"}}>$ 213</Text>
               <Text style={{fontSize:12,marginLeft:8}}>Free Domestic shipping</Text>
               </View>

             <View style={{width:"50%",alignItems:"center"}}>
               <View style={{width:"100%",}}>
                 <Button rounded danger onPress={()=>Actions.orderconfirm()}
                     style={{width:"100%",height:51,backgroundColor:"red"}}>
                   <View style={{width:"15%"}}>

                  </View>
                  <View style={{width:"65%",alignItems:"center"}}>
                   <Text style={{fontSize:15,fontWeight:"700",color:"white"}}>PLACE ORDER</Text>
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

           </View>
      </View>




      </View>
    )
  }
}

const styles = StyleSheet.create({
    categories: {
      color:"#575656",
      fontSize:32,
      fontWeight:"bold",
      margin:10,
      marginTop:-20
    },
    mainContainer:{
      marginTop:0,  
    },
    
  });