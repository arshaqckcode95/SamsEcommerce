import React, { Component } from 'react';
import { Container, Content, Tabs } from 'native-base';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Card} from 'native-base';
export default class Product extends Component {
    render() {
        return (
        <View>
           <View style={{margin:5}}>
            <Text style={{color:"grey"}}>SELECT COLOR</Text>
           </View>
       <View style={{flexDirection:"row",justifyContent:"space-evenly"}}> 
          <Card style={{backgroundColor:"#F117C6",justifyContent:"center",
                        borderRadius:30,height:45,width:45,alignItems:"center",}}>
              <Icon
                style={{}}
                size={20}
                name='check'
                color="white"
                 />
               </Card>
               <Card style={{backgroundColor:"orange",justifyContent:"center",
                        borderRadius:30,height:45,width:45,alignItems:"center",}}>
                </Card>  
                 <Card style={{backgroundColor:"blue",justifyContent:"center",
                        borderRadius:30,height:45,width:45,alignItems:"center",}}>
                </Card>  
                 <Card style={{backgroundColor:"white",justifyContent:"center",
                        borderRadius:30,height:45,width:45,alignItems:"center",}}>
                </Card>  
                 <Card style={{backgroundColor:"grey",justifyContent:"center",
                        borderRadius:30,height:45,width:45,alignItems:"center",}}>
                </Card>  
                 <Card style={{backgroundColor:"black",justifyContent:"center",
                        borderRadius:30,height:45,width:45,alignItems:"center",}}>
                </Card>  
          </View> 
           <View style={{margin:5}}>
            <Text style={{color:"grey"}}>SELECT SIZE</Text>
           </View>

           <View style={{margin:5,flexDirection:"row",justifyContent:"space-evenly"}}>
            <Text style={{color:"grey",fontSize:19}}>4.5</Text>
            <Text style={{color:"red",fontSize:19}}>5.0</Text>
            <Text style={{color:"grey",fontSize:19}}>6.5</Text>
            <Text style={{color:"grey",fontSize:19}}>7.0</Text>
           </View>

            </View>
        );
    }
}