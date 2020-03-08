import React, {Component} from 'react';
import { StyleSheet, FlatList,Text ,ScrollView} from "react-native";
import { Card} from 'native-base';
import CategoryProductListItem from '../listItem/CategoryProductListItem';

const CategoryProductList=props=>{

  
//   console.log("ItemName",props.items.ItemName)
 return (
     
     <FlatList horizontal={true}  showsHorizontalScrollIndicator={false}
           
            data={props.categoryProductList}
      
            renderItem={(info) => (
              
                <CategoryProductListItem  
                   id={info.item.Id}
                   image={info.item.Image}
                   productName={info.item.ProductName}
                   price={info.item.Price} 
                  selectedProduct={()=>props.onProductSelected(info.item)}
                />
            )}   />
    
   
  );
};



export default CategoryProductList;

