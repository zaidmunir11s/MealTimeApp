import React from 'react'
import {KeyboardAvoidingView ,ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
 
import Background from '../../Images/Dashboard/Path551.png'
import Background2 from '../../Images/Dashboard/Orders/Rectangle.png'
 
import search from '../../Images/Dashboard/Group408.png'
 
import Notification1 from '../../Images/Dashboard/Notification1.png'
import Message1 from '../../Images/Dashboard/Message1.png'
import User1 from '../../Images/Dashboard/User1.png'
import Home1 from '../../Images/Dashboard/Home1.png'
import NotificationG from '../../Images/Dashboard/NotificationG.png'
import MessageG from '../../Images/Dashboard/MessageG.png'
import UserG from '../../Images/Dashboard/UserG.png'
import HomeB from '../../Images/Dashboard/HomeB.png'
import userImage from '../../Images/Dashboard/Orders/Group517.png'
import MiniView from './UserMini'
import Resturants from './Resturants'
import Tips from './iTips'
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../Images/Dashboard/Orders/simple-codesandbox.png'
import status1 from '../../Images/Dashboard/Orders/Group6222.png'
import status2 from '../../Images/Dashboard/Orders/Group62.png'
import status3 from '../../Images/Dashboard/Orders/Group622.png'
import back from '../../Images/Dashboard/Message/back.png'
import button1 from '../../Images/Dashboard/Orders/button1.png'
import button2 from '../../Images/Dashboard/Orders/button2.png'
import button3 from '../../Images/Dashboard/Orders/button3.png'
import button4 from '../../Images/Dashboard/Orders/button4.png'
import accept from '../../Images/Resturant/accept.png'
import neworder from '../../Images/Resturant/neworder.png'


import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
 

export default class User extends React.Component {
    constructor(){
        super()
        this.Home=true,
        this.Notification=false,
        this.Message=false,
        this.User=false,
        this.Neartoyou=false
        this.TopRated=false
        this.TopChat=false
        this.neworder=true
    }
    renderNavigation(){

    }
render(){
    return (
        
        <View style={{ flex: 1 }}>
               
           
            <View style={{ height:RFValue(100),backgroundColor: '#000000' ,marginTop:RFValue(0) }}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground
                    style={{
                        height: '100%', width: '100%', resizeMode: 'cover'
                    }}
                    source={Background}
                    imageStyle={{ opacity: 1 }}
                >
        
        <View style={{flexDirection:"row",justifyContent:"space-around",marginRight:RFValue(100)}}>
              <TouchableOpacity
              onPress={()=>{this.props.navigation.goBack()}}
              >        
                       <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(20) ,width:RFValue(20)
                            ,marginTop:RFValue(55)  }}
                            source={back}>


                        </Image>

                        </TouchableOpacity>

            <Text style={{alignSelf:"center" , marginTop:RFValue(50),marginLeft:RFValue(0)
        ,fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'white'}}>
            Orders
            </Text>
 

            </View>
    </ImageBackground>
            </View>
         
    
            <LinearGradient
 
 colors={["#141414",'#2D2D2D', "#474747"]}
 start={{ x: 1, y: 0.1 }}
  
  style={{height:RFValue(640)}}
  >
          <LinearGradient
 
 colors={[ "#FFC64B", "#80662C" ]}
 
  
   style={{width:RFValue(80),alignSelf:"center",height:RFValue(80),borderRadius:RFValue(60),justifyContent:"center",marginTop:RFValue(20)}}
  >
      <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(60) ,width:RFValue(60) 
                          }}
                            source={Icon}>


                        </Image>
                        </LinearGradient>
              <View style={{ flexDirection: "row" , height:RFValue(100),justifyContent:"space-evenly",backgroundColor:'transparent',
                width: RFValue(280), marginTop: RFValue(10) ,margin:RFValue(0), alignSelf: "center" }}>
  
  <TouchableOpacity 
                  onPress={()=>{this.Neartoyou=false
                    this.neworder=true
                    this.TopChat=false
                    this.TopRated=false
                    this.forceUpdate()
                    }}
                 style={{width:RFValue(100),height:RFValue(30),borderRadius:15,backgroundColor:'transparent'
                 ,marginHorizontal:RFValue(5)}}>
                 <Text style={{alignSelf:"center" , marginTop:RFValue(5)
        ,fontSize:RFValue(15),fontFamily:'Helvetica Neue',fontWeight:'bold',color:this.neworder?'#deb459':'#645730'}}>
             New Orders
            </Text>
                 </TouchableOpacity>
                 <TouchableOpacity 
                  onPress={()=>{this.Neartoyou=true
                    this.neworder=false
                    this.TopChat=false
                    this.TopRated=false
                    this.forceUpdate()
                    }}
                 style={{width:RFValue(100),height:RFValue(30),borderRadius:15,backgroundColor:'transparent'
                 ,marginHorizontal:RFValue(5)}}>
                 <Text style={{alignSelf:"center" , marginTop:RFValue(5)
        ,fontSize:RFValue(15),fontFamily:'Helvetica Neue',fontWeight:'bold',color:this.Neartoyou?'#deb459':'#645730'}}>
             In Progress
            </Text>
                 </TouchableOpacity>
         
                 <TouchableOpacity 
                  onPress={()=>{this.Neartoyou=false
                    this.neworder=false
                    this.TopRated=true
                    this.TopChat=false
                    this.forceUpdate()
                    }}
                 style={{width:RFValue(100),height:RFValue(30),borderRadius:15,backgroundColor:'transparent'}}>
                 <Text style={{alignSelf:"center" , marginTop:RFValue(5)
        ,fontSize:RFValue(15),fontFamily:'Helvetica Neue',fontWeight:'bold',color:this.TopRated?'#deb459':'#645730'}}>
             Received
            </Text>
                 </TouchableOpacity>
                
        
                 <TouchableOpacity 
                  onPress={()=>{this.Neartoyou=false
                    this.neworder=false
                    this.TopRated=false
                    this.TopChat=true
                    this.forceUpdate()
                    }}
                 style={{width:RFValue(100),height:RFValue(30),borderRadius:15,backgroundColor:'transparent'}}>
                 <Text style={{alignSelf:"center" , marginTop:RFValue(5)
        ,fontSize:RFValue(15),fontFamily:'Helvetica Neue',fontWeight:'bold',color:this.TopChat?'#deb459':'#645730'}}>
             Cancelled
            </Text>
                 </TouchableOpacity>
   

                
             

                </View>
         <ImageBackground
                    style={{
                        height: RFValue(150), width: RFValue(300),alignSelf:"center", resizeMode: 'contain'
                        ,marginTop:RFValue(-50) 
                    }}
                    source={Background2}
                    imageStyle={{ opacity: 1 }}
                >
            <Image
                            style={{ resizeMode: 'contain',alignSelf:"flex-start", height:RFValue(60) ,width:RFValue(60) ,
                            marginTop:RFValue(20),marginLeft:RFValue(10) }}
                            source={userImage}>


                        </Image>
                        { this.neworder?<Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(200) ,width:RFValue(200) ,
                            marginTop:RFValue(-115),marginLeft:RFValue(60) }}
                            source={neworder}>


                        </Image>:null}
                       { this.Neartoyou?<Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(200) ,width:RFValue(200) ,
                            marginTop:RFValue(-115),marginLeft:RFValue(60) }}
                            source={status1}>


                        </Image>:null}
                        { this.TopRated?<Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(200) ,width:RFValue(200) ,
                            marginTop:RFValue(-115),marginLeft:RFValue(60) }}
                            source={status2}>


                        </Image>:null}
                        { this.TopChat?<Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(200) ,width:RFValue(200) ,
                            marginTop:RFValue(-115),marginLeft:RFValue(60) }}
                            source={status3}>


                        </Image>:null}
                      
         
                        
    </ImageBackground>
            
    { this.neworder?    <View style={{ flexDirection: "row" , height:RFValue(150),justifyContent:"space-between",
                width: RFValue(250), marginTop: RFValue(-15) ,marginRight:RFValue(20), alignSelf: "center" }}>
 <TouchableOpacity
 
 >
 <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(30) ,width:RFValue(80) ,
                             marginLeft:RFValue(60) }}
                            source={accept}>


                        </Image>
 </TouchableOpacity>
<TouchableOpacity>
<Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(30) ,width:RFValue(80) ,
                             }}
                            source={button2}>


                        </Image>
</TouchableOpacity>
                            </View> :null}
       
           { this.Neartoyou?    <View style={{ flexDirection: "row" , height:RFValue(150),justifyContent:"space-between",
                width: RFValue(250), marginTop: RFValue(-15) ,marginRight:RFValue(20), alignSelf: "center" }}>
 <TouchableOpacity
 onPress={()=>{this.props.navigation.navigate('SellerMessageInfo' )}}
 >
 <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(30) ,width:RFValue(80) ,
                             marginLeft:RFValue(60) }}
                            source={button1}>


                        </Image>
 </TouchableOpacity>
<TouchableOpacity>
<Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(30) ,width:RFValue(80) ,
                             }}
                            source={button2}>


                        </Image>
</TouchableOpacity>
                            </View> :null}
                            { this.TopRated?    <View style={{ flexDirection: "row" , height:RFValue(150),justifyContent:"space-between",
                width: RFValue(50), marginTop: RFValue(-15) ,marginRight:RFValue(20), alignSelf: "center" }}>
 <TouchableOpacity>
 <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(30) ,width:RFValue(80) ,
                             marginLeft:RFValue(0) }}
                            source={button3}>


                        </Image>
 </TouchableOpacity>
 
                            </View> :null}
                            { this.TopChat?    <View style={{ flexDirection: "row" , height:RFValue(150),justifyContent:"space-between",
                width: RFValue(50), marginTop: RFValue(-15) ,marginRight:RFValue(20), alignSelf: "center" }}>
 <TouchableOpacity>
 <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(30) ,width:RFValue(80) ,
                             marginLeft:RFValue(0) }}
                            source={button4}>


                        </Image>
 </TouchableOpacity>
 
                            </View> :null}

                <View style={{flexDirection:"row",alignSelf:'center',height:RFValue(200),marginTop:RFValue(50) }}>
     
                </View>
                </LinearGradient>
       
        </View>

    )}
}

const styles = StyleSheet.create({})
