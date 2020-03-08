import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';
import ProfileDetails from '../../components/profile/ProfileDetails';
import OtherProfileDetails from '../../components/profile/OtherProfileDetails';
import BottomNav from '../../components/bottomNavigation/BottomNav';
import { Avatar } from "react-native-elements";

export default class Profile extends Component{



  render(){

    return(
    <View style={{flex:1,backgroundColor:"white"}}>  
    <ScrollView>     
        <View style={{height:70,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
            <Icon name="message-circle" size={23}  style={{color:"#575656",marginRight:15}}/>
            <Icon name="bell" size={23}  style={{color:"#575656",marginRight:15,}}/>
        </View>


  <View style={{width:"100%",flexDirection:"row",marginLeft:10,}}>
    <View style={{width:"25%"}}>
       <Avatar
         size={90}
         rounded
         source={{
             uri:
            'https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/24432660_0.jpg?itok=1xcEJc6Q',
             }}
           />
  </View>
    <View style={{width:"75%",justifyContent:"center",marginLeft:30}}>
      <Text style={{fontWeight:'bold',fontSize:26,}}>David Beckham</Text>
       <Text style={{fontSize:12}} >davidbeckham@gmail.com</Text>
       <TouchableOpacity>
       <View style={{marginTop:5,borderWidth:1,width:120,height:30,borderColor:"grey",borderRadius:120/2,alignItems:"center"}}>
         <Text style={{marginTop:5,fontSize:13}}>EDIT PROFILE</Text>
        </View>
      </TouchableOpacity>
    </View>
     


  </View>
   





      <ProfileDetails/>
       <OtherProfileDetails/>
      
     </ScrollView>

     <BottomNav/>

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
    justifyContent:"space-between"
  },
  paymentCard:{
    height:50,
    width:"96%",
  }
})