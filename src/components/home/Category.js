import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import { Card, CardItem, Button,  } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import FloatingLabel  from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';



export default class Category extends Component{

  render(){

    return(
        <View>
        <TouchableOpacity onPress={()=>Actions.cart()}>
          <View style={styles.mainContainer}>
          <Text style={styles.categories}>Categories</Text>
       </View>
       </TouchableOpacity>


 <View style={styles.categoryItemStyle}>

   <View style={{flexDirection:"column",alignItems:"center"}}>
     <View > 
        <View style={styles.CardStyle}>
           <Image 
              source={require('../../assets/images/payment_icon.png')} 
              style={styles.imageStyle} 
              resizeMode="stretch"/>
             </View> 
             </View> 
            <View>
              <Text style={{}}>GOLD</Text>
             </View>
             </View>  

             <View style={{flexDirection:"column",alignItems:"center"}}>
           <View > 
             <View style={styles.CardStyle}>
               <Image 
              source={require('../../assets/images/destination_icon.png')} 
              style={styles.imageStyle} 
              resizeMode="stretch"/>
             </View> 
             </View> 
            <View>
              <Text style={{}}>SILVER</Text>
             </View>
             </View>  

              <View style={{flexDirection:"column",alignItems:"center"}}>
     <View > 
        <View style={styles.CardStyle}>
           <Image 
              source={require('../../assets/images/collected_icon.png')} 
              style={styles.imageStyle} 
              resizeMode="stretch"/>
             </View> 
             </View> 
            <View>
              <Text style={{}}>DIAMOND</Text>
             </View>
             </View>  
         
             <View style={{flexDirection:"column",alignItems:"center"}}>
     <View >  
     <TouchableOpacity onPress={()=>Actions.allcategories()}>
        <Card style={styles.CardIconStyle}>
          <Icon name="chevron-right"
           size={33}  
           style={styles.imageIconStyle}/>
             </Card> 
             </TouchableOpacity>
             </View> 
            
            <View>
              <Text style={{}}>SEE ALL</Text>
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
        marginTop:-26
    },
    mainContainer:{
        marginTop:0,  
    },
    CardStyle:{
        width:80,
        height:80,
        borderRadius:160,
        alignItems:"center", 
        justifyContent:"center" 
    },
    CardIconStyle:{
        width:70,
        height:70,
        borderRadius:70/2,
        alignItems:"center", 
        justifyContent:"center" 
    },
    imageIconStyle:{
        color:"red",
        justifyContent:"center",
        alignItems:"center"
    },
    imageStyle:{
      marginTop:18,
        width: 118, 
        height: 118, 
        borderRadius: 160
       
   },
   categoryItemStyle:{
       flexDirection:"row",
       justifyContent:"space-evenly"
   }
  });