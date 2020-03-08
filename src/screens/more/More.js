import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';
import MoreDetails from '../../components/more/MoreDetails';
import MorePolicyDetails from '../../components/more/MorePolicyDetails';
import BottomNav from '../../components/bottomNavigation/BottomNav';

export default class More extends Component{



  render(){

    return(
    <View style={{flex:1,backgroundColor:"white"}}>  
    <ScrollView>     
        <View style={{height:80,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
            <Icon name="message-circle" size={23}  style={{color:"#575656",marginRight:15}}/>
            <Icon name="bell" size={23}  style={{color:"#575656",marginRight:15,}}/>
        </View>
          <View style={styles.mainContainer}>
             <Text style={styles.Allcategories}>More</Text>
          </View>

      <MoreDetails/>
       <MorePolicyDetails/>
      
          <View style={{alignItems:"center",marginTop:5}}>
          <TouchableOpacity onPress={()=>Actions.dashboard()}>
           <Text style={{fontSize:15,fontWeight:"bold",color:"red"}}>LOG OUT</Text>
           </TouchableOpacity>
          </View>
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