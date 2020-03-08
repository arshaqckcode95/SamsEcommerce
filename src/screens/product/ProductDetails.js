import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image,} from 'react-native';
import { Card, CardItem, Button,Container,Header,Left,Body,Title,Right,Content,Item,Input} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

import { Actions } from 'react-native-router-flux';
import ProductTabs from '../../components/product/productTabs/ProductTabs';

export default class ProductDetails extends Component{
state={
  productName:this.props.NewName,
  price:this.props.NewPrice,
  productImage:this.props.NewImage,
  all:this.props.AllItems,
}



  
  render(){
console.log("got",this.state.all)
    return(
<View style={{flex:1,backgroundColor:"white",}}>
  

     <View style={{flexDirection:"row",width:"100%",marginTop:20}}>
          <View style={{width:"15%"}}>
            <Icon name="chevron-left"
                size={33}  
                style={styles.imageIconStyle}/>
             </View>
           <View style={{width:"70%",alignItems:"center"}}>
  <Text>{this.state.productName}</Text>
  <Text style={{fontWeight:"bold"}}>$ {this.state.price}</Text>
            </View>
        <View style={{width:"20%",alignItems:"center"}}>
           <View >
            <Icon name="shopping-cart" size={23}  style={{color:"#575656",marginRight:15,}}/>
             </View>
           </View>
         </View>
     <View style={{alignItems:"center"}}>
       <Card style={styles.cardStyle}>
        <Image
            style={styles.imageStyle}
            source={{uri:this.state.productImage}} 
            resizeMode="contain">
            </Image>
        </Card>
      </View>


    <ProductTabs/>


   <View style={{width:"100%",marginBottom:5}}>
    
    <View style={{width:"100%",}}>   
         <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
           



            <View style={{width:"45%",alignItems:"center"}}>
               <View style={{width:"100%",}}>
                 <Button rounded danger 
                     style={{width:"100%",height:51,backgroundColor:"white"}}>
                   <View style={{width:"15%"}}>

                  </View>
                  <View style={{width:"65%",alignItems:"center"}}>
                   <Text style={{fontSize:15,fontWeight:"700",color:"grey"}}>SHARE THIS</Text>
                  </View>
                   <View style={{width:"20%",alignItems:"flex-end",marginRight:14}}>

                   <View style={{backgroundColor:"grey",justifyContent:"center",
                        borderRadius:30,height:35,width:35,alignItems:"center",}}>
                         <Icon
                          style={{}}
                            size={15}
                            name='arrow-up'
                         color="white"
                         />
                     </View>
                  </View>
                 </Button>
                 </View>

              </View>



             <View style={{width:"45%",alignItems:"center"}}>
               <View style={{width:"100%",}}>
                 <Button rounded danger onPress={ ()=> Actions.cart({CartProducts:this.state.all})}
                     style={{width:"100%",height:51,backgroundColor:"red"}}>
                   <View style={{width:"15%"}}>

                  </View>
                  <View style={{width:"65%",alignItems:"center"}}>
                   <Text style={{fontSize:15,fontWeight:"700",color:"white"}}>ADD TO CART</Text>
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


</View>
       
  
    )
  }
}

const styles = StyleSheet.create({
   login: {
      color:"#575656",
      fontSize:25,
      fontWeight:"bold",
      margin:10
    },
    mainContainer:{
      marginTop:10,
      
    },
     imageIconStyle:{
        color:"red",
        justifyContent:"center",
        alignItems:"center"
    },
     cardStyle:{ 
        marginTop:20,
        
        width:"50%",
        height:190,
        borderTopEndRadius:10,
        borderTopLeftRadius:10, 
        borderBottomLeftRadius:10,
        borderBottomEndRadius:10, 
        alignItems:"center"     
   },
     imageStyle:{
        width:"50%",
        height:190,     
   },
  });