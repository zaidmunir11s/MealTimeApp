import React from 'react'
import {KeyboardAvoidingView ,ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
 
import Background from '../../Images/Dashboard2/Menu/biryani.png'
import photo2 from '../../Images/Dashboard2/Photos/2.png'
import photo3 from '../../Images/Dashboard2/Photos/3.png'
import photo4 from '../../Images/Dashboard2/Photos/4.png'
import photo5 from '../../Images/Dashboard2/Photos/5.png'
import photo6 from '../../Images/Dashboard2/Photos/6.png'
import Notification1 from '../../Images/Dashboard/Notification1.png'
import Message1 from '../../Images/Dashboard/Message1.png'
import User1 from '../../Images/Dashboard/User1.png'
import Home1 from '../../Images/Dashboard/Home1.png'
import NotificationG from '../../Images/Dashboard/NotificationG.png'
import MessageG from '../../Images/Dashboard/MessageG.png'
import UserG from '../../Images/Dashboard/UserG.png'
import HomeB from '../../Images/Dashboard/HomeB.png'
import bin from '../../Images/Resturant/bin.png'
import edit from '../../Images/Resturant/editIcon.png'
import editBack from '../../Images/Resturant/Path3881.png'
 
 
import userImage from '../../Images/Dashboard/Orders/Group517.png'
 import ItemMini from './ItemMini'
import LinearGradient from 'react-native-linear-gradient';
 
import back from '../../Images/Dashboard/Message/back.png'
 
import drawer from '../../Images/Dashboard2/Menu/Group153.png'

import Background2 from '../../Images/Dashboard2/Group511.png'
import MealTime from '../../Images/Dashboard2/Group509.png'
import follow from '../../Images/Dashboard2/follow.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
 

export default class Menu extends React.Component {
    constructor(){
        super()
        this.Home=true,
        this.Notification=false,
        this.Message=false,
        this.User=false,
        this.Reviews=true
        this.Chat=false
        this.Photos=false
        this.Menu=false
        this.NoOfPersons=1
        this.AddtoCart='Add to Cart'
    }
    renderNavigation(){

    }
render(){
    return (
        
        <View style={{ flex: 1 }}>
               <StatusBar translucent backgroundColor="transparent" />     
           
            <View style={{ height:RFValue(350),backgroundColor: '#000000'   }}>
       
         
            <ImageBackground
                    style={{
                        height: '100%', width: '100%', resizeMode: 'cover'
                    }}
                    source={Background}
                    imageStyle={{ opacity: 1 }}
                >
              <View style={{flexDirection:"row",justifyContent:"space-between",marginRight:RFValue(100),width:'100%'}}>
               <TouchableOpacity
                onPress={()=>{this.props.navigation.goBack()}}
               >
                 <Image
                            style={{ resizeMode: 'contain',alignSelf:"center",marginLeft:RFValue(20),
                             height:RFValue(20) ,width:RFValue(20),marginTop:RFValue(50)  }}
                            source={back}>


                        </Image>
                      
                        </TouchableOpacity>
             <View style={{marginRight:RFValue(10),marginTop:RFValue(60)  }}>  
                                  <TouchableOpacity>
                                       <ImageBackground
                    style={{
                  
                        height:RFValue(40) ,width:RFValue(40) , resizeMode: 'cover',alignSelf:"center"
                    }}
                    source={editBack}
                    imageStyle={{ opacity: 1 }}
                >
                        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center",marginLeft:RFValue(2),
                             height:RFValue(25) ,width:RFValue(25),marginTop:RFValue(5)  }}
                            source={edit}>


                        </Image>
                    
                </ImageBackground>
                </TouchableOpacity>
                        <TouchableOpacity>
                        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", 
                             height:RFValue(40) ,width:RFValue(40),marginTop:RFValue(5)  }}
                            source={bin}>


                        </Image>
                        </TouchableOpacity>
                        </View>

 

            </View>
  
    </ImageBackground>
            </View>
     
    
    
            <LinearGradient
 
 colors={["#141414",'#2D2D2D', "#474747"]}
 start={{ x: 1, y: 0.1 }}
  
  style={{height:RFValue(400)}}
  >
                <Text style={{marginLeft:RFValue(20)  ,fontWeight:'bold',
                        fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'#deb459',marginTop:RFValue(10)}}>
 Recepie Name
</Text>  
<View style={{flexDirection:'row',justifyContent:"space-between"}}>
<Text style={{marginLeft:RFValue(20)  ,fontWeight:'bold',
                        fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'#deb459',marginTop:RFValue(10)}}>
 Price  
</Text>  
 
</View>

<Text style={{margin:RFValue(20)  ,fontWeight:'bold',
                        fontSize:RFValue(12),width:'auto',fontFamily:'Helvetica Neue',color:'#deb459',marginTop:RFValue(10)}}>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e adveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
</Text> 
<View style={{flexDirection:"row",alignSelf:'center',marginTop:RFValue(30) }}>
             
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


