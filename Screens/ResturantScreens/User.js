import React from 'react'
import {KeyboardAvoidingView ,ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
 
import Background from '../../Images/Dashboard/Path551.png'
import Background2 from '../../Images/Dashboard/User/Path576.png'
 
import graph from '../../Images/Resturant/graph.png'

 
import Notification1 from '../../Images/Dashboard/Notification1.png'
import Message1 from '../../Images/Dashboard/Message1.png'
import User1 from '../../Images/Dashboard/User1.png'
import Home1 from '../../Images/Dashboard/Home1.png'
import NotificationG from '../../Images/Dashboard/NotificationG.png'
import MessageG from '../../Images/Dashboard/MessageG.png'
import UserG from '../../Images/Dashboard/UserG.png'
import HomeB from '../../Images/Dashboard/HomeB.png'
import userImage from '../../Images/Dashboard/User/Group568.png'
import MiniView from './UserMini'
import Resturants from './Resturants'
import Tips from './iTips'
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../Images/Dashboard/Group559.png'
 
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
 let Resturant=true 

export function TopUser(ref){

return(

    <View style={{ height:RFValue(180),backgroundColor: '#000000' ,marginTop:RFValue(0) }}>
    <StatusBar translucent backgroundColor="transparent" />
    <ImageBackground
            style={{
                height: '100%', width: '100%', resizeMode: 'cover'
            }}
            source={Background}
            imageStyle={{ opacity: 1 }}
        >

   <View style={{flexDirection:"row",marginTop:RFValue(50),justifyContent:"space-between"}}>      
 <TouchableOpacity onPress={()=>{ ref.props.navigation.navigate('SellerCashWithdraw3')}} >  
     <Text style={{alignSelf:"center",marginLeft:RFValue(20)
,fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'white'}}>
     Wallet
    </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{ ref.props.navigation.navigate('SignIn')}} >  
    <Text style={{alignSelf:"center",marginRight:RFValue(20)
,fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'white'}}>
     Logout
    </Text>
    </TouchableOpacity>
                </View>
</ImageBackground>
    </View>

)

}



export function BottomUser(ref){
 
return(
<View   style={{height:RFValue(430)}}>
    <ImageBackground
    style={{
        height: RFValue(230), width: RFValue(300),alignSelf:"center", resizeMode: 'cover'
        ,marginTop:RFValue(-100)
    }}
    source={Background2}
    imageStyle={{ opacity: 1 }}
>
<Image
            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(80) ,width:RFValue(80) ,
            marginTop:RFValue(20) }}
            source={userImage}>


        </Image>
        <Text style={{alignSelf:"center" , marginTop:RFValue(10)
,fontSize:RFValue(18),fontFamily:'Helvetica Neue',color:'black'}}>
Meal Time
</Text>
<Text style={{alignSelf:"center" , marginTop:RFValue(5)
,fontSize:RFValue(10),fontFamily:'Helvetica Neue',color:'black'}}>
Makkah, KSA.
</Text>
<View style={{flexDirection:"row",marginTop:RFValue(10),justifyContent:"center"}}>      
<View style={{marginTop:RFValue(0)}}>
<Text style={{alignSelf:"center" , marginTop:RFValue(5)
,fontSize:RFValue(10),fontFamily:'Helvetica Neue',color:'black'}}>
iTips
</Text>
<Text style={{alignSelf:"center" , marginTop:RFValue(5)
,fontSize:RFValue(10),fontFamily:'Helvetica Neue',color:'black'}}>
23
</Text>
</View>
<View style={{marginLeft:RFValue(20)}}>
<Text style={{alignSelf:"center" , marginTop:RFValue(5)
,fontSize:RFValue(10),fontFamily:'Helvetica Neue',color:'black'}}>
Followers
</Text>
<Text style={{alignSelf:"center" , marginTop:RFValue(5)
,fontSize:RFValue(10),fontFamily:'Helvetica Neue',color:'black'}}>
23
</Text>
</View>
<View style={{marginLeft:RFValue(20)}}>
<Text style={{alignSelf:"center" , marginTop:RFValue(5)
,fontSize:RFValue(10),fontFamily:'Helvetica Neue',color:'black'}}>
Following
</Text>
<Text style={{alignSelf:"center" , marginTop:RFValue(5)
,fontSize:RFValue(10),fontFamily:'Helvetica Neue',color:'black'}}>
1.5K
</Text>
</View>
        </View>
</ImageBackground>
<Text style={{alignSelf:"center" , marginTop:RFValue(5)
,fontSize:RFValue(20),fontFamily:'Helvetica Neue',color:'#FC63A0'}}>
Total Income:   250K
</Text>
<Text style={{alignSelf:"center" , marginTop:RFValue(5)
,fontSize:RFValue(20),fontFamily:'Helvetica Neue',color:'#4ED69A'}}>
Total Refund:   3.6 K
</Text>
<Text style={{alignSelf:"center" , marginTop:RFValue(5)
,fontSize:RFValue(20),fontFamily:'Helvetica Neue',color:'#554B86'}}>
Total Canceled: 55
</Text>
<Image
            style={{ resizeMode: 'contain',height: RFValue(230), width: RFValue(300),alignSelf:"center" ,
            marginTop:RFValue(0) }}
            source={graph}>


        </Image>
 
</View>
)

}

export default class User extends React.Component {
    constructor(){
        super()
        this.Home=false,
        this.Notification=false,
        this.Message=false,
        this.User=true,
        this.Resturant=true,
        this.Tips=false
    }
    renderNavigation(){

    }
render(){
    this.Home=false,
    this.Notification=false,
    this.Message=false,
    this.User=true
    return (
        
        <View style={{ flex: 1 }}>
               
           
               <View style={{ height:RFValue(180),backgroundColor: '#000000' ,marginTop:RFValue(0) }}>
    <StatusBar translucent backgroundColor="transparent" />
    <ImageBackground
            style={{
                height: '100%', width: '100%', resizeMode: 'cover'
            }}
            source={Background}
            imageStyle={{ opacity: 1 }}
        >

   <View style={{flexDirection:"row",marginTop:RFValue(50),justifyContent:"space-between"}}>      
 <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('SellerCashWithdraw3')}} >  
     <Text style={{alignSelf:"center",marginLeft:RFValue(20)
,fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'white'}}>
     Wallet
    </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('SignIn')}} >  
    <Text style={{alignSelf:"center",marginRight:RFValue(20)
,fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'white'}}>
     Logout
    </Text>
    </TouchableOpacity>
                </View>
</ImageBackground>
    </View>
         

            <LinearGradient
 
 colors={["#141414",'#2D2D2D', "#474747"]}
 start={{ x: 1, y: 0.1 }}
  
  style={{height:RFValue(560)}}
  >
     <View   style={{height:RFValue(430)}}>
    <ImageBackground
    style={{
        height: RFValue(230), width: RFValue(300),alignSelf:"center", resizeMode: 'cover'
        ,marginTop:RFValue(-100)
    }}
    source={Background2}
    imageStyle={{ opacity: 1 }}
>
<Image
            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(80) ,width:RFValue(80) ,
            marginTop:RFValue(20) }}
            source={userImage}>


        </Image>
        <Text style={{alignSelf:"center" , marginTop:RFValue(10),fontWeight:"bold"
,fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'black'}}>
Meal Time
</Text>
<Text style={{alignSelf:"center" , marginTop:RFValue(5)
,fontSize:RFValue(18),fontFamily:'Helvetica Neue',color:'black'}}>
Makkah, KSA.
</Text> 
</ImageBackground>
<Text style={{alignSelf:"center" , marginTop:RFValue(5)
,fontSize:RFValue(20),fontFamily:'Helvetica Neue',color:'#FC63A0'}}>
Total Income:   250K
</Text>
<Text style={{alignSelf:"center" , marginTop:RFValue(5)
,fontSize:RFValue(20),fontFamily:'Helvetica Neue',color:'#4ED69A'}}>
Total Refund:   3.6 K
</Text>
<Text style={{alignSelf:"center" , marginTop:RFValue(5)
,fontSize:RFValue(20),fontFamily:'Helvetica Neue',color:'#554B86'}}>
Total Canceled: 55
</Text>
<Image
            style={{ resizeMode: 'contain',height: RFValue(210), width: RFValue(300),alignSelf:"center" ,
            marginTop:RFValue(0) }}
            source={graph}>


        </Image>
 
