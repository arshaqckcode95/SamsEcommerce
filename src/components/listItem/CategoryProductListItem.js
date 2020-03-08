import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image,ImageBackground} from 'react-native';
import { Card, CardItem, Button,  } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';
import AllButton from '../buttonComponent/AllButton'


export default class CategoryProductListItem extends Component{


render(){

    return(
         
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <TouchableOpacity onPress={this.props.selectedProduct}>
         <View style={{flexDirection:"row",justifyContent:"space-evenly",}}>
              <View style={{alignItems:"center"}}>
              <Card style={styles.cardStyle}>
                 <Image
                    style={styles.imageStyle}
                    source={{uri:this.props.image}} resizeMode="contain">
                        </Image>
                         <Text style={styles.textStyle}>{this.props.productName}</Text>
                          <Text style={styles.textStyle}>{this.props.price}</Text>
                          </Card>
                        </View>
           </View>
           </TouchableOpacity>
         </ScrollView>
    )
}
}
const styles = StyleSheet.create({
    imageStyle:{
        width:120,
        height:100,
        
   },
    cardStyle:{ 
        marginTop:10,
        marginLeft:15,
        width:120,
        height:140,
        borderTopEndRadius:10,
        borderTopLeftRadius:10, 
        borderBottomLeftRadius:10,
        borderBottomEndRadius:10, 
        alignItems:"center"     
   },
   textStyle:{
     fontSize:13,
     color:"#5B5C5D"
   }
  });