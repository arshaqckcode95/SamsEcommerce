import React, { Component } from 'react';
import { Container, Content, Tabs } from 'native-base';
import {View,Text} from 'react-native';

export default class Details extends Component {
    render() {
        return (
<View>

     <View style={{flexDirection:"row",justifyContent:"space-between"}}>
     <View>
        <Text style={{marginTop:2,color:"grey",fontSize:16}}>BRAND</Text>
        <Text style={{marginTop:2,fontSize:15,color:"#454345"}}>Lilys Ankle Boot</Text>
      </View>
       <View>
         <View style={{alignItems:"flex-end"}}>
          <Text style={{marginTop:2,color:"grey",fontSize:16}}>SKU</Text>
         </View>
       <View>
       <Text style={{marginTop:2,fontSize:15,color:"#454345"}}>0567890378</Text>
       </View>
      </View>
     </View>         
    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:15}}>
     <View>
        <Text style={{marginTop:2,color:"grey",fontSize:16}}>CONDITION</Text>
        <Text style={{marginTop:2,fontSize:15,color:"#454345"}}>Brand New With Box</Text>
      </View>
       <View>
        <View style={{alignItems:"flex-end"}}>
        <Text style={{marginTop:2,color:"grey",fontSize:16}}>MATERIAL</Text>
        </View>
        <Text style={{marginTop:2,fontSize:15,color:"#454345"}}>Faux Sued Velvet</Text>
      </View>
     </View> 
     <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:15}}>
     <View>
        <Text style={{marginTop:2,color:"grey",fontSize:16}}>CATEGORY</Text>
        <Text style={{marginTop:2,fontSize:15,color:"#454345"}}>Women Shoes</Text>
      </View>
       <View>
        <View style={{alignItems:"flex-end"}}>
        <Text style={{marginTop:2,color:"grey",fontSize:16}}>FITTING</Text>
        </View>
        <Text style={{marginTop:2,fontSize:15,color:"#454345"}}>True To Size</Text>
      </View>
     </View> 



  </View>
        )
    }
}