import React, {Component} from 'react';
import { StyleSheet, FlatList,Text ,ScrollView} from "react-native";
import { Card} from 'native-base';

import CartListItem from '../listItem/CartListItem';
const CartList=props=>{

  
//   console.log("ItemName",props.items.ItemName)
 return (
     
     <FlatList
           
            data={props.cartProducts}
      
            renderItem={(info) => (
              
          <CartListItem  
                id={info.item.Id}
                image={info.item.Image} 
                order={info.item.Order}
                name={info.item.Name}
                amount={info.item.Amount}
                />
            )}   
            />
    
   
  );
};



export default CartList;

