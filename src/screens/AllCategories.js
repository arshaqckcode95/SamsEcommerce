import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import FloatingLabel  from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';




export default class AllCategories extends Component{


  render(){

    return(
      <View style={{flex:1,backgroundColor:"white"}}>       
        <View style={{height:80,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
        <TouchableOpacity>
            <Icon onPress={()=>Actions.dashboard()} name="x" size={23}  style={{color:"red",marginRight:15}}/>
            </TouchableOpacity>
        </View>
          <View style={styles.mainContainer}>
             <Text style={styles.Allcategories}>All Categories</Text>
          </View>

 <ScrollView>
<View style={{width:"100%"}}>


<View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:-15,width:"97%"}}>

     <View>   
      <View style={styles.mainCategoryStyle} >
         <View style={styles.imageViewStyle}>
             <View style={styles.CardStyle}>
                  <View style={{alignItems:"center"}}>
                    <Image 
                      source={require('../assets/images/destination_icon.png')}  
                      style={styles.imageStyle} 
                      resizeMode="stretch"/>
                    </View>
                  </View> 
                  <Text style={styles.categoryTextStyle}>GOLD</Text>
                <View style={styles.CardStyle}>
                  <View>
                    <Image 
                      source={require('../assets/images/collected_icon.png')}  
                      style={styles.imageStyle} 
                      resizeMode="stretch"/>
                    </View>
                  </View> 
                   <Text style={styles.categoryTextStyle}>SILVER</Text>
                <View style={styles.CardStyle}>
                  <View>
                    <Image 
                      source={require('../assets/images/order_icon.png')}  
                      style={styles.imageStyle} 
                      resizeMode="stretch"/>
                    </View>
                  </View> 
                   <Text style={styles.categoryTextStyle}>DIAMOND</Text>
                <View style={styles.CardStyle}>
                  <View>
                    <Image 
                      source={require('../assets/images/payment_icon.png')}  
                      style={styles.imageStyle} 
                      resizeMode="stretch"/>
                    </View>
                  </View> 
                   <Text style={styles.categoryTextStyle}>GEMSTONE</Text>
                <View style={styles.CardStyle}>
                  <View>
                    <Image 
                      source={require('../assets/images/collected_icon.png')}  
                      style={styles.imageStyle} 
                      resizeMode="stretch"/>
                    </View>
                  </View> 
                  <Text style={styles.categoryTextStyle}>RUBY</Text>
               <View style={styles.CardStyle}>
                  <View>
                    <Image 
                      source={require('../assets/images/order_icon.png')}  
                      style={styles.imageStyle} 
                      resizeMode="stretch"/>
                    </View>
                  </View> 
                   <Text style={styles.categoryTextStyle}>HOME</Text>
                <View style={styles.CardStyle}>
                  <View>
                    <Image 
                      source={require('../assets/images/payment_icon.png')}  
                      style={styles.imageStyle} 
                      resizeMode="stretch"/>
                    </View>
                  </View> 
                  <Text style={styles.categoryTextStyle}>NAVARATNA</Text>
            </View>
         </View>     
      </View>


   <View>
     <View style={styles.mainCategoryStyle2} >
            <View>
               <View><Text style={{color:"grey"}}>MENS APPAREL</Text></View>
               <Card style={styles.detailsCard}>
                  <View style={{margin:10,marginTop:-12}}>
                    <View style={{flexDirection:"column",justifyContent:"space-between",}}>
                     <View style={styles.mensApparelStyle}>
                       <View>
                        <Text  style={styles.menClothStyle}>T-shirts</Text>
                         </View>
                        <View style={styles.apparelTextStyle}>
                          <Icon size={10} name='chevron-right' color="black"/>
                        </View>
                      </View>

                      <View style={styles.mensApparelStyle}>
                        <View>
                      <Text  style={styles.menClothStyle}>shirts</Text>
                      </View>
                      <View style={styles.apparelTextStyle}>
                      <Icon size={10} name='chevron-right' color="black"/>
                      </View>
                      </View>

                      <View style={styles.mensApparelStyle}>
                        <View>
                      <Text  style={styles.menClothStyle}>Pants & jeans</Text>
                      </View>
                      <View style={styles.apparelTextStyle}>
                      <Icon size={10} name='chevron-right' color="black"/>
                      </View>
                      </View>

                      <View style={styles.mensApparelStyle}>
                        <View>
                      <Text  style={styles.menClothStyle}>Socks & Ties</Text>
                      </View>
                      <View style={styles.apparelTextStyle}>
                      <Icon size={10} name='chevron-right' color="black"/>
                      </View>
                      </View>

                      <View style={styles.mensApparelStyle}>
                        <View>
                      <Text  style={styles.menClothStyle}>Underwear</Text>
                      </View>
                      <View style={styles.apparelTextStyle}>
                      <Icon size={10} name='chevron-right' color="black"/>
                      </View>
                      </View>

                      <View style={styles.mensApparelStyle}>
                        <View>
                      <Text  style={styles.menClothStyle}>Jackets</Text>
                      </View>
                      <View style={styles.apparelTextStyle}>
                      <Icon size={10} name='chevron-right' color="black"/>
                      </View>
                      </View>

                      <View style={styles.mensApparelStyle}>
                        <View>
                      <Text  style={styles.menClothStyle}>Coats</Text>
                      </View>
                      <View style={styles.apparelTextStyle}>
                      <Icon size={10} name='chevron-right' color="black"/>
                      </View>
                      </View>

                      <View style={styles.mensApparelStyle}>
                        <View>
                      <Text  style={styles.menClothStyle}>Sweaters</Text>
                      </View>
                      <View style={styles.apparelTextStyle}>
                      <Icon size={10} name='chevron-right' color="black"/>
                         </View>
                        </View>
                      </View>
                      </View>
                    </Card>
                 </View>
        <View style={{marginTop:10}}>
           <View><Text style={{color:"grey"}}>WOMENS APPAREL</Text></View>
             <Card style={styles.detailsCard}>
               <View style={{margin:10,marginTop:-12}}>
                <View style={{flexDirection:"column",justifyContent:"space-evenly",}}>
                    <View style={styles.mensApparelStyle}>
                      <View>
                      <Text  style={styles.menClothStyle}>Officewear</Text>
                      </View>
                      <View style={styles.apparelTextStyle}>
                       <Icon size={10} name='chevron-right' color="black"/>
                       </View>
                       </View>

                     <View  style={styles.mensApparelStyle}>   
                     <View>
                      <Text  style={styles.menClothStyle}>Blouse & T-shirts</Text>
                      </View>
                      <View style={styles.apparelTextStyle}>
                      <Icon size={10} name='chevron-right' color="black"/>
                      </View>
                      </View>

                      <View  style={styles.mensApparelStyle}>
                        <View>
                      <Text  style={styles.menClothStyle}>Pants & jeans</Text>
                      </View>
                      <View style={styles.apparelTextStyle}>
                      <Icon size={10} name='chevron-right' color="black"/>
                      </View>
                      </View>

                      <View  style={styles.mensApparelStyle}>
                        <View>
                      <Text  style={styles.menClothStyle}>Dresses</Text>
                      </View>
                      <View style={styles.apparelTextStyle}>
                      <Icon size={10} name='chevron-right' color="black"/>
                      </View>
                      </View>

                      <View  style={styles.mensApparelStyle}>
                        <View>
                      <Text  style={styles.menClothStyle}>Lingerie</Text>
                      </View>
                      <View style={styles.apparelTextStyle}>
                      <Icon size={10} name='chevron-right' color="black"/>
                      </View>
                      </View>

                      <View  style={styles.mensApparelStyle}>
                        <View>
                      <Text  style={styles.menClothStyle}>Jackets</Text>
                      </View>
                      <View style={styles.apparelTextStyle}>
                      <Icon size={10} name='chevron-right' color="black"/>
                      </View>
                      </View>

                      <View  style={styles.mensApparelStyle}>
                        <View>
                      <Text  style={styles.menClothStyle}>Coats</Text>
                      </View>
                      <View style={styles.apparelTextStyle}>
                      <Icon size={10} name='chevron-right' color="black"/>
                      </View>
                      </View>

                      <View  style={styles.mensApparelStyle}>
                        <View>
                      <Text  style={styles.menClothStyle}>Sweaters</Text>
                      </View>
                      <View style={styles.apparelTextStyle}>
                      <Icon size={10} name='chevron-right' color="black"/>
                      </View>
                      </View>
                       </View>
                     </View>
                 </Card>
              </View>
            </View> 
           </View>

   </View>
</View>
</ScrollView>     
   
    
 </View>
    )
  }
}

const styles = StyleSheet.create({
    Allcategories: {
      color:"#575656",
      fontSize:30,
      fontWeight:"bold",
      margin:10,
      marginTop:-20
    },
    CardStyle:{
       alignItems:"center",
        marginTop:20
    },
    imageViewStyle:{
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    imageStyle:{
         width:100,
         height:100
    },
    mainCategoryStyle:{
       flexDirection:"column",
       justifyContent:"space-evenly",
       marginRight:0
    },
    mainCategoryStyle2:{
        flexDirection:"column",
        justifyContent:"space-evenly",
        marginTop:22,
        marginRight:0
     },
    detailsCard:{
       width:250,
       height:380,
       borderTopEndRadius:20,
       borderTopLeftRadius:20,
       borderBottomEndRadius:20,
       borderBottomLeftRadius:20,
       justifyContent:"center"
    },
    menClothStyle:{
        fontSize:14,
        color:"black",
        marginTop:27
    },
    mensApparelStyle:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"flex-end"
    },
    apparelTextStyle:{
      height:20,
      width:20,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#CFCFCF",
      borderTopEndRadius:20,
      borderTopLeftRadius:20,
      borderBottomEndRadius:20,
      borderBottomLeftRadius:20,
    },
    categoryTextStyle:{
      marginTop:-20,
      color:"grey"
    }
  });