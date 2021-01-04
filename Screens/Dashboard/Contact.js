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
import userImage from '../../Images/Dashboard/Contact/profile.png'
import ContactMiniView from './ContactMini'
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../Images/Dashboard/Group559.png'
import cross from '../../Images/Dashboard/cross.png'
 
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
 

export default class Contact extends React.Component {
    constructor(){
        super()
        this.Home=true,
        this.Notification=false,
        this.Message=false,
        this.User=false,
        this.myRef=React.createRef()
        this.myRef1=React.createRef()
        this.myRef2=React.createRef()
        this.myRef3=React.createRef()
    }
    renderNavigation(){

    }
render(){
    this.Home=false,
    this.Notification=false,
    this.Message=true,
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
<View style={{flexDirection:"row",marginTop:RFValue(50),justifyContent:"center"}}>      
<Text style={{alignSelf:"center",marginLeft:RFValue(120)
,fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'white'}}>
 Contact
</Text>
<Image
                style={{ resizeMode: 'contain',alignSelf:"flex-end", height:RFValue(32) ,width:RFValue(32) ,
                marginLeft:RFValue(80) }}
                source={userImage}>


            </Image>
            </View>
</ImageBackground>
</View>

         

            <LinearGradient
 
 colors={["#141414",'#2D2D2D', "#474747"]}
 start={{ x: 1, y: 0.1 }}
  
  style={{height:'100%',justifyContent:'space-around'}}
  >

      
<View style={{ flexDirection: "column" , height:RFValue(430),
           width: RFValue(330), marginTop: RFValue(40) ,margin:RFValue(15), alignSelf: "center" }}>
           
           <ScrollView ref={this.myRef}
            horizontal contentContainerStyle={{justifyContent:"center",height:RFValue(100)}} style={{ flexDirection:"row"}}>

<TouchableOpacity
 onPress={()=>{this.props.navigation.navigate('MessageInfo')}}
>
  <ContactMiniView image={Icon} title={'Meal Time'} time={'24 mins ago'} color={'#deb459'} ></ContactMiniView>
  </TouchableOpacity>
  <TouchableOpacity
  style={{alignSelf:"center", height:RFValue(25) ,width:RFValue(25) }}
  onPress={()=>{this.myRef.current.scrollTo({x: 0, y: 0, animated: true})}}
  >
  <Image
  onPress
                        style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(25) ,width:RFValue(25) 
                        }}
                        source={cross}>


                    </Image>
                    </TouchableOpacity>
  </ScrollView>


  <ScrollView ref={this.myRef3} horizontal contentContainerStyle={{justifyContent:"center",height:RFValue(100)}} style={{ flexDirection:"row"}}>
  <TouchableOpacity
onPress={()=>{ this.props.navigation.navigate('MessageInfo')}}>
  <ContactMiniView image={Icon} title={'Meal Time'} time={'24 mins ago'} color={'#deb459'} ></ContactMiniView>
  </TouchableOpacity>
  <TouchableOpacity
  style={{alignSelf:"center", height:RFValue(25) ,width:RFValue(25) }}
  onPress={()=>{this.myRef3.current.scrollTo({x: 0, y: 0, animated: true})}}
  >
  <Image
  onPress
                        style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(25) ,width:RFValue(25) 
                        }}
                        source={cross}>


                    </Image>
                    </TouchableOpacity>
  </ScrollView>
  <ScrollView ref={this.myRef1} horizontal contentContainerStyle={{justifyContent:"center",height:RFValue(100)}} style={{ flexDirection:"row"}}>

  <TouchableOpacity
onPress={()=>{ this.props.navigation.navigate('MessageInfo')}}>
  <ContactMiniView image={Icon} title={'Meal Time'} time={'24 mins ago'} color={'yellow'} ></ContactMiniView>
  </TouchableOpacity>
  <TouchableOpacity
  style={{alignSelf:"center", height:RFValue(25) ,width:RFValue(25) }}
  onPress={()=>{this.myRef1.current.scrollTo({x: 0, y: 0, animated: true})}}
  >
  <Image
  onPress
                        style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(25) ,width:RFValue(25) 
                        }}
                        source={cross}>


                    </Image>
                    </TouchableOpacity>
  </ScrollView>
  <ScrollView ref={this.myRef2} horizontal contentContainerStyle={{justifyContent:"center",height:RFValue(100)}} style={{ flexDirection:"row"}}>

  <TouchableOpacity
onPress={()=>{ this.props.navigation.navigate('MessageInfo')}}>
  <ContactMiniView image={Icon} title={'Meal Time'} time={'24 mins ago'} color={'red'} ></ContactMiniView>
  </TouchableOpacity>
  <TouchableOpacity
  style={{alignSelf:"center", height:RFValue(25) ,width:RFValue(25) }}
  onPress={()=>{this.myRef2.current.scrollTo({x: 0, y: 0, animated: true})}}
  >
  <Image
  onPress
                        style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(25) ,width:RFValue(25) 
                        }}
                        source={cross}>


                    </Image>
                    </TouchableOpacity>
  </ScrollView>



           
           
           
           </View>
                        <View style={{flexDirection:"row",alignSelf:'center',height:RFValue(200) }}>
             
<TouchableOpacity
 onPress={()=>{
    this.Home=true
    this.Notification=false
    this.Message=false
    this.User=false    
    this.props.navigation.navigate(this.props.route.params.path)
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
                            this.props.navigation.navigate('Notification')
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
                            this.forceUpdate()
                            this.props.navigation.navigate('Contact')
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
                            this.forceUpdate()
                            this.props.navigation.navigate('User')
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
