import BottomNavigation, {FullTab} from 'react-native-material-bottom-navigation'
import React,{Component} from 'react'; 
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';


export default class BottomNav extends Component {
state={
 tabs : [
    {
      key: 'Home',
      icon: 'home',
      label: 'Home',
    },
    {
      key: 'Search',
      icon: 'search',
      label: 'Search',
    },
    {
      key: 'Cart',
      icon: 'shopping-cart',
      label: 'Cart',
    },
    {
      key: 'Profile',
      icon: 'user',
      label: 'Profile',
    },
    {
      key: 'More',
      icon: 'menu',
      label: 'More',
    },
  ],
}
 
 
  renderIcon = icon => ({ isActive }) => (
    <Icon size={23} color={isActive ? 'red' : '#5B5C5D' } name={icon}/>
  )
 
  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
      labelStyle={{color: isActive ? 'red' : '#5B5C5D' }}   
    />
  )
 
newTab=(val)=>{
  if(val.key=="Cart"){
    Actions.cart();
  }
   else if(val.key=="Home"){
   Actions.dashboard();
 }
 else if(val.key=="Search"){
   Actions.search();
 }
  else if(val.key=="Profile"){
   Actions.profile();
 }
  else {
   Actions.more();
  }
}
 
  render() {
   
    return (
      <View style={{width:"100%"}}>
      
        <BottomNavigation
          onTabPress={this.newTab}
          renderTab={this.renderTab}
          tabs={this.state.tabs}
        />
      </View>

    )
  }
}