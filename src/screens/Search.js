import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import FloatingLabel  from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import { Searchbar } from 'react-native-paper';



export default class Search extends Component{


  render(){

    return(
      <View style={{flex:1,backgroundColor:"white"}}>
         
                 
        <View style={{height:80,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
            <Icon name="message-circle" size={23}  style={{color:"#575656",marginRight:15}}/>
            <Icon name="bell" size={23}  style={{color:"#575656",marginRight:15,}}/>
        </View>

          <View style={styles.mainContainer}>
             <Text style={styles.categories}>Search</Text>
          </View>
      
       <View style={{alignItems:"center"}}>
         <Searchbar style={{borderRadius:30,width:"90%",
            height:40,backgroundColor:"#E4E4E4"}}
            placeholder="Search Something"
            placeholderTextColor="grey"
          /> 
        </View>
      <View style={styles.recentStyle}>
          <Text style={{fontSize:15,color:"grey"}}>RECENTLY VIEWED</Text>
        <TouchableOpacity>
          <Text style={{fontSize:15,color:"red"}}>CLEAR</Text>
        </TouchableOpacity>
      </View>

<View style={styles.cardViewStyle}>

  <Card style={styles.cardStyle}>
     <View style={styles.cardImageStyle}>
       <Image 
         source={{uri:"https://cdn.shopify.com/s/files/1/1124/8494/products/scarves-default-sheer-batik-cotton-scarf-in-raspberry-red-scarf032-6590426906670.jpg?v=1558562428"}} 
         style={{margin:2,width: 40, height: '80%'}} 
         resizeMode="contain"/>
      </View>
         <View>
            <View style={{margin:5,flexDirection:"column",alignItems:"center",}}>
               <Text style={{fontSize:17,color:"grey"}}>Red Cotton Scarf</Text>   
               <Text style={{fontSize:17,color:"grey"}}>$ 11.0</Text> 
             </View>
          </View>
     </Card>

         <Card style={styles.cardStyle}>
           <View  style={styles.cardImageStyle}>
               <Image 
                  source={{uri:"https://rukminim1.flixcart.com/image/332/398/jggv53k0/backpack/g/v/v/amt-pulse-sch-bag-02-cam-olive-fe8-0-54-002-backpack-american-original-imaf4ghyfkrz2zm4.jpeg?q=50"}} 
                  style={{margin:2,width: 40, height: '80%'}} 
                  resizeMode="contain"/>
              </View>
             <View>
               <View style={{margin:5,flexDirection:"column",alignItems:"center",}}>
                 <Text style={{fontSize:17,color:"grey"}}>Travel Green Bag</Text>   
                 <Text style={{fontSize:17,color:"grey"}}>$ 30.0</Text> 
             </View>
            </View>
        </Card>
</View>


<View style={styles.recentStyle}>
          <Text style={{fontSize:15,color:"grey"}}>RECOMMENDED</Text>
          <TouchableOpacity>
          <Text style={{fontSize:15,color:"red"}}>REFRESH</Text>
          </TouchableOpacity>
      </View>


      <View style={styles.detailStyle}>
          <Text style={{fontSize:15,color:"grey"}}>Denim Jeans</Text>
          <Text style={{fontSize:15,color:"grey"}}>Mini Skirt</Text>
          <Text style={{fontSize:15,color:"grey"}}>Jacket</Text>
          <Text style={{fontSize:15,color:"grey"}}>Accessories</Text>
      </View>

      <View style={styles.detailStyle}>
          <Text style={{fontSize:15,color:"grey"}}>Sports Accessories</Text>
          <Text style={{fontSize:15,color:"grey"}}>Yoga Pants</Text>
          <Text style={{fontSize:15,color:"grey"}}>Eye Shadow</Text>
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