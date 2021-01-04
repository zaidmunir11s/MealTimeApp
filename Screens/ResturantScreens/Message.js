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
import Icon from '../../Images/Dashboard/Message/Group571.png'
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
        this.Home=false,
        this.Notification=false,
        this.Message=true,
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
            Meal Time
            </Text>
<View style={{width:RFValue(40),borderRadius:RFValue(50),height:RFValue(40),justifyContent:"center",backgroundColor:'#deb459',alignSelf:"center", marginTop:RFValue(50)}}>
<Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(32) ,width:RFValue(32)  }}
                            source={Icon}>


                        </Image>
</View>

            </View>
    </ImageBackground>
            </View>
         

            <LinearGradient
 
 colors={["#141414",'#2D2D2D', "#474747"]}
 start={{ x: 1, y: 0.1 }}
  
  style={{height:RFValue(575)}}
  >
      <View style={{ flexDirection: "column" , 
                width: RFValue(330),height:RFValue(500) ,marginTop: RFValue(10) ,margin:RFValue(0), alignSelf: "center" }}>
   
{!this.Order?<View style={{flexDirection:"row", marginTop:RFValue(20)}}>
<View style={{width:RFValue(40),borderRadius:RFValue(50),height:RFValue(40),justifyContent:"center",marginHorizontal:RFValue(10)
,backgroundColor:'#deb459',alignSelf:"flex-start"}}>
<Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(32) ,width:RFValue(32)  }}
                            source={Icon}>


                        </Image>
                        </View>
                        <View 
                        style={{backgroundColor:'white',height:RFValue(100),width:RFValue(250),justifyContent:"center",alignSelf:"center"}}>
<Text style={{alignSelf:"center",width:RFValue(200)}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .
</Text>

                        </View>


</View>:null}
{this.Order?   

<ImageBackground
style={{
    height: RFValue(150), width: RFValue(300),alignSelf:"center", resizeMode: 'contain' ,justifyContent:"flex-start"
    ,marginTop:RFValue(0) 
}}
source={Background2}
imageStyle={{ opacity: 1 }}
>
    <View  style={{flexDirection:"row"}}> 
<Image
        style={{ resizeMode: 'contain',alignSelf:"flex-start", height:RFValue(60) ,width:RFValue(60) ,
        marginTop:RFValue(30),marginLeft:RFValue(10) }}
        source={userImage}>


    </Image>
    <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(150) ,width:RFValue(200) ,
                            marginTop:RFValue(0),marginLeft:RFValue(10) }}
                            source={status}></Image>
 </View>
 <View style={{ flexDirection: "row" , height:RFValue(150), 
                width: RFValue(50), marginTop: RFValue(-75) ,marginRight:RFValue(20), alignSelf: "center" }}>
  <TouchableOpacity  

onPress={()=>{
    this.Deliver=true
    this.forceUpdate()
    }}
              style={{width:RFValue(70),borderRadius:RFValue(50), height:RFValue(30) ,
                backgroundColor:this.Deliver?'#deb459':'black' , 
              alignSelf:"center"}}
              >
  <Text
             
            
             style={{color:'white' ,alignSelf:"center",fontSize:RFValue(14),marginTop:RFValue(5)}}
               >
             {this.Deliver?'Delivered' :'Deliver'}   
               </Text>

              </TouchableOpacity>
                       </View>
    </ImageBackground>

:null}

<View style={{flexDirection:"row-reverse", marginTop:RFValue(20),height:RFValue(this.Accept && this.Cancel?70: 100),
borderColor:'white',borderRightWidth:1,marginLeft:RFValue(30)}}>
<View style={{width:RFValue(40),borderRadius:RFValue(50),height:RFValue(40),justifyContent:"center"
 ,marginHorizontal:RFValue(10)
,backgroundColor:'white',alignSelf:"flex-start",marginRight:-20}}>

<TouchableOpacity>
<Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(25) ,width:RFValue(25)  }}
                            source={Msg1}>


                        </Image>
                        </TouchableOpacity>
                        </View>
                        <View 
                        style={{backgroundColor:'transparent',height:RFValue(100),width:RFValue(250), alignSelf:"center"}}>
<Text style={{alignSelf:"flex-end",width:RFValue(200),color:'#deb459',marginTop:RFValue(this.Accept && this.Cancel?20: 0)}}>
Request has been send
</Text>
{!this.Accept && !this.Cancel ?
<View style={{flexDirection:"row",marginTop:RFValue(20)}}>

<TouchableOpacity  

onPress={()=>{
    this.Cancel=true
    this.Accept=true
    this.forceUpdate()
    }}
              style={{width:RFValue(100),borderRadius:RFValue(50), height:RFValue(36),marginRight:RFValue(20),
                backgroundColor:'transparent',borderColor:'#deb459',borderWidth:RFValue(1),
              alignSelf:"center"}}
              >
  <Text
             
            
             style={{color:'#deb459' ,alignSelf:"center",fontSize:RFValue(18),marginTop:RFValue(5)}}
               >
                 Cancel
               </Text>

              </TouchableOpacity>

<TouchableOpacity  

onPress={()=>{
    this.Cancel=true
    this.Accept=true
    this.forceUpdate()}}
              style={{width:RFValue(100),borderRadius:RFValue(50), height:RFValue(36),backgroundColor:'#deb459',
              alignSelf:"center"}}
              >
  <Text
             
            
             style={{color:'black' ,alignSelf:"center",fontSize:RFValue(18),marginTop:RFValue(5)}}
               >
                 Accept
               </Text>

              </TouchableOpacity>
         
              </View> :null}
                        </View>


</View>
<View style={{flexDirection:"row-reverse", marginTop:RFValue(0),
borderColor:'white',borderRightWidth:1,marginLeft:RFValue(30)}}>
<View style={{width:RFValue(40),borderRadius:RFValue(50),height:RFValue(40),justifyContent:"center"
 ,marginHorizontal:RFValue(10)
,backgroundColor:'white',alignSelf:"flex-start",marginRight:-20}}>
<TouchableOpacity 
 >
<Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(25) ,width:RFValue(25)  }}
                            source={Msg2}>


                        </Image>
                        </TouchableOpacity>
                        </View>
                        <View 
                        style={{backgroundColor:'transparent',height:RFValue(100),width:RFValue(250), alignSelf:"center"}}>
<Text style={{alignSelf:"flex-end",width:RFValue(200),color:'#deb459'}}>
Reservation has been
Approved (pay now
for confirm)
</Text>

                        </View>


</View>
<View style={{flexDirection:"row-reverse", marginTop:RFValue(0),
borderColor:'white',borderRightWidth:0,marginLeft:RFValue(30)}}>
<View style={{width:RFValue(40),borderRadius:RFValue(50),height:RFValue(40),justifyContent:"center"
 ,marginHorizontal:RFValue(10)
,backgroundColor:'white',alignSelf:"flex-start",marginRight:-20}}>
<TouchableOpacity  onPress={()=>{ this.BarCode=true
this.forceUpdate()
}}>

<Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(25) ,width:RFValue(25)  }}
                            source={Msg3}>


                        </Image>
                        </TouchableOpacity>
                        </View>
                        <View 
                        style={{backgroundColor:'transparent',height:RFValue(100),width:RFValue(250), alignSelf:"center"}}>
<Text style={{alignSelf:"flex-end",width:RFValue(200),color:'#deb459'}}>
Table has been Booked
Please tab on the checkbox circle
To get code. 
</Text>

                        </View>


</View>
{this.BarCode?
<Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(120) ,width:RFValue(120),marginTop:RFValue(-60)  }}
                            source={BarCode}>


                        </Image> :null}
                </View>
                <View style={{ flexDirection: "row" , 
                width: '100%' ,height:RFValue(75),backgroundColor:'black',justifyContent:"space-between" }}>
              <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(25) ,width:RFValue(25)   }}
                            source={plus}>


                        </Image>

              <Text style={{alignSelf:"center" ,width:RFValue(200)  ,fontSize:RFValue(10),fontFamily:'Helvetica Neue',color:'#deb459'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e
</Text>
<Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(25) ,width:RFValue(25)   }}
                            source={send}>


                        </Image>
                </View>
               
                </LinearGradient>
       
        </View>

    )}
}

const styles = StyleSheet.create({})
