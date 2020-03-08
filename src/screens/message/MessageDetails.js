import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image,} from 'react-native';
import { Card, CardItem, Button,Container,Header,Left,Body,Title,Right,Content,Item,Input} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

import { Actions } from 'react-native-router-flux';

export default class MessageDetails extends Component{

 

                       
  
  render(){

    return(
      <View style={{flex:1,backgroundColor:"white",}}>
      <ScrollView>
     <View style={{flexDirection:"row",width:"100%",marginTop:20}}>
   <View style={{width:"15%"}}>
 <Icon name="chevron-left"
           size={33}  
           style={styles.imageIconStyle}/>
   </View>
   <View style={{width:"70%",}}>
<Text>Smiley's Store</Text>
<Text>Active</Text>

   </View>
     {/* <View style={styles.FirstLetterContainer}>
                             <Text style={styles.FirstLetterText}>{this.props.Name.charAt(0).toUpperCase()}</Text>
                            </View> */}
                            <View style={{width:"20%"}}>

                              <View style={styles.FirstLetterContainer}>
                             <Text style={styles.FirstLetterText}>S</Text>
                            </View>
                            </View>

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
<Icon name="chevron-right"
           size={20}  
          />
</View>



</View>

</View>

<View style={{backgroundColor:"#e8f4f8",margin:20,flex:1,height:400}}>
<View style={{margin:20}}>
<View style={{alignItems:"center",marginBottom:20}}> 
<Text>Yesterday 9.20 Pm </Text>
</View>
<Text style={{paddingTop:1}}>Dear customer,Your </Text>
<Text style={{paddingTop:1}}>Order hasbeen Shipped </Text>
<Text style={{paddingTop:1}}>Please see below for the  </Text>
<Text style={{paddingTop:1}}>tracking number </Text>
<Text style={{color:"red",paddingTop:5,paddingBottom:5}}>UH698564123 </Text>
<Text style={{paddingTop:1}}>Dear customer,Your </Text>
<Text style={{paddingTop:1}}>Order hasbeen Shipped </Text>
<Text style={{paddingTop:1}}>Please see below for the  </Text>
<Text style={{paddingTop:1}}>tracking number </Text>
</View>
</View>
</ScrollView>
<View style={{marginBottom:10}}>

    <Item rounded style={{borderWidth:.25,borderColor:"#d3d3d3",marginLeft:10,marginRight:10}} >
  <View style={{width:25,height:25,borderRadius:25/2,backgroundColor:"#d3d3d3" ,alignItems:"center",justifyContent:"center",marginLeft:10}}>
<Icon name="plus"
           size={20}  
          />
</View>

   
  
    <Input placeholder='Rounded Textbox' style={{alignItems:"center",paddingLeft:20}}/>
   
   
<View style={{width:30,height:30,borderRadius:30/2,backgroundColor:"red" ,alignItems:"center",justifyContent:"center",marginRight:10}}>
<Icon name="arrow-up"
           size={20}  
           color="white"
          />
</View>

        
          </Item>
        
 </View>

</View>
       



      
         /* <MessageList messageList={this.state.messageList}/> */

        
          

  
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
    FirstLetterText:{
      fontSize:20,
      color:'white',
      fontWeight:'bold'
  },
  FirstLetterContainer:{
      width:40,
      height:40,
      borderRadius:30,
      // margin:10,
       alignItems:'center',
       justifyContent:'center',
      backgroundColor:'#87CEEB'
  },
  
  
    
  });