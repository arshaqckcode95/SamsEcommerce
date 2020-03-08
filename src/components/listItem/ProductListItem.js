import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image,ImageBackground} from 'react-native';
import { Card, CardItem, Button,  } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

import AllButton from '../buttonComponent/AllButton'

export default class ProductListItem extends Component{



handle=()=>{
this.props.OnItemPress()
}
render(){

    return(
         
   <View style={{width:"50%",}}>
     <TouchableOpacity onPress={this.handle}>
     <Card  style={styles.cardStyle}>
                 <Image
                    style={styles.imageStyle}
                    source={{uri:this.props.image}} resizeMode="contain">
                        </Image>
                         <Text style={styles.textStyle}>{this.props.productName}</Text>
                          <Text style={styles.amounttextStyle}>${this.props.price}</Text>
                          </Card>
                
</TouchableOpacity>
   </View>

           
            
        
       
    )
}
}
const styles = StyleSheet.create({
    imageStyle:{
        width:100,
        height:150,
        borderTopEndRadius:20  ,
        alignSelf:"center"    
   },
    cardStyle:{ 
        marginTop:10,
        marginLeft:15,
        // width:120,
        // height:140,
        borderTopEndRadius:10,
        borderTopLeftRadius:10, 
        borderBottomLeftRadius:10,
        borderBottomEndRadius:10, 
        
   },
   textStyle:{
     fontSize:15,
     color:"#5B5C5D",
     paddingLeft:20
   },
    amounttextStyle:{
     fontSize:15,
     color:"black",
     paddingLeft:20
   }
  });