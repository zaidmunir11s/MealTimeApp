import React from 'react'
import {KeyboardAvoidingView ,ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import Logo from '../../Images/Path430.png'
import Background from '../../Images/Dashboard/group.png'
import Group1 from '../../Images/Dashboard/Group523.png'
import Group2 from '../../Images/Dashboard/Group524.png'
import Group3 from '../../Images/Dashboard/Group525.png'
import Group4 from '../../Images/Dashboard/Group526.png'
import search from '../../Images/Dashboard/Group408.png'
import Orders from '../../Images/Dashboard/Orders.png'
import Union3 from '../../Images/Dashboard/Union3.png'

import Notification1 from '../../Images/Dashboard/Notification1.png'
import Message1 from '../../Images/Dashboard/Message1.png'
import User1 from '../../Images/Dashboard/User1.png'
import Home1 from '../../Images/Dashboard/Home1.png'
import NotificationG from '../../Images/Dashboard/NotificationG.png'
import MessageG from '../../Images/Dashboard/MessageG.png'
import UserG from '../../Images/Dashboard/UserG.png'
import HomeB from '../../Images/Dashboard/HomeB.png'

import Button from '../../Images/Signup/Rectangle131.png'
import Add from '../../Images/Resturant/add.png'
import Scan from '../../Images/Resturant/scanIcon.png'
import Location from '../../Images/Signup/Iconmaterial-my-location.png'
import Eye from '../../Images/Signup/Iconfeather-eye.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { SearchBar ,Icon} from 'react-native-elements';


export default class Dashboard extends React.Component {
    constructor(){
        super()
        this.Home=false,
        this.Notification=false,
        this.Message=false,
        this.User=false
    }
    renderNavigation(){

    }
render(){
    this.Home=true,
    this.Notification=false,
    this.Message=false,
    this.User=false
    return (
        
        <View style={{ flex: 100, backgroundColor: '#000000', justifyContent: "center" }}>
               
            <StatusBar translucent backgroundColor="transparent" />
            <View style={{ height:RFValue(350)  }}>
                <ImageBackground
                    style={{
                        height: '100%', width: '100%', resizeMode: 'cover'
                    }}
                    source={Background}
                    imageStyle={{ opacity: 1 }}
                >
                    <View style={{flexDirection:"row",height: RFValue(30)  , 
                    alignSelf:'flex-end',marginTop:RFValue(50),marginRight:RFValue(15)}}>
                <TouchableOpacity
                onPress={()=>{this.props.navigation.navigate('Scan')}}
                >   
                     <Image
            style={{ resizeMode: 'contain',  height: RFValue(30), width: RFValue(30) , alignSelf:'flex-end', marginRight:RFValue(15)}}
            source={Scan}>


        </Image>
        <Text style={{alignSelf:"center",alignSelf:'flex-end',fontSize:RFValue(14),marginRight:RFValue(15),fontFamily:'Helvetica Neue',color:'#deb459'}}>
           Scan
        </Text>
        </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{this.props.navigation.navigate('SellerOrders')}}
                >   
                     <Image
            style={{ resizeMode: 'contain',  height: RFValue(30), width: RFValue(30) , alignSelf:'flex-end', marginRight:RFValue(10)}}
            source={Orders}>


        </Image>
        <Text style={{alignSelf:"center",alignSelf:'flex-end',fontSize:RFValue(14),marginRight:RFValue(5),fontFamily:'Helvetica Neue',color:'#deb459'}}>
           Orders
        </Text>
        </TouchableOpacity>
        </View>
                    <Image
                        style={{ resizeMode: 'contain', alignSelf: "center", marginTop: RFValue( 0) }}
                        source={Logo}>


                    </Image>
                    <Text style={{alignSelf:"center",marginTop:RFValue(20),marginBottom:RFValue(20),fontSize:RFValue(25),fontFamily:'Helvetica Neue',color:'#deb459'}}>
           Meal Time
        </Text>
      
        <View style={{backgroundColor:'white',flexDirection:'row',width:RFValue(300),
     height:RFValue(35),borderRadius:15,alignSelf:"center"
       ,marginTop:RFValue(50)}}>
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

            <View style={{    backgroundColor: '#F3F4FC' }}>
                <View style={{ flexDirection: "row" , width: RFValue(230), marginTop: RFValue(15) , 
                flexWrap: "wrap", alignSelf: "center" }}>
                  
                    <TouchableOpacity
                      onPress={()=>{this.props.navigation.navigate('SellerDashboard2')}}
                    >
                        <Image
                            style={{ resizeMode: 'contain',  height:RFValue(120) ,width:RFValue(115)   }}
                            source={Group1}>


                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity
            >
                        <Image
                            style={{ resizeMode: 'contain',  height:RFValue(120) ,width:RFValue(115) }}
                            source={Group2}>


                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{ resizeMode: 'contain', alignSelf: "center" ,  height:RFValue(120) ,width:RFValue(115) ,marginTop:RFValue(-2)}}
                            source={Group4}>


                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{ resizeMode: 'contain', alignSelf: "center",  height:RFValue(120) ,width:RFValue(115) ,marginTop:RFValue(-2) }}
                            source={Group3}>


                        </Image>
                    </TouchableOpacity>


                </View>
                <TouchableOpacity style={{zIndex:50, marginTop: RFValue( -26)}}
                       onPress={()=>{this.props.navigation.navigate('CreateAd')}}
                >
                <Image
                        style={{ resizeMode: 'contain', alignSelf: "center",width:RFValue(50)
                        ,height:RFValue(50) }}
                        source={Add}>


                    </Image>
                    </TouchableOpacity>
                    <View style={{flexDirection:"row",alignSelf:'center' }}>
          
          <TouchableOpacity
          onPress={()=>{
           this.Home=true
           this.Notification=false
           this.Message=false
           this.User=false    
           this.props.navigation.navigate('SellerHome') 
          this.forceUpdate()
          }}
          style = {{
           borderRadius:RFValue(50),
           height:RFValue(70) ,width:RFValue(70) ,
           backgroundColor:this.Home?'#000000':'#F3F4FC',
           margin:RFValue(5),
           justifyContent:'center'
          }}
          underlayColor = '#ccc'
          > 
                       <Image
                                   style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(32) ,width:RFValue(32)  }}
                                   source={this.Home?Home1:HomeB}>
          
          
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
           backgroundColor:this.Notification?'#000000':'#F3F4FC',
           margin:RFValue(5),
           justifyContent:'center'
          }}
          underlayColor = '#ccc'>
                               <Image
                                   style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(32) ,width:RFValue(32)   }}
                                   source={this.Notification? NotificationG:Notification1}>
          
          
                               </Image>
                               </TouchableOpacity>
                            
                               <TouchableOpacity
                                onPress={()=>{
                                   this.Home=false
                                   this.Notification=false
                                   this.Message=true
                                   this.User=false    
                                   this.props.navigation.navigate('SellerMessage') 
                                   this.forceUpdate()
                               }}
          style = {{
           borderRadius:RFValue(50),
           height:RFValue(70) ,width:RFValue(70) ,
           backgroundColor:this.Message?'#000000':'#F3F4FC',
           margin:RFValue(5),
           justifyContent:'center'
          }}
          underlayColor = '#ccc'>
                               <Image
                                   style={{ resizeMode: 'contain',alignSelf:"center",height:RFValue(32) ,width:RFValue(32)  }}
                                   source={this.Message?MessageG:Message1}>
          
          
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
           backgroundColor:this.User?'#000000':'#F3F4FC',
           margin:RFValue(5),
           justifyContent:'center'
          }}
          underlayColor = '#ccc'>
                               <Image
                                   style={{ resizeMode: 'contain',alignSelf:"center",height:RFValue(32) ,width:RFValue(32)   }}
                                   source={this.User?UserG:User1}>
          
          
                               </Image>
          
                               </TouchableOpacity>
                       </View>
            </View>
       
        </View>

    )}
}

const styles = StyleSheet.create({})
