import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity} from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

import { Actions } from 'react-native-router-flux';

import MessageList from '../../components/list/MessageList'
export default class Message extends Component{

  state={
    messageList:[
      {
 "OrderNumber":1234,
"CustomerName":"Sandeep Sanu",
"TestCategory":"Blood Test",
"PickupDate":Date(),
"PickupTime":Date(),
"IsRead":false
    },
       {
 "OrderNumber":123,
"CustomerName":"Geetha Vijay",
"TestCategory":"Blood Test",
"PickupDate":Date(),
"PickupTime":Date(),
"IsRead":true
    },
       {
 "OrderNumber":4315,
"CustomerName":"Vinup Mohan",
"TestCategory":"Blood Test",
"PickupDate":Date(),
"PickupTime":Date(),
"IsRead":true
    }
    ]

                        // onClick={()=>this.props.onItemClick(info.item)}
  }
  handleMessageItemClick=()=>{
    Actions.messagedetails()
  }
  render(){

    return(
      <View style={{flex:1,backgroundColor:"white"}}>
          <View style={styles.mainContainer}>
             <Text style={styles.login}>Messages</Text>
          </View>
      
         <MessageList messageList={this.state.messageList} onItemClick={this.handleMessageItemClick}/>
          

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
    
  });