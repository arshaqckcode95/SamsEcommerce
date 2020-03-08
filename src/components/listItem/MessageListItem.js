import React,{ Component} from "react";
import {Text, View ,StyleSheet,Image,TouchableOpacity,ImageBackground} from "react-native";
import { Right,Button} from 'native-base';
// import  { colors } from '../../styles/AppStyle';
import Moment from 'moment';
export default class MessageListItem extends Component {
    onItemClick = () =>{
        this.props.onClick()
    }
     convertTime = (leaveVal) =>{
    return  Moment(leaveVal).format('LT'); 
        console.log("Time", mo)
    }
  render() {
      var name=this.props.Name;

       const time = this.convertTime(this.props.PickupDate)
        const datee= Moment(new Date()).format('YYYY-MM-DD');
        const nextDay= Moment(new Date()).add(1, 'day').format('YYYY-MM-DD');
        const yesterDay =Moment(new Date()).subtract(1, 'day').format('YYYY-MM-DD');
        const MonthAndDay= Moment(new Date(this.props.PickupDate)).format('DD MMM');
        const today=Moment(new Date(this.props.PickupDate)).format('YYYY-MM-DD');
        let modalDate=null
        let tommorow=null
      
        if(datee==today)
        {
            if(this.props.isRead)
            {
                 modalDate=(
                    <Text style={styles.readDate}>{time}</Text>  
                );
            }else{
                modalDate=(
                    <Text style={styles.unreadDate}>{time}</Text>  
                );
            }
            
         
        }
        else if(yesterDay==today)
        {
            if(this.props.isRead)
            {
                 modalDate=(
                    <Text style={styles.readDate}>Yesterday</Text>  
                );
            }else{
                modalDate=(
                    <Text style={styles.unreadDate}>Yesterday</Text>  
                );
            }
            
        }
        else{
            if(this.props.isRead)
            {
                 modalDate=(
                    <Text style={styles.readDate}>{MonthAndDay}</Text>  
                );
            }else{
                modalDate=(
                    <Text style={styles.unreadDate}>{MonthAndDay}</Text>  
                );
            }
           

        }
    return (
                    <TouchableOpacity   onPress={this.onItemClick} >
                    <View style={{ paddingLeft:15,paddingRight:15}}>
                        <View style={styles.itemContainer}>
                            <View style={styles.FirstLetterContainer}>
                             <Text style={styles.FirstLetterText}>{this.props.Name.charAt(0).toUpperCase()}</Text>
                            </View>
                            <View style={{marginLeft:10,marginTop:5,marginBottom:5}}>
                            <Text style={styles.NameText}>{this.props.Name}</Text>
                            <Text style={styles.CateogoryText}>Order number: {this.props.orderNumber}</Text>   
                                <Text style={styles.CateogoryText}>{this.props.ServiceCategory}</Text>
                                 
                            </View>
                          
                             <Right>
                              {/* <Text style={styles.DateText}>{this.props.PickupDate}</Text> */}
                              
                                {modalDate}   
                        </Right>
            
                        </View>
                        <View style={styles.RuleStyle}></View>
                    </View>
                        
                        </TouchableOpacity>
             );
    }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#ffffff',
    marginRight:5
   
  },
  FirstLetterText:{
      fontSize:20,
      color:'white',
      fontWeight:'bold'
  },
  FirstLetterContainer:{
      width:40,
      height:40,
      borderRadius:30,
      margin:10,
       alignItems:'center',
       justifyContent:'center',
      backgroundColor:'#87CEEB'
  },
  
  NameText:{
      fontSize:15,
      color:'#0E5486',
      
  },
   CateogoryText:{
      fontSize:13,
      color:'#808080',
      marginTop:5
      
  },
   DateText:{
      fontSize:12,
      color:'#0E5486',
      
  },
   ButtonBackground:{
      
      backgroundColor:'#0E5486',
      height:35,
      marginTop:5,
      width:100,
      justifyContent: 'center'
      
  },
  RuleStyle:{
    borderBottomColor: '#B6B6B4',
    borderBottomWidth: .5,
  }
});