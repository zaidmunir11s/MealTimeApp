/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './Screens/SignUp'
import Dashboard from './Screens/Dashboard'
import SignIn from './Screens/SignIn'
import Splash0 from './Screens/Splash0'
import Splash1 from './Screens/Splash1'
import Splash2 from './Screens/Splash2'
import Home from './Screens/Dashboard/Home'
import Notification from './Screens/Dashboard/Notification'
import User from './Screens/Dashboard/User'
import Message from './Screens/Dashboard/Message'
import MessageInfo from './Screens/Dashboard/MessageInfo'



import Orders from './Screens/Dashboard/Orders'
import Contact from './Screens/Dashboard/Contact'
import Dashboard2 from './Screens/Dashboard2/Dashboard'
import Reservation from './Screens/Dashboard2/Reservation'
import Menu from './Screens/Dashboard2/Menu'
import ItemFull from './Screens/Dashboard2/ItemFull'
import Splash3 from './Screens/Splash3'
import Payment from './Screens/Payment/Payment'
import Payment2 from './Screens/Payment/Payment2'
import Payment3 from './Screens/Payment/Payment3'
import Payment4 from './Screens/Payment/Payment4'
import Verification1 from './Screens/Payment/Verification1'
import SignInverify1 from './Screens/SignIn/Verification1'
import SignInverify2 from './Screens/SignIn/Verification2'
import Verification2 from './Screens/Payment/Verification2'
import CashWithdraw1 from './Screens/Payment/CashWithdraw1'
import CashWithdraw2 from './Screens/Payment/CashWithdraw2'
import CashWithdraw3 from './Screens/Payment/CashWithdraw3'
import CreateAd from './Screens/ResturantScreens/CreateAd'
import Cart from './Screens/Payment/Cart'

import SellerHome from './Screens/ResturantScreens/Home'
import SellerNotification from './Screens/ResturantScreens/Notification'
import SellerUser from './Screens/ResturantScreens/User'
import SellerMessage from './Screens/ResturantScreens/Message'
import SellerMessageInfo from './Screens/ResturantScreens/MessageInfo'
import SellerOrders from './Screens/ResturantScreens/Orders'
import SellerContact from './Screens/ResturantScreens/Contact'
import SellerDashboard from './Screens/ResturantScreens/Dashboard'
import SellerDashboard2 from './Screens/ResturantScreens/Dashboard2'
import SellerReservation from './Screens/ResturantScreens/Reservation'
import SellerMenu from './Screens/ResturantScreens/Menu'
import SellerItemFull from './Screens/ResturantScreens/ItemFull'

import SellerPayment from './Screens/ResturantScreens/Payment'
import SellerPayment2 from './Screens/ResturantScreens/Payment2'
import SellerPayment3 from './Screens/ResturantScreens/Payment3'
import SellerPayment4 from './Screens/ResturantScreens/Payment4'
import SellerVerification1 from './Screens/ResturantScreens/Verification1'
import SellerSignInverify1 from './Screens/ResturantScreens/Verification1'
import SellerSignInverify2 from './Screens/ResturantScreens/Verification2'
import SellerVerification2 from './Screens/ResturantScreens/Verification2'
import SellerCashWithdraw1 from './Screens/ResturantScreens/CashWithdraw1'
import SellerCashWithdraw2 from './Screens/ResturantScreens/CashWithdraw2'
import SellerCashWithdraw3 from './Screens/ResturantScreens/CashWithdraw3'
import Scan from './Screens/ResturantScreens/Scan'
import {
  firebase
} from '@react-native-firebase/firestore'
import SellerMessage2 from './Screens/ResturantScreens/Message2'
 
import SellerCart from './Screens/ResturantScreens/Cart'
import MiniView from './Screens/MiniView'
import ResetPassword from './Screens/ResetPassword'
const Stack = createStackNavigator();
export default class App extends React.Component {
componentDidMount(){
  const firebaseConfig = {
    apiKey: "AIzaSyDN-4Shep7LXFTXxlpdulWprUPfFbpq7nM",
    authDomain: "mealtime-6ede9.firebaseapp.com",
    databaseURL: "https://mealtime-6ede9-default-rtdb.firebaseio.com",
    projectId: "mealtime-6ede9",
    storageBucket: "mealtime-6ede9.appspot.com",
    messagingSenderId: "17838564133",
    appId: "1:17838564133:web:5b678cbcf8dd2c7b2a70cc",
    measurementId: "G-2CET40EV41"
  };
  // Initialize Firebase
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();



}
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          gestureEnabled:true
          , gestureDirection:"horizontal"
        }}>  

            <Stack.Screen name="Splash0" component={Splash0} />
<Stack.Screen name="Scan" component={Scan} />
<Stack.Screen name="SellerDashboard" component={SellerDashboard} />
<Stack.Screen name="CreateAd" component={CreateAd} />

           <Stack.Screen name="Dashboard" component={Dashboard} />

<Stack.Screen name="SellerUser" component={SellerUser} />
          <Stack.Screen name="SellerItemFull" component={SellerItemFull} />
<Stack.Screen name="SellerOrders" component={SellerOrders} />
<Stack.Screen name="SellerMessage2" component={SellerMessage2} />
          <Stack.Screen name="SellerMessage" component={SellerMessage} />
          <Stack.Screen name="SellerMessageInfo" component={SellerMessageInfo} />
          <Stack.Screen name="SellerHome" component={SellerHome} />
 
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          
      
          <Stack.Screen name="SignInverify1" component={SignInverify1} />
          <Stack.Screen name="SignInverify2" component={SignInverify2} />

          <Stack.Screen name="Splash1" component={Splash1} />
          <Stack.Screen name="Splash3" component={Splash3} />


          <Stack.Screen name="ItemFull" component={ItemFull} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Payment2" component={Payment2} />
          <Stack.Screen name="Reservation" component={Reservation} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="CashWithdraw3" component={CashWithdraw3} />
          <Stack.Screen name="CashWithdraw2" component={CashWithdraw2} />
          <Stack.Screen name="CashWithdraw1" component={CashWithdraw1} />
          <Stack.Screen name="Verification2" component={Verification2} />
          <Stack.Screen name="Verification1" component={Verification1} />
          <Stack.Screen name="Payment4" component={Payment4} />
          <Stack.Screen name="Payment3" component={Payment3} />

 
          <Stack.Screen name="SellerSignInverify1" component={SellerSignInverify1} />
          <Stack.Screen name="SellerSignInverify2" component={SellerSignInverify2} />
 

     

          <Stack.Screen name="SellerPayment" component={SellerPayment} />
          <Stack.Screen name="SellerPayment2" component={SellerPayment2} />
          <Stack.Screen name="SellerReservation" component={SellerReservation} />
          <Stack.Screen name="SellerCart" component={SellerCart} />
          <Stack.Screen name="SellerCashWithdraw3" component={SellerCashWithdraw3} />
          <Stack.Screen name="SellerCashWithdraw2" component={SellerCashWithdraw2} />
          <Stack.Screen name="SellerCashWithdraw1" component={SellerCashWithdraw1} />
          <Stack.Screen name="SellerVerification2" component={SellerVerification2} />
          <Stack.Screen name="SellerVerification1" component={SellerVerification1} />
          <Stack.Screen name="SellerPayment4" component={SellerPayment4} />
          <Stack.Screen name="SellerPayment3" component={SellerPayment3} />
          <Stack.Screen name="SellerResetPassword" component={ResetPassword} />


<Stack.Screen name="SellerMenu" component={SellerMenu} />
<Stack.Screen name="SellerDashboard2" component={SellerDashboard2} />



<Stack.Screen name="SellerContact" component={SellerContact} />

<Stack.Screen name="SellerNotification" component={SellerNotification} />





          <Stack.Screen name="ResetPassword" component={ResetPassword} />


          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Dashboard2" component={Dashboard2} />
          <Stack.Screen name="Orders" component={Orders} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Message" component={Message} />
          <Stack.Screen name="MessageInfo" component={MessageInfo} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Notification" component={Notification} />

     


        </Stack.Navigator>
      </NavigationContainer>
    )
  }

} 