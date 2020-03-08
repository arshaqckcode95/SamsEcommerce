import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import FloatingLabel  from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import { Searchbar } from 'react-native-paper';
import CartList from '../../components/list/CartList';
import BottomNav from '../../components/bottomNavigation/BottomNav';

export default class Cart extends Component{

state={
CartProducts:[{
  "Id":1,
   "Image":"https://cdn.shopify.com/s/files/1/1124/8494/products/scarves-default-sheer-batik-cotton-scarf-in-raspberry-red-scarf032-6590426906670.jpg?v=1558562428",
   "Order":"Order :#101060 ",
   "Name":"Red cotton Scarf 2ft",
   "Amount":"$11.00 "
},
{
  "Id":2,
  "Image":"https://rukminim1.flixcart.com/image/332/398/jggv53k0/backpack/g/v/v/amt-pulse-sch-bag-02-cam-olive-fe8-0-54-002-backpack-american-original-imaf4ghyfkrz2zm4.jpeg?q=50",
  "Order":"Order :#101008 ",
  "Name":"Green Bag",
  "Amount":"$81.00 "
},
{
  "Id":3,
  "Image":"https://www.mcelhinneys.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/m/amy_huberman_sku_charade_can__1.jpg",
  "Order":"Order :#101078 ",
  "Name":"Ankle Boot",
  "Amount":"$61.00 "
},
{
  "Id":4,
  "Image":"https://www.futbolemotion.com/imagesarticulos/102291/540/bota-nike-magista-obra-fg-acc-volt-hyper-punch-0.jpg",
  "Order":"Order :#101072 ",
  "Name":"Nike Boot",
  "Amount":"$87.00 "
},
{
  "Id":5,
  "Image":"https://cdn1.uksoccershop.com/images/nike-mercurial-victory-fg-mens-football-boots-orange-white.jpg",
  "Order":"Order :#101099 ",
  "Name":"Nike Boot",
  "Amount":"$90.00 "
}
],
// CartItems:[this.props.CartProducts]
}



  render(){
console.log("success in cart",this.state.CartItems)
    return(
   <View style={{flex:1,backgroundColor:"white"}}>
    
                 
        <View style={{height:80,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
            <Icon name="message-circle" size={23}  style={{color:"#575656",marginRight:15}}/>
            <Icon name="bell" size={23}  style={{color:"#575656",marginRight:15,}}/>
        </View>

          <View style={styles.mainContainer}>
             <Text style={styles.categories}>Cart</Text>
          </View>

       
        
        
        
       
        <CartList
          cartProducts={this.state.CartProducts} 
          />  

       
        

    <View style={{width:"100%",marginBottom:10}}>   
         <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
             <View style={{width:"50%",}}> 
               <Text style={{fontSize:12,marginLeft:8}}>TOTAL</Text>
               <Text style={{fontSize:19,marginLeft:10,fontWeight:"bold"}}>$ 213</Text>
               <Text style={{fontSize:12,marginLeft:8}}>Free Domestic shipping</Text>
               </View>

             <View style={{width:"50%",alignItems:"center"}}>
               <View style={{width:"90%",}}>
                 <Button rounded danger onPress={()=>Actions.checkout()}
                     style={{width:"100%",height:51,backgroundColor:"red"}}>
                   <View style={{width:"15%"}}>

                  </View>
                  <View style={{width:"65%",alignItems:"center"}}>
                   <Text style={{fontSize:15,fontWeight:"700",color:"white"}}>CHECKOUT</Text>
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



     <BottomNav />


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
    recentStyle:{
        margin:18,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    cardViewStyle:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        width:"100%"
    },
    cardStyle:{
        width:"47%",
        height:100,
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    detailStyle:{
        margin:10,
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    cardImageStyle:{
       width:"19%"
    }
    
  });