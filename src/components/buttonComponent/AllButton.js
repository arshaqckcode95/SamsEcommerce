import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity} from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

export default class AllButton extends Component{
    handleButtonPress=()=>{
        this.props.handleSeemore()
    }

    render(){

        return(

 <View style={{alignItems:"center"}}>
     <View style={{width:"37%"}}>
         <Button onPress={()=>this.props.handleButtonPress()}
          rounded danger style={{width:"100%",height:30,backgroundColor:"white"}}>
             <View style={{width:"80%",alignItems:"center",marginLeft:3}}>
             <Text style={{fontSize:11,fontWeight:"700",color:"red"}}>SEE MORE</Text>
             </View>
             <View style={{width:"20%",alignItems:"flex-end",marginRight:13}}>

             <View style={{backgroundColor:"red",justifyContent:"center",
                    borderRadius:30,height:22,width:22,alignItems:"center",}}>
                <Icon
                   style={{}}
                   size={15}
                    name='chevron-right'
                    color="white"
                 />
              </View>
                    </View>
         </Button>
     </View>
     </View>
        )
    }
}