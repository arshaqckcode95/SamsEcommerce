import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image,ImageBackground} from 'react-native';
import { Card, CardItem, Button,  } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import FloatingLabel  from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import AllButton from '../buttonComponent/AllButton'

export default class LatestListItem extends Component{

render(){

    return(
         
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
         <View style={{flexDirection:"row",justifyContent:"space-evenly",}}>
              <View>
                 <ImageBackground
                    style={styles.imageStyle}
                    source={{uri:this.props.image}}>
                    
                       <View style={{flex:1,marginLeft:10,justifyContent:"center",alignItems:"flex-start"}}>
                       <AllButton handleButtonPress={()=>this.props.onClick()} />
                       </View>
                       
                        </ImageBackground>
                        </View>
                        
           </View>
         </ScrollView>
    )
}
}
const styles = StyleSheet.create({
    imageStyle:{
        marginTop:5,
        marginLeft:15,
        width:290,
        height:150,
        borderTopEndRadius:20
       
   },
  
  });