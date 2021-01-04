import React from 'react'
import {KeyboardAvoidingView ,ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
 
import Background from '../../Images/Dashboard/Path551.png'
import Background2 from '../../Images/Dashboard/Orders/Rectangle.png'
import status from '../../Images/Resturant/Group622.png'
import button4 from '../../Images/Resturant/button4.png'
import userImage from '../../Images/Dashboard/Orders/Group517.png'
import search from '../../Images/Dashboard/Group408.png'
 
import Notification1 from '../../Images/Dashboard/Notification1.png'
import Message1 from '../../Images/Dashboard/Message1.png'
import User1 from '../../Images/Dashboard/User1.png'

import back from '../../Images/Dashboard/Message/back.png'
import Icon from '../../Images/Resturant/scan.png'
import Msg1 from '../../Images/Dashboard/Message/send-plane-line.png'
import Msg2 from '../../Images/Dashboard/Message/Group573.png'
import Msg3 from '../../Images/Dashboard/Message/checkbox-circle-line.png'

import BarCode from '../../Images/Dashboard/Message/Group850.png'
import plus from '../../Images/Dashboard/Message/Group403.png'
import send from '../../Images/Dashboard/Message/send-plane-2-fill.png'
 
import LinearGradient from 'react-native-linear-gradient';

 
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
 

export default class Home extends React.Component {
    constructor(){
        super()
        this.Home=true,
        this.Notification=false,
        this.Message=false,
        this.User=false
        this.Neartoyou=true
        this.Accept=false
        this.Cancel=false
        this.TopRated=false
        this.TopChat=false
        this.BarCode=false,
        this.Order=false ,
          this.Deliver=false
    }
    componentDidMount(){this.Message=true}
    renderNavigation(){

    }
render(){
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
                 <View style={{flexDirection:"row",justifyContent:"space-around"}}>
            <TouchableOpacity 
            onPress={()=>{this.props.navigation.goBack()}}
            >               
              <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(20) ,width:RFValue(20),marginTop:RFValue(60)  }}
                            source={back}>


                        </Image>
                        </TouchableOpacity>

            <Text style={{alignSelf:"center" , marginTop:RFValue(50),marginLeft:RFValue(0)
        ,fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'white'}}>
            Scan
            </Text>
<View style={{width:RFValue(40),borderRadius:RFValue(50),height:RFValue(40),justifyContent:"center",backgroundColor:'transparent',alignSelf:"center", marginTop:RFValue(50)}}>
 
</View>

            </View>
    </ImageBackground>
            </View>
         

            <LinearGradient
 
 colors={["#141414",'#2D2D2D', "#474747"]}
 start={{ x: 1, y: 0.1 }}
  
  style={{height:RFValue(575),justifyContent:"center"}}
  >
 <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(300) ,width:RFValue(200)  }}
                            source={Icon}>


                        </Image>
               
                </LinearGradient>
       
        </View>

    )}
}

const styles = StyleSheet.create({})
