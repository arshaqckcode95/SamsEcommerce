import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,Text,TextInput,TouchableOpacity,Image,AsyncStorage} from 'react-native';
import { Card, CardItem, Button,  } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import FloatingLabel  from 'react-native-floating-labels';
import { Actions } from 'react-native-router-flux';
import Category from '../../components/home/Category';
import Latest from '../../components/home/Latest';
import CategoryProducts from '../../components/home/CategoryProducts';
import BottomNav from '../../components/bottomNavigation/BottomNav';
import LatestList from '../../components/list/LatestList';
import CategoryProductList from '../../components/list/CategoryProductList'
// import firebase from 'react-native-firebase';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Dashboard extends Component{
  state={
   
LatestListItems:[{
  "Id":1,
   "Image":"https://img.freepik.com/free-photo/woman-green-dress-hat-yellow-background_1303-10554.jpg?size=626&ext=jpg",
},
{
  "Id":2,
  "Image":"https://www.intelligentcio.com/eu/wp-content/uploads/sites/20/2019/09/AdobeStock_264922838_1000px-600x344.jpg"
},
{
  "Id":3,
  "Image":"https://dunnes.btxmedia.com/pws/client/ds2/images/marketing/department/women/19/39/peter-o-brien.jpg"
}

],
CategoryProductLists:[{
  "Id":1,
   "Image":"https://www.mcelhinneys.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/m/amy_huberman_sku_charade_can__1.jpg",
    "ProductName":"Ankle boot",
    "Price":400,
},
{
  "Id":2,
  "Image":"https://s7d4.scene7.com/is/image/JCPenney/DP0318201907021986M.tif?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2",
  "ProductName":"Nike Red shoe",
  "Price":1200,
},
{
  "Id":3,
  "Image":"http://www.lawntreatmentforum.co.uk/images/large/UK%20Sneakers/Unique-Style-Mens-Nike-Satire-Mid-Canvas-Casual-Shoes-BD67922-BlueWhiteBlack-85DL_LRG.jpg",
  "ProductName":"Nike sneakers",
  "Price":2000,
},
{
  "Id":4,
  "Image":"https://cdn1.uksoccershop.com/images/nike-mercurial-victory-fg-mens-football-boots-orange-white.jpg",
  "ProductName":"Nike boot",
 "Price":2500,
},
{
  "Id":5,
  "Image":"https://www.futbolemotion.com/imagesarticulos/102291/540/bota-nike-magista-obra-fg-acc-volt-hyper-punch-0.jpg",
  "ProductName":"Nike magista",
  "Price":3000,
}
]

}
ClickSeeMore=()=>{
  Actions.product()
}

selectedItem=(val)=>{
   Actions.productdetails({NewImage:val.Image,NewPrice:val.Price,NewName:val.ProductName,AllItems:val});
}

// push notification codes
// async componentDidMount() {
//     this.checkPermission();
//     this.createNotificationListeners(); //add this line
//   }

  // componentWillUnmount() {
  //   this.notificationListener;
  //   this.notificationOpenedListener;
  // }

  //1
  // async checkPermission() {
  //   const enabled = await firebase.messaging().hasPermission();
  //   if (enabled) {
  //     this.getToken();
  //   } else {
  //     this.requestPermission();
  //   }
  // }

  //3
  // async getToken() {
  //   let fcmToken = await AsyncStorage.getItem('fcmToken');
  //   if (!fcmToken) {
  //     fcmToken = await firebase.messaging().getToken();
  //     if (fcmToken) {
  //       // user has a device token
  //       console.log('fcmToken:', fcmToken);
  //       await AsyncStorage.setItem('fcmToken', fcmToken);
  //     }
  //   }
  //   console.log('fcmToken:', fcmToken);
  // }

  //2
  // async requestPermission() {
  //   try {
  //     await firebase.messaging().requestPermission();
  //     // User has authorised
  //     this.getToken();
  //   } catch (error) {
  //     // User has rejected permissions
  //     console.log('permission rejected');
  //   }
  // }

  // async createNotificationListeners() {
  //   /*
  //   * Triggered when a particular notification has been received in foreground
  //   * */
  //   this.notificationListener = firebase.notifications().onNotification((notification) => {
  //     const { title, body } = notification;
  //     console.log('onNotification:');
      
  //       const localNotification = new firebase.notifications.Notification({
  //         // sound: 'sampleaudio',
  //         show_in_foreground: true,
  //       })
  //       // .setSound('sampleaudio.wav')
  //       .setNotificationId(notification.notificationId)
  //       .setTitle(notification.title)
  //       .setBody(notification.body)
  //       .android.setChannelId('fcm_FirebaseNotifiction_default_channel') // e.g. the id you chose above
  //       // .android.setSmallIcon('@drawable/ic_launcher') // create this icon in Android Studio
  //       // .android.setColor('#000000') // you can set a color here
  //       .android.setPriority(firebase.notifications.Android.Priority.High);

  //       firebase.notifications()
  //         .displayNotification(localNotification)
  //         .catch(err => console.error(err));
  //   });

  //   const channel = new firebase.notifications.Android.Channel('fcm_FirebaseNotifiction_default_channel', 'Demo app name', firebase.notifications.Android.Importance.High)
  //     .setDescription('Demo app description')
  //     // .setSound('sampleaudio.wav');
  //   firebase.notifications().android.createChannel(channel);

  //   /*
  //   * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
  //   * */
  //   this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
  //     const { title, body } = notificationOpen.notification;
  //     console.log('onNotificationOpened:');
  //     // Alert.alert(title, body)
  //      Actions.notification();
  //   });

  //   /*
  //   * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
  //   * */
  //   const notificationOpen = await firebase.notifications().getInitialNotification();
  //   if (notificationOpen) {
  //     const { title, body } = notificationOpen.notification;
  //     console.log('getInitialNotification:');
  //     // Alert.alert(title, body)
  //   }
  //   /*
  //   * Triggered for data only payload in foreground
  //   * */
  //   this.messageListener = firebase.messaging().onMessage((message) => {
  //     //process data message
  //     console.log("JSON.stringify:", JSON.stringify(message));
  //   });
  // }

  render(){

    return(
     

     <View style={{flex:1,backgroundColor:"#FFFFFF",}}>
     <ScrollView>  
         <View style={{height:80,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
             <TouchableOpacity onPress={()=>Actions.message()}>
            <Icon name="message-circle" size={23}  style={{color:"#575656",marginRight:15}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Actions.notification()}>
            <Icon name="bell" size={23}  style={{color:"#575656",marginRight:15,}}/>
            </TouchableOpacity>
          </View>

          <Category/>

           {/* <Latest/> */}
           <View >
 <TouchableOpacity >
          <View >
            <Text style={styles.categories}>Latest</Text>
          </View>
        </TouchableOpacity>
   <LatestList 
   latestlistItem={this.state.LatestListItems} handleSeemore={this.ClickSeeMore}/>

  </View>
           {/* <CategoryProducts/> */}

            <CategoryProductList 
   categoryProductList={this.state.CategoryProductLists}
    onProductSelected={this.selectedItem}/>

          </ScrollView>
           <BottomNav/>
        

     </View>

     
    )
  }
}

const styles = StyleSheet.create({
    categories: {
        color:"#575656",
        fontSize:32,
        fontWeight:"bold",
        margin:10,
    },
  });