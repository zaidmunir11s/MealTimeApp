import React from 'react'
import {KeyboardAvoidingView ,ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
 
import Background from '../../Images/Dashboard/Path551.png'
 
import search from '../../Images/Dashboard/Group408.png'
 
import Notification1 from '../../Images/Dashboard/Notification1.png'
import Message1 from '../../Images/Dashboard/Message1.png'
import User1 from '../../Images/Dashboard/User1.png'
import Home1 from '../../Images/Dashboard/Home1.png'
import NotificationG from '../../Images/Dashboard/NotificationG.png'
import MessageG from '../../Images/Dashboard/MessageG.png'
import UserG from '../../Images/Dashboard/UserG.png'
import HomeB from '../../Images/Dashboard/HomeB.png'
import MiniView from './MiniNotification'
import LinearGradient from 'react-native-linear-gradient';

 
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
 

export default class Notification extends React.Component {
    constructor(){
        super()
        this.Home=false,
        this.Notification=true,
        this.Message=false,
        this.User=false
    }
    componentDidMount(){this.Notification=true}
    renderNavigation(){

    }
render(){
    this.Home=false,
    this.Notification=true,
    this.Message=false,
    this.User=false
    return (
        
        <View style={{ flex: 1 }}>
               
           
            <View style={{ height:RFValue(130),backgroundColor: '#000000' ,marginTop:RFValue(0) }}>

            <ImageBackground
                    style={{
                        height: '100%', width: '100%', resizeMode: 'cover'
                    }}
                    source={Background}
                    imageStyle={{ opacity: 1 }}
                >
            <StatusBar translucent backgroundColor="transparent" />
                 
      <View style={{backgroundColor:'white',flexDirection:'row',width:RFValue(300),height:RFValue(35),borderRadius:15,alignSelf:"center"
       ,marginTop:RFValue(75)}}>
         <TextInput
        placeholder="Search Here..."
        style={{backgroundColor:'transparent',width:RFValue(250),padding:RFValue(10),height:RFValue(35),borderRadius:15,alignSelf:"flex-start",
       
       }}
     
         
      >


      </TextInput>
      <Image
            style={{ resizeMode: 'contain' ,alignSelf:"center",height:RFValue(20) }}
            source={search}>


        </Image>
      </View>
    
    </ImageBackground>
            </View>
         

            <LinearGradient
 
 colors={["#141414",'#2D2D2D', "#474747"]}
 start={{ x: 1, y: 0.1 }}
  
  style={{height:RFValue(575)}}
  >
                <View style={{ flexDirection: "column" , height:RFValue(420),
                width: RFValue(230), marginTop: RFValue(40) ,margin:RFValue(15), alignSelf: "center" }}>
                  <MiniView></MiniView>
                  <MiniView></MiniView>
                  <MiniView></MiniView>
                  <MiniView></MiniView>
                  <MiniView></MiniView>
                
             

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
