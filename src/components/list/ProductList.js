import React, {Component} from 'react';
import { StyleSheet, FlatList,Text ,View} from "react-native";
import MessageListItem from "../listItem/MessageListItem";
import {  SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import ProductListItem from '../listItem/ProductListItem';
import FilterComponents from '../../screens/product/FilterComponents';
export default class ProductList extends Component {
     constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: this.props.productLists,
      error: null,
    };

    this.arrayholder = this.props.productLists;
  }

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });
 const newData = this.arrayholder.filter(item => {
      const itemData = `${item.ProductName.toUpperCase()} `;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
    console.log("VALUEPENDING"+this.state.value)
  };

  handleFilterPress=()=>{
   this.props.filterClick() 
  }

  renderHeader = () => {
    return (

  <View style={{flexDirection:"row",width:"100%",marginTop:20}}>
   <View style={{width:"10%",alignItems:"center",justifyContent:"center"}}>
 <Icon name="chevron-left"
           size={33}  
           style={styles.imageIconStyle}/>
   </View>
   <View style={{width:"80%",}}>
 <SearchBar
          inputStyle={{backgroundColor: '#ededed',fontSize:12}}
        inputContainerStyle={{backgroundColor:'#ededed',height:35}}
        containerStyle={{backgroundColor:"white",}}
        placeholder="Type Here.."
        lightTheme
        round
        backgroundColor="white"
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />



   </View>
     {/* <View style={styles.FirstLetterContainer}>
                             <Text style={styles.FirstLetterText}>{this.props.Name.charAt(0).toUpperCase()}</Text>
                            </View> */}
                            <View style={{width:"10%",alignItems:"center",justifyContent:"center"}}>
{/* <Icon name="filter"
           size={25}  
        //    style={styles.imageIconStyle}
        onPress={this.handleFilterPress}
        /> */}

           <FilterComponents/>                  
                            </View>

</View>


        
  
    );
  };
  render() {
    return (
    <View style={{alignItems:"center",justifyContent:"center"}}>
                <FlatList
                    style={styles.listContainer}
                    data={this.state.data}
                     renderItem={(info) => (
              
                <ProductListItem  
                id={info.item.Id}
                image={info.item.Image}
                productName={info.item.ProductName}
                price={info.item.Price} 
                //  OnItemPress={()=>this.props.itemClick()} 
                   OnItemPress={()=>this.props.onItemClick(info.item)}
                />
            )} 
                     ListHeaderComponent={this.renderHeader}
                    // keyExtractor={item => item.Id.toString() }
                numColumns={2} 
              showsVerticalScrollIndicator={false} 

                 
                />
          </View>  
    );
  }
}
const styles = StyleSheet.create({
  listContainer: {
    width: "95%",
    marginBottom:20
    
  },
      imageIconStyle:{
        color:"red",
        justifyContent:"center",
        alignItems:"center"
    },
});
