import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity} from 'react-native';
import { Card, CardItem,Button} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import FloatingLabel  from 'react-native-floating-labels';
import AllButton from '../components/buttonComponent/AllButton';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component{

//   onBlur() {
//     console.log('#####: onBlur');
//   }
  render(){

    return(
      <View style={{flex:1,backgroundColor:"white"}}>
         
          <View style={styles.mainContainer}>
             <Text style={styles.Signup}>Sign Up</Text>
          </View>
     <View style={styles.cardView}>
          <Card style={styles.mainCard}>
            <CardItem>
              <View  style={styles.cardItemViewStyle}>

                 <View style={styles.inputViewStyle}>
                  <Icon
                    style={{marginTop:15,color:"#808080",width:"10%"}}
                    size={25}
                    name='smartphone'
                   />

                   <FloatingLabel 
                      style={styles.inputStyle}
                      labelStyle={styles.labelInput}
                       inputStyle={styles.input}
                    //    onBlur={this.onBlur}
                      > MOBILE</FloatingLabel>
                     </View>  
                  <View style={styles.inputViewStyle2}>
                     <Icon
                        style={{marginTop:15,color:"#808080",width:"10%",}}
                         size={25}
                         name='mail'
                       />  
                      <FloatingLabel 
                         style={styles.inputStyle}
                         labelStyle={styles.labelInput}
                         inputStyle={styles.input}
                        //  onBlur={this.onBlur}
                       >EMAIL</FloatingLabel>
                    </View>

                    
                 <View style={styles.inputViewStyle}>
                  <Icon
                    style={{marginTop:15,color:"#808080",width:"10%"}}
                    size={25}
                    name='user'
                   />

                   <FloatingLabel 
                      style={styles.inputStyle}
                      labelStyle={styles.labelInput}
                       inputStyle={styles.input}
                    //    onBlur={this.onBlur}
                      >USERNAME</FloatingLabel>
                     </View>  
                  <View style={styles.inputViewStyle2}>
                     <Icon
                        style={{marginTop:15,color:"#808080",width:"10%",}}
                         size={25}
                         name='lock'
                       />  
                      <FloatingLabel 
                        style={styles.inputStyle}
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        // onBlur={this.onBlur}
                       >PASSWORD</FloatingLabel>
                    </View>

                </View> 
            </CardItem>
     </Card>
     </View>

    {/* <AllButton/> */}

<View style={{alignItems:"center"}}>
     <View style={{width:"87%"}}>
         <Button rounded danger onPress={()=>Actions.forgotpassword()}
            style={{width:"100%",height:51,backgroundColor:"red"}}>
              <View style={{width:"20%"}}>

              </View>
             <View style={{width:"60%",alignItems:"center"}}>
             <Text style={{fontSize:15,fontWeight:"700",color:"white"}}>SIGN UP</Text>
             </View>
             <View style={{width:"20%",alignItems:"flex-end",marginRight:14}}>

             <View style={{backgroundColor:"white",justifyContent:"center",
                    borderRadius:30,height:35,width:35,alignItems:"center",}}>
                <Icon
                   style={{}}
                   size={15}
                    name='chevron-right'
                    color="red"
                 />
              </View>
                    </View>
         </Button>
     </View>
     </View>


     <View style={{alignItems:"center",margin:25}}>
       <Text style={{fontSize:16}}>By creating an account you agree to our </Text>
       <Text style={{fontSize:16,color:"red"}}>Terms of Service <Text style={{fontSize:16,color:"black"}}>and </Text>
        Privacy Policy</Text>
     </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    Signup: {
      color:"#575656",
      fontSize:32,
      fontWeight:"bold",
      margin:10
    },
    mainContainer:{
      marginTop:30,
    },
    mainCard:{
       alignItems:"center",
        height:280,
        width:"87%",
        borderTopEndRadius:10,
        borderTopLeftRadius:10,
        borderBottomEndRadius:10,
        borderBottomLeftRadius:10
    },
    cardItemViewStyle:{
        flexDirection:"column",
        alignItems:"flex-start",
        width:"90%",
        marginTop:-10
    },
    cardView:{
        alignContent:"center", 
        margin:20,
        width:"100%"
       
    },
    inputViewStyle:{
        
        flexDirection:"row",
        alignItems:"center"
    }, 
    inputViewStyle2:{
       justifyContent:"flex-start",
        flexDirection:"row",
        alignItems:"center",
    },
    inputStyle:{
        borderBottomWidth:1,
        borderColor:"#C2BEBE",
        width:"90%",
        
    },
    labelInput: {
      fontSize:15
    },
    input: {
      borderWidth: 0,
      height:43
    }
  });