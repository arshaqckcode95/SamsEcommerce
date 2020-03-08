import React, {Component} from 'react';
import { StyleSheet, FlatList,Text ,ScrollView} from "react-native";
import { Card} from 'native-base';
import LatestListItem from '../listItem/LatestListItem';

const LatestList=props=>{

  
//   console.log("ItemName",props.items.ItemName)
 return (
     
     <FlatList horizontal={true}  showsHorizontalScrollIndicator={false}
           
            data={props.latestlistItem}
      
            renderItem={(info) => (
              
                <LatestListItem  
                  id={info.item.Id}
                  image={info.item.Image} 
                  onClick={()=>props.handleSeemore(info.item.Id)}
                />
            )}   />
    
   
  );
};



export default LatestList;

