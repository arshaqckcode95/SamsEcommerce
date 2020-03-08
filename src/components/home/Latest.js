import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image,ImageBackground} from 'react-native';
import { Card, CardItem, Button,  } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import FloatingLabel  from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import AllButton from '../buttonComponent/AllButton'
import LatestList from '../list/LatestList';


export default class Latest extends Component{

state={
   
LatestListItems:[{
  "Id":1,
   "Image":"https://img.freepik.com/free-photo/woman-green-dress-hat-yellow-background_1303-10554.jpg?size=626&ext=jpg",
},
{
  "Id":2,
  "Image":"https://www.intelligentcio.com/eu/wp-content/uploads/sites/20/2019/09/AdobeStock_264922838_1000px-600x344.jpg"
},
{
  "Id":3,
  "Image":"https://dunnes.btxmedia.com/pws/client/ds2/images/marketing/department/women/19/39/peter-o-brien.jpg"
}

]}

  render(){

    return(
 <View >
       <TouchableOpacity>
          <View >
            <Text style={styles.categories}>Latest</Text>
          </View>
        </TouchableOpacity>
      <LatestList 
        latestlistItem={this.state.LatestListItems}/>

  </View>
    )
  }
}


const styles = StyleSheet.create({
    categories: {
        color:"#575656",
        fontSize:32,
        fontWeight:"bold",
        margin:10,
    },
  });