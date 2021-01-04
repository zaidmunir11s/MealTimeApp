import React from 'react'
import {KeyboardAvoidingView ,ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
 
import Background from '../../Images/Dashboard/Path551.png'
 
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
        this.Home=true,
        this.Notification=false,
        this.Message=false,
        this.User=false
        this.Neartoyou=true
        this.TopRated=false
        this.TopChat=false
        this.BarCode=false
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
            onPress={()=>{this.props.navigation.navigate('Home')}}
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
   
<View style={{flexDirection:"row", marginTop:RFValue(20)}}>
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


</View>
<View style={{flexDirection:"row-reverse", marginTop:RFValue(20),
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
<Text style={{alignSelf:"flex-end",width:RFValue(200),color:'#deb459'}}>
Request has been send
</Text>

                        </View>


</View>
<View style={{flexDirection:"row-reverse", marginTop:RFValue(0),
borderColor:'white',borderRightWidth:1,marginLeft:RFValue(30)}}>
<View style={{width:RFValue(40),borderRadius:RFValue(50),height:RFValue(40),justifyContent:"center"
 ,marginHorizontal:RFValue(10)
,backgroundColor:'white',alignSelf:"flex-start",marginRight:-20}}>
<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Payment2')}}>
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
