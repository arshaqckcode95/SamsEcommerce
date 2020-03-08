import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity} from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

import { Actions } from 'react-native-router-flux';
import NotificationList from '../../components/list/NotificationList'

export default class Notification extends Component{
state={
    NotificationList:[
        {
        " Id":1,
"Type":1,
"OrderNumber":1234,
 "Date":Date(),
"Time":Date(),
"Amount":250,
"IsRead":false,
"Title":"Dress Material",
"Content":"information technology, a notification system is a combination of software and hardware that provides a means of delivering a message to a set of recipients."

    },
      {
        "Id":2,
"Type":2,
"OrderNumber":7896,
 "Date":Date(),
"Time":Date(),
"Amount":2500,
"IsRead":false,
"Title":"Gold Item",
"Content":"information technology, a notification system is a combination of software and hardware that provides a means of delivering a message to a set of recipients.",

    },
      {
        "Id":3,
"Type":3,
"OrderNumber":5632,
 "Date":Date(),
"Time":Date(),
"Amount":5000,
"IsRead":true,
"Title":"Harware",
"Content":"information technology, a notification system is a combination of software and hardware that provides a means of delivering a message to a set of recipients.",

    },
    
    
    
    
    ]

    


}
clckNotification=(item)=>{
Actions.notificationDetails()
}
 
  render(){

    return(
      <View style={{flex:1,backgroundColor:"white"}}>
           <View style={styles.mainContainer}>
             <Text style={styles.login}>Notifications</Text>
          </View>
      
            <NotificationList notificationList={this.state.NotificationList} />
          
          

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