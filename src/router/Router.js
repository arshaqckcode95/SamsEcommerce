import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text} from 'react-native';
import Login from  '../screens/Login';
import {Router,Scene} from 'react-native-router-flux';
import SignUp from '../screens/SignUp'
import ForgotPassword from '../screens/ForgotPassword';
import Search from '../screens/Search';
import AllCategories from '../screens/AllCategories';
import Dashboard from '../screens/home/Dashboard';
import Message from '../screens/message/Message';
import Notification from '../screens/notifications/Notification';
import OrderConfirmation from '../screens/booking/OrderConfirmation';
import MessageDetails from '../screens/message/MessageDetails';
import Cart from '../screens/cart/Cart';
import Checkout from '../screens/booking/Checkout';
import More from '../screens/more/More';
import Profile from '../screens/profile/Profile';
import Product from '../screens/product/ProductListing';
import ProductDetails from '../screens/product/ProductDetails';

export default class App extends Component{

  render(){

    return(

      <Router>
        <Scene key="root">


           <Scene key="login" component={Login} initial={true} hideNavBar  />
           <Scene key="signup" component={SignUp} hideNavBar/>
           <Scene key="forgotpassword" component={ForgotPassword} hideNavBar/>
           <Scene key="dashboard" component={Dashboard} hideNavBar/>
           <Scene key="search" component={Search} hideNavBar/>
           <Scene key="allcategories" component={AllCategories} hideNavBar/>
             <Scene key="message" component={Message} hideNavBar/>
               <Scene key="notification" component={Notification} hideNavBar/>
                 <Scene key="messagedetails" component={MessageDetails} hideNavBar/>
                  <Scene key="orderconfirm" component={OrderConfirmation} hideNavBar/>
              <Scene key="cart" component={Cart} hideNavBar/> 
               <Scene key="more" component={More} hideNavBar/>        
              <Scene key="checkout" component={Checkout} hideNavBar/>    
            <Scene key="profile" component={Profile} hideNavBar/>  
            <Scene key="product" component={Product} hideNavBar/>         
          
            <Scene key="productdetails" component={ProductDetails} hideNavBar/>            
        </Scene>
      </Router>
    )
  }
}