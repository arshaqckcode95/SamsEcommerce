import React, {Component} from 'react';
import { StyleSheet, FlatList,Text ,View} from "react-native";
import MessageListItem from "../listItem/MessageListItem";
import {  SearchBar } from 'react-native-elements';
export default class MessageList extends Component {
     constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: this.props.messageList,
      error: null,
    };

    this.arrayholder = this.props.messageList;
  }

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });
 const newData = this.arrayholder.filter(item => {
      const itemData = `${item.CustomerName.toUpperCase()} ${item.TestCategory.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
    console.log("VALUEPENDING"+this.state.value)
  };

  renderHeader = () => {
    return (
         <SearchBar
          inputStyle={{backgroundColor: 'white',fontSize:12}}
        inputContainerStyle={{backgroundColor:'white',height:40}}
        placeholder="Type Here.."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };
  render() {
    return (
      <View >
                <FlatList
                    style={styles.listContainer}
                    data={this.state.data}
                    renderItem={(info) => (
                        <MessageListItem
                        orderNumber=     {info.item.OrderNumber}  
                        Name={info.item.CustomerName}
                        ServiceCategory={info.item.TestCategory}
                        PickupDate={info.item.PickupDate}
                        isRead={info.item.IsRead}
                        onClick={()=>this.props.onItemClick(info.item)}
                        />
                    )}
                     ListHeaderComponent={this.renderHeader}
                    // keyExtractor={item => item.Id.toString() }
                    
                />
            </View>
    );
  }
}
const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
