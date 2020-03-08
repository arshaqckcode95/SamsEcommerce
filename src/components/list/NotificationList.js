import React, {Component} from 'react';
import { StyleSheet, FlatList,Text ,ScrollView} from "react-native";
import { Card} from 'native-base';
import NotificationListItem from '../listItem/NotificationListItem';

const NotificationList=props=>{

  
//   console.log("ItemName",props.items.ItemName)
 return (
 
     <FlatList
           
            data={props.notificationList}
      
            renderItem={(info) => (
              
         <NotificationListItem  
                id={info.item.Id}
                type={info.item.Type}
                orderNumber={info.item.OrderNumber}
                date={info.item.Date}
                time={info.item.Time}
                amount={info.item.Amount}
                isRead={info.item.IsRead}
                title={info.item.Title}
                content={info.item.Content}
            // OnItemPress={()=>props.handle(info.item)}
                />
            )}
           
            showsVerticalScrollIndicator={false}  
           
        />

 
       
    
   
  );
};



export default NotificationList;

