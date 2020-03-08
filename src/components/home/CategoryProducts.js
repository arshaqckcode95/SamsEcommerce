import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image,ImageBackground} from 'react-native';
import { Card, CardItem, Button,  } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import FloatingLabel  from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import AllButton from '../buttonComponent/AllButton'
import CategoryProductList from '../list/CategoryProductList';


export default class CategoryProducts extends Component{

state={
   
CategoryProductLists:[{
  "Id":1,
   "Image":"https://www.mcelhinneys.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/m/amy_huberman_sku_charade_can__1.jpg",
    "ProductName":"Ankle boot",
    "Price":400,
},
{
  "Id":2,
  "Image":"https://s7d4.scene7.com/is/image/JCPenney/DP0318201907021986M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2",
  "ProductName":"Nike Red shoe",
  "Price":1200,
},
{
  "Id":3,
  "Image":"http://www.lawntreatmentforum.co.uk/images/large/UK%20Sneakers/Unique-Style-Mens-Nike-Satire-Mid-Canvas-Casual-Shoes-BD67922-BlueWhiteBlack-85DL_LRG.jpg",
  "ProductName":"Nike sneakers",
  "Price":2000,
},
{
  "Id":4,
  "Image":"https://cdn1.uksoccershop.com/images/nike-mercurial-victory-fg-mens-football-boots-orange-white.jpg",
  "ProductName":"Nike boot",
 "Price":2500,
},
{
  "Id":5,
  "Image":"https://www.futbolemotion.com/imagesarticulos/102291/540/bota-nike-magista-obra-fg-acc-volt-hyper-punch-0.jpg",
  "ProductName":"Nike magista",
  "Price":3000,
}
]}

  render(){

    return(
 <View style={{}}>        
   <CategoryProductList 
   categoryProductList={this.state.CategoryProductLists}/>

  </View>
    )
  }
}


const styles = StyleSheet.create({
    imageStyle:{
        
        marginLeft:15,
        width:290,
        height:130
       
   },
  
  });