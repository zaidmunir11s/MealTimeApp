import React from 'react'
import {KeyboardAvoidingView ,ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
 
import Background from '../../Images/Dashboard/Path551.png'
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
    }
    renderNavigation(){

    }
render(){
    return (
        
        <View style={{ flex: 1 }}>
               <StatusBar translucent backgroundColor="transparent" />     
           
            <View style={{ height:RFValue(100),backgroundColor: '#000000'   }}>
       
         
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
                             height:RFValue(20) ,width:RFValue(20),marginTop:RFValue(60)  }}
                            source={back}>


                        </Image>
                      
                        </TouchableOpacity>
                        <Text style={{marginLeft:RFValue(20)  ,fontWeight:'bold',marginRight:RFValue(150),
                        fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'white',marginTop:RFValue(50)}}>
 Menu     
</Text> 
                 
 

            </View>
  
    </ImageBackground>
            </View>
     
    
    
            <LinearGradient
 
 colors={["#141414",'#2D2D2D', "#474747"]}
 start={{ x: 1, y: 0.1 }}
  
  style={{height:RFValue(640)}}
  >
      
      <View style={{flexDirection:"row",alignSelf:'center' ,justifyContent:"center"
               ,width:RFValue(350),marginTop:RFValue(0) ,flexWrap:"wrap"}}>
            

          <TouchableOpacity  


          onPress={()=>{this.props.navigation.navigate('SellerItemFull')}}
          >
            <ItemMini image={photo2} price={'SR 9.99'} title={ 'Manchurrian'}></ItemMini>
            </TouchableOpacity>

            <TouchableOpacity  
         
          onPress={()=>{this.props.navigation.navigate('SellerItemFull')}}
          >
 
            <ItemMini image={photo3} price={'SR 9.99'} title={ 'Salad'}></ItemMini>
            </TouchableOpacity>
            <TouchableOpacity  
          onPress={()=>{this.props.navigation.navigate('SellerItemFull')}}
          >

            <ItemMini image={photo4} price={'SR 9.99'} title={ 'Club Sandwich'}></ItemMini>
            </TouchableOpacity>
            <TouchableOpacity  
          onPress={()=>{this.props.navigation.navigate('SellerItemFull')}}
          >

            <ItemMini image={photo2} price={'SR 9.99'} title={ 'Manchurrian'}></ItemMini>
            </TouchableOpacity>
            <TouchableOpacity  
          onPress={()=>{this.props.navigation.navigate('SellerItemFull')}}
          >

            <ItemMini image={photo2} price={'SR 9.99'} title={ 'Peri Sandwich'}></ItemMini>
            </TouchableOpacity>
            <TouchableOpacity  
          onPress={()=>{this.props.navigation.navigate('SellerItemFull')}}
          >

            <ItemMini image={photo6} price={'SR 9.99'} title={ 'Chicken Biryani'}></ItemMini>
            </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row",alignSelf:'center' }}>
             
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