</View>

<View style={{flexDirection:"row",alignSelf:'center',height:RFValue(200) }}>
             
             <TouchableOpacity
              onPress={()=>{
                 this.Home=true
                 this.Notification=false
                 this.Message=false
                 this.User=false    
                 this.props.navigation.navigate('SellerDashboard') 
               
             this.forceUpdate()
             }}
              style = {{
                 borderRadius:RFValue(50),
                 height:RFValue(70) ,width:RFValue(70) ,
                 backgroundColor:this.Home?'#deb459':'transparent',
                 margin:RFValue(5),
                 justifyContent:'center'
               }}
               underlayColor = '#ccc'
             > 
                             <Image
                                         style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(32) ,width:RFValue(32)  }}
                                         source={this.Home?HomeB :Home1}>
             
             
                                     </Image>
                                     </TouchableOpacity>
                                     <TouchableOpacity
                                     onPress={()=>{
                                         this.Home=false
                                         this.Notification=true
                                         this.Message=false
                                         this.User=false    
                                         this.props.navigation.navigate('SellerNotification') 
                    
                                         this.forceUpdate()
                                     }}
              style = {{
                 borderRadius:RFValue(50),
                 height:RFValue(70) ,width:RFValue(70) ,
                 backgroundColor:this.Notification?'#deb459':'transparent',
                 margin:RFValue(5),
                 justifyContent:'center'
               }}
               underlayColor = '#ccc'>
                                     <Image
                                         style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(32) ,width:RFValue(32)   }}
                                         source={this.Notification? Notification1:NotificationG}>
             
             
                                     </Image>
                                     </TouchableOpacity>
                                  
                                     <TouchableOpacity
                                      onPress={()=>{
                                         this.Home=false
                                         this.Notification=false
                                         this.Message=true
                                         this.User=false    
                                         this.props.navigation.navigate('SellerContact') 
                          
                                         this.forceUpdate()
                                     }}
              style = {{
                 borderRadius:RFValue(50),
                 height:RFValue(70) ,width:RFValue(70) ,
                 backgroundColor:this.Message?'#deb459':'transparent',
                 margin:RFValue(5),
                 justifyContent:'center'
               }}
               underlayColor = '#ccc'>
                                     <Image
                                         style={{ resizeMode: 'contain',alignSelf:"center",height:RFValue(32) ,width:RFValue(32)  }}
                                         source={this.Message?Message1:MessageG}>
             
             
                                     </Image>
                                     </TouchableOpacity>
                                     <TouchableOpacity
                                      onPress={()=>{
                                         this.Home=false
                                         this.Notification=false
                                         this.Message=false
                                         this.User=true    
                                         this.props.navigation.navigate('SellerUser') 
              
                                         this.forceUpdate()
                                     }}
              style = {{
                 borderRadius:RFValue(50),
                 height:RFValue(70) ,width:RFValue(70) ,
                 backgroundColor:this.User?'#deb459':'transparent',
                 margin:RFValue(5),
                 justifyContent:'center'
               }}
               underlayColor = '#ccc'>
                                     <Image
                                         style={{ resizeMode: 'contain',alignSelf:"center",height:RFValue(32) ,width:RFValue(32)   }}
                                         source={this.User?User1:UserG}>
             
             
                                     </Image>
             
                                     </TouchableOpacity>
                             </View>
                </LinearGradient>
       
        </View>

    )}
}

const styles = StyleSheet.create({})
