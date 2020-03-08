import React, { Component } from 'react';
import { Container, Content, Tabs,Header,Tab } from 'native-base';
import {View,Text,ScrollView} from 'react-native';

import Product from '../productComponents/Product';
import Details from '../productComponents/Details';
import Review from '../productComponents/Review';

export default class ProductTabs extends Component {
    render() {
        return (
            


     <Container style={{}}>
       <Content  style={{width:"80%",margin:30,}}>

        <Tabs>
            <Tab 
               tabStyle={{backgroundColor:"white",}}
               textStyle={{color:"black"}} 
               activeTabStyle={{backgroundColor: 'white'}}
               activeTextStyle={{color:"red"}}
               heading="Product">
            <Product />
          </Tab>

          <Tab 
             tabStyle={{backgroundColor:"white",}}
             textStyle={{color:"black"}} 
             activeTabStyle={{backgroundColor: 'white'}}
             activeTextStyle={{color:"red"}}
             heading="Details">
            <Details />
          </Tab>

          <Tab 
               tabStyle={{backgroundColor:"white",}} 
               textStyle={{color:"black"}} 
               activeTabStyle={{backgroundColor: 'white'}}
               activeTextStyle={{color:"red"}}
               heading="Review">
            <Review />
          </Tab>

        </Tabs>
        </Content>
      </Container>
            
        )
    }
}