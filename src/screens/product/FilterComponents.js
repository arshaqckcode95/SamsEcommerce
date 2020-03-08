import React,{Component} from 'react';
import {ScrollView,Dimensions,View,Text,StyleSheet,AsyncStorage,Image,TouchableOpacity,Modal,TouchableWithoutFeedback,NetInfo} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

// import {Card} from 'react-native-elements';
import { Left ,Card,Radio,Right,Button} from 'native-base';
import { Actions } from 'react-native-router-flux';
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
export default class FilterComponent extends  Component{
    state = {
        modalVisible: false,
        isDistance:false,
        isPopularity:false,
        isFeatured:false,
        latitude:'',
        longitude:'',
        customerId:'',
        filterUrl:'ServiceProviderFilter',
        filterOption:'',
        filterResponse:'',
        serviceProviderList:'',
        isLoading:false,LabPress:true
      };
    

    
    
    setModalVisible=(visible)=> {
        this.setState({modalVisible: visible},function(){
        //   this.props.closeModal(this.state.modalVisible);
        });
        // Toast.show('We Will Update soon !', Toast.LONG);

      }

     
     
     
     

    
  

    render(){

        if(!this.state.modalVisible)
       return (  
    
      
        //   <View style={{width:"20%",}}>
        <TouchableOpacity  onPress={() => {
        this.setModalVisible(!this.state.modalVisible);
        // this.setModalVisible();
       
      }}>
        {/* <Text>Hai</Text> */}
        <Icon name="filter"
           size={25}  
           style={styles.imageIconStyle}
        // onPress={this.handleFilterPress}
        />

        </TouchableOpacity>
        // </View>
        
        
        )
     
      
        return(
            <View  >
            
           
       
        <TouchableOpacity  onPress={() => {
        this.setModalVisible(!this.state.modalVisible);
       
       
      }}>
      <Icon name="filter"
           size={25}  
           style={styles.imageIconStyle}
        // onPress={this.handleFilterPress}
        />

        </TouchableOpacity>
       
      
       
       
           <Modal
          animationType="none"
          transparent={true}
          visible={this.state.modalVisible}
          shouldCloseOnOverlayClick={true} 
          marginRight={30}
          onRequestClose={() => {
           this.setModalVisible(false)
            
          }}>

           <TouchableOpacity
           style={{
          flex: 1,
           flexDirection: 'row',
           justifyContent: 'flex-end',
         alignItems:"center",
      //  marginTop:150
     
        }}
        activeOpacity={1}
        onPressOut={()=>{this.setModalVisible(false)}}
        
        
        >
     
        <Card style={{width:(deviceWidth/3)*2,marginTop:80,justifyContent:"space-between"}}>
        <ScrollView>
        <View style={{flexDirection:"row",width:"100%",marginTop:20}}>
        <View style={{width:"50%",marginLeft:10}}>
    <Text>REFINE RESULT</Text>
        </View>
 <View style={{width:"45%",alignItems:"flex-end"}}>
      <Text style={{color:"red",paddingLeft:20}}>CLEAR</Text>
      </View>
          </View>
           <View style={{flexDirection:"row",width:"100%",marginTop:20}}>
        <View style={{width:"40%",marginLeft:10}}>
    <Text>View</Text>
        </View>
 <View style={{width:"40%",alignItems:"flex-end"}}>
      <Text style={{color:"grey",paddingLeft:20}}>Thumbnails</Text>
     
      </View>
      <View style={{width:"10%",alignItems:"flex-end"}}>
       <View style={styles.apparelTextStyle}>
        <Icon size={10} name='chevron-right' color="black"/>
        </View>
      </View>
          </View>
           <View style={{flexDirection:"row",width:"100%",marginTop:20}}>
        <View style={{width:"40%",marginLeft:10}}>
    <Text>Category</Text>
        </View>
 <View style={{width:"40%",alignItems:"flex-end"}}>
      <Text style={{color:"grey",paddingLeft:20}}>Men's Apparel</Text>
     
      </View>
      <View style={{width:"10%",alignItems:"flex-end"}}>
       <View style={styles.apparelTextStyle}>
        <Icon size={10} name='chevron-right' color="black"/>
        </View>
      </View>
          </View>

            <View style={{flexDirection:"row",width:"100%",marginTop:20}}>
        <View style={{width:"40%",marginLeft:10}}>
    <Text>Condition</Text>
        </View>
 <View style={{width:"40%",alignItems:"flex-end"}}>
      <Text style={{color:"grey",paddingLeft:20}}>Brand New</Text>
     
      </View>
      <View style={{width:"10%",alignItems:"flex-end"}}>
       <View style={styles.apparelTextStyle}>
        <Icon size={10} name='chevron-right' color="black"/>
        </View>
      </View>
          </View>

            <View style={{flexDirection:"row",width:"100%",marginTop:20}}>
        <View style={{width:"40%",marginLeft:10}}>
    <Text>Material</Text>
        </View>
 <View style={{width:"40%",alignItems:"flex-end"}}>
      <Text style={{color:"grey",paddingLeft:20}}>Cotton</Text>
     
      </View>
      <View style={{width:"10%",alignItems:"flex-end"}}>
       <View style={styles.apparelTextStyle}>
        <Icon size={10} name='chevron-right' color="black"/>
        </View>
      </View>
          </View>

            <View style={{flexDirection:"row",width:"100%",marginTop:20}}>
        <View style={{width:"40%",marginLeft:10}}>
    <Text>Colour</Text>
        </View>
 <View style={{width:"40%",alignItems:"flex-end"}}>
      <Text style={{color:"grey",paddingLeft:20}}>Colour</Text>
     
      </View>
      <View style={{width:"10%",alignItems:"flex-end"}}>
       <View style={styles.apparelTextStyle}>
        <Icon size={10} name='chevron-right' color="black"/>
        </View>
      </View>
          </View>

          
            <View style={{flexDirection:"row",width:"100%",marginTop:20}}>
        <View style={{width:"40%",marginLeft:10}}>
    <Text>Brand</Text>
        </View>
 <View style={{width:"40%",alignItems:"flex-end"}}>
      <Text style={{color:"grey",paddingLeft:20}}>All Brands</Text>
     
      </View>
      <View style={{width:"10%",alignItems:"flex-end"}}>
       <View style={styles.apparelTextStyle}>
        <Icon size={10} name='chevron-right' color="black"/>
        </View>
      </View>
          </View>

          
            <View style={{flexDirection:"row",width:"100%",marginTop:20}}>
        <View style={{width:"40%",marginLeft:10}}>
    <Text>Size</Text>
        </View>
 <View style={{width:"40%",alignItems:"flex-end"}}>
      <Text style={{color:"grey",paddingLeft:20}}>Large</Text>
     
      </View>
      <View style={{width:"10%",alignItems:"flex-end"}}>
       <View style={styles.apparelTextStyle}>
        <Icon size={10} name='chevron-right' color="black"/>
        </View>
      </View>
          </View>
          
            <View style={{flexDirection:"row",width:"100%",marginTop:20}}>
        <View style={{width:"40%",marginLeft:10}}>
    <Text>Price Range</Text>
        </View>
 <View style={{width:"40%",alignItems:"flex-end"}}>
      <Text style={{color:"grey",paddingLeft:20}}>$0-$30</Text>
     
      </View>
      <View style={{width:"10%",alignItems:"flex-end"}}>
       <View style={styles.apparelTextStyle}>
        <Icon size={10} name='chevron-right' color="black"/>
        </View>
      </View>
          </View>

          <View style={{alignItems:"center",marginTop:30}}>
     <View style={{width:"87%"}}>
         <Button rounded danger onPress={()=>Actions.dashboard()}
            style={{width:"100%",height:51,backgroundColor:"red"}}>
              <View style={{width:"20%"}}>

              </View>
             <View style={{width:"60%",alignItems:"center"}}>
             <Text style={{fontSize:15,fontWeight:"700",color:"white"}}>APPLY FILTERS</Text>
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

        </ScrollView>

        </Card>
 </TouchableOpacity>
         
          </Modal> 

    

                 </View>


            
        );
    }

}
const styles = StyleSheet.create({
    image: {
        height: 40,
        width: 40,
        alignSelf: 'flex-end',
      },
       imageIconStyle:{
        color:"red",
        justifyContent:"center",
        alignItems:"center"
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
    
})


