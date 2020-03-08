import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import FloatingLabel  from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import { Searchbar } from 'react-native-paper';



export default class CartListItem extends Component{


  render(){

    return( 
      
<View style={{flex:1,backgroundColor:"white"}}>

  <View style={{width:"100%",flexDirection:"row",margin:10,}}>
    <View style={{width:"25%"}}>

     <Card style={{width:90,height:90,alignItems:"center",justifyContent:"center",borderRadius:90/2,}}>
       <Image 
          source={{uri:this.props.image}} 
          style={{margin:2,width: 60, height: 60}} 
          resizeMode="contain"/>
       </Card>
  </View>
    <View style={{width:"75%",justifyContent:"center",marginLeft:10}}>
      <Text style={{fontWeight:'100%',fontSize:17,color:"black"}}>{this.props.name}</Text>
       <Text style={{fontSize:12}} >{this.props.order}</Text>
      <Text style={{fontWeight:'bold',fontSize:18,color:"red",marginTop:10}}>{this.props.amount}</Text>
       <View style={{width:"20%",flexDirection:"row",justifyContent:"space-between",marginTop:5}}>
         <View style={{width:25,height:25,borderRadius:25/2,backgroundColor:"#d3d3d3" ,alignItems:"center",justifyContent:"center"}}>
            <Icon name="minus"  size={15}   />
         </View>
           <Text> 1 </Text>
           <View style={{width:25,height:25,borderRadius:25/2,backgroundColor:"#d3d3d3" ,alignItems:"center",justifyContent:"center"}}>
            <Icon name="plus"  size={15}   />
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