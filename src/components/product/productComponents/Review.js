import React, { Component } from 'react';
import { Container, Content, Tabs } from 'native-base';
import {View,Text,StyleSheet,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class Review extends Component {
    render() {
        return (
  <View>
        <View style={{flexDirection:"row",width:"100%"}}> 
          <View style={{width:"20%"}}>
              <View style={styles.FirstLetterContainer}>
                 <Text style={styles.FirstLetterText}>DB</Text>
              </View>
            </View>  
          <View style={{flexDirection:"column",width:"55%"}}>    
             <View style={{flexDirection:"row",marginTop:5,marginLeft:5}}>
                <Icon name="star" size={15} color="red" />
                <Icon name="star" size={15} color="red"/>
                <Icon name="star" size={15} color="red"/>
                <Icon name="star" size={15} color="red"/>
                <Icon name="star" size={15} color="red"/>
              </View>
                 <Text style={{fontSize:16,fontWeight:"600%",marginLeft:9}}>David Beckham</Text>
                 <Text style={{marginLeft:9,marginTop:4}}>This is a great product </Text>
                 <Text style={{marginLeft:9}}>With good Quality material</Text>
                 <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:5}}>
                     <Image
                       style={styles.imageStyle}
                        source={{uri:"https://www.mcelhinneys.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/m/amy_huberman_sku_charade_can__1.jpg"}} 
                       resizeMode="contain">
                    </Image>
                    <Image
                       style={styles.imageStyle}
                        source={{uri:"https://media3.newlookassets.com/i/newlook/632679201D3/girls/footwear/boots/girls-black-suedette-block-heel-ankle-boots.jpg?strip=true&qlt=80&w=720"}} 
                       resizeMode="contain">
                    </Image>
                       <Image
                       style={styles.imageStyle}
                        source={{uri:"https://cdn.shopify.com/s/files/1/2397/3769/products/TAN_SHORTY_BOOT_grande.jpg?v=1562354201"}} 
                       resizeMode="contain">
                    </Image>
                        <Image
                       style={styles.imageStyle}
                        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieUEchcFl1k4nO7kTzf6gC7yv2Yvwdod-OHHvXhB3nvktXO7A6g&s"}} 
                       resizeMode="contain">
                    </Image>
                 </View>
             </View>  
             <View style={{width:"25%"}}>
              <Text>10 Oct 2019</Text>
             </View>    
     </View>


 



</View>
        );
    }
}
const styles = StyleSheet.create({
    FirstLetterText:{
      fontSize:20,
      color:'white',
      fontWeight:'bold'
  },
  FirstLetterContainer:{
      marginTop:15,
      width:60,
      height:60,
      borderRadius:60,
      // margin:10,
       alignItems:'center',
       justifyContent:'center',
      backgroundColor:'#87CEEB'
  },
     imageStyle:{
        width:60,
        height:60,     
   },
  
    
  });