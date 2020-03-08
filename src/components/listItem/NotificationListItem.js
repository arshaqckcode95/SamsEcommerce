import React ,{Component} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import {Card} from 'native-base';
import { Rating, AirbnbRating } from 'react-native-elements';
import NewOrder from '../../assets/images/order_icon.png';
import Destination from '../../assets/images/destination_icon.png';
import Payment from '../../assets/images/payment_icon.png';
import Collected from '../../assets/images/collected_icon.png';
import Moment from 'moment';

export default class NotificationListItem extends Component{
  onItemClick=()=>{
    // this.props.OnItemPress()

  }
  convertTime = (leaveVal) =>{
    return  Moment(leaveVal).format('LT'); 
        console.log("Time", mo)
    }
    render()
    {
        const time = this.convertTime(this.props.date)
        const datee= Moment(new Date()).format('YYYY-MM-DD');
        const nextDay= Moment(new Date()).add(1, 'day').format('YYYY-MM-DD');
        const yesterDay =Moment(new Date()).subtract(1, 'day').format('YYYY-MM-DD');
        const MonthAndDay= Moment(new Date(this.props.date)).format('DD MMM');
        const today=Moment(new Date(this.props.date)).format('YYYY-MM-DD');
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
        let textContent=null;
        let imageContent=null;

        if(this.props.isRead)
        {
            textContent =(
                 <View>
                      <Text style={styles.readTitle}>{this.props.title}</Text>  
                       <Text style={{fontSize:14,marginTop:5}}>{this.props.content}</Text>  
                    </View>
            );
            
           
        }else{
                textContent =(
                    <View>
                      <Text style={styles.unreadTitle}>{this.props.title}</Text>  
                       <Text style={{fontSize:14,marginTop:5,color:'black'}}>{this.props.content}</Text>  
                    </View>
            );
        }
        

        if(this.props.type==1)
        {
            imageContent =(
                 <Image source={NewOrder} style={{width:80,height:80}}/>
            );
            

        }
      else  if(this.props.type==2)
        {
            imageContent =(
                 <Image source={Destination} style={{width:80,height:80}}/>
            );

        }
        else  if(this.props.type==3)
        {
            imageContent =(
                 <Image source={Payment} style={{width:80,height:80}}/>
            );
           
        }
        else  if(this.props.type==4)
        {
             imageContent =(
                 <Image source={Collected} style={{width:80,height:80}}/>
            );
           

        }
      
       var bgColorValue='#eff2f4';
            if(this.props.isRead)
            {
                bgColorValue='#ffffff'

            }
        
      
        
        return(

            <TouchableOpacity onPress={this.onItemClick}>
                <View style={{backgroundColor:bgColorValue}}>
                    <View>
                        <View style={{flexDirection:"row",width:"100%"}}>
                            <View style={{width:"20%"}}>
                               {imageContent}
                            </View>
                            <View style={{width:"60%",paddingLeft:10,paddingTop:10}}>
                                {textContent}
                            </View>
                            <View style={{width:"20%",paddingTop:10}}>
                                <Text>{modalDate}</Text>
                            </View>

                        </View>
                        <View style={{borderColor:"#D3D3D3",borderWidth:.5,marginLeft:"22%",marginRight:15,marginTop:15}}/>
                    </View>
                </View>
            </TouchableOpacity>


          
           

        );
    }
}
const styles=StyleSheet.create({
   
    textHeading:{
      fontWeight:"bold",
      fontSize:15,
      color:"black",
    justifyContent:"center",
    paddingLeft:10
  
    },
    unreadTitle:{
        fontSize:15,
        fontWeight:'bold',
        color:'black'
    },
    readTitle:{
         fontSize:15,
        fontWeight:'bold',
    },
    unreadContent:{
        fontSize:14,
        marginTop:5,
        color:'black'
    },
    readContent:{
        fontSize:14,
        marginTop:5,
    },
    unreadDate:{
        fontSize:14,
        marginTop:5,
        color:'black'
    },
    readDate:{
       fontSize:14,
        marginTop:5, 
    }
  })