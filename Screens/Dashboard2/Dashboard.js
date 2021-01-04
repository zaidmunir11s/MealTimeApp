import React from 'react'
import {KeyboardAvoidingView ,ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
 
import Background from '../../Images/Dashboard/Path551.png'
 
 
 
import userImage from '../../Images/Dashboard/Orders/Group517.png'
 import Reviews from './Reviews'
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
import user from '../../Images/Dashboard2/Reviews/photo.png'
import user2 from '../../Images/Dashboard2/Reviews/user2.png'
import photo1 from '../../Images/Dashboard2/Photos/1.png'
import photo2 from '../../Images/Dashboard2/Photos/2.png'
import photo3 from '../../Images/Dashboard2/Photos/3.png'
import photo4 from '../../Images/Dashboard2/Photos/4.png'
import photo5 from '../../Images/Dashboard2/Photos/5.png'
import photo6 from '../../Images/Dashboard2/Photos/6.png'
import rice from '../../Images/Dashboard2/Reviews/rice.png'
import user3 from '../../Images/Dashboard2/Reviews/user3.png'
import plus from '../../Images/Dashboard/Message/Group403.png'
import send from '../../Images/Dashboard/Message/send-plane-2-fill.png'
import drawer from '../../Images/Dashboard2/Reviews/Group512.png'

import Background2 from '../../Images/Dashboard2/Group511.png'
import MealTime from '../../Images/Dashboard2/Group509.png'
import follow from '../../Images/Dashboard2/follow.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
 

export default class User extends React.Component {
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
                            style={{ resizeMode: 'contain',alignSelf:"center",marginLeft:RFValue(10),
                             height:RFValue(20) ,width:RFValue(20),marginTop:RFValue(50)  }}
                            source={back}>


                        </Image>
                      
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center",marginRight:RFValue(10),
                             height:RFValue(20) ,width:RFValue(20),marginTop:RFValue(50)  }}
                            source={drawer}>


                        </Image>
                        </TouchableOpacity>
 

            </View>
  
    </ImageBackground>
            </View>
            <View style={{ height:RFValue(150),backgroundColor: '#000000'  }}>
       
         
       <ImageBackground
               style={{
                   height: '100%', width: '100%', resizeMode: 'cover'
               }}
               source={Background2}
               imageStyle={{ opacity: 1 }}
           >
   <View style={{backgroundColor:'white',height:RFValue(100),width:RFValue(200),alignSelf:"center",marginTop:RFValue(-20)}}>
   <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(80) ,width:RFValue(180)  }}
                            source={MealTime}>

                        </Image>
                        <Image
                            style={{ resizeMode: 'contain',alignSelf:"flex-start",marginLeft:RFValue(15),marginTop:RFValue(-15), height:RFValue(20) ,width:RFValue(40)  }}
                            source={follow}>

                        </Image>
   </View>

</ImageBackground>
       </View>
    
    
            <LinearGradient
 
 colors={["#141414",'#2D2D2D', "#474747"]}
 start={{ x: 1, y: 0.1 }}
  
  style={{height:RFValue(640)}}
  >
      
              <View style={{ flexDirection: "row" , height:RFValue(40),justifyContent:"space-evenly",backgroundColor:'transparent',
                width: RFValue(280), marginTop: RFValue(10) ,margin:RFValue(0), alignSelf: "center" }}>
                     <LinearGradient
 
 colors={[this.Reviews?"#FFC64B":"transparent",this.Reviews?"#80662C":"transparent" ]}
 
  
   style={{width:RFValue(100),height:RFValue(30),borderRadius:15}}
  >
         <TouchableOpacity 
                  onPress={()=>{this.Reviews=true
                    this.Photos=false
                    this.Chat=false
                    this.Menu=false
                    this.forceUpdate()
                    }}
                 style={{width:RFValue(100),height:RFValue(30),borderRadius:15,backgroundColor:'transparent',marginLeft:RFValue(-7)}}>
                 <Text style={{alignSelf:"center" , marginTop:RFValue(5)
        ,fontSize:RFValue(15),fontFamily:'Helvetica Neue',fontWeight:'bold',color:this.Reviews?'black':'#deb459'}}>
             Reviews
            </Text>
                 </TouchableOpacity>
                 </LinearGradient>
                 <LinearGradient
 
 colors={[this.Chat?"#FFC64B":"transparent",this.Chat?"#80662C":"transparent" ]}
 
  
   style={{width:RFValue(100),height:RFValue(30),borderRadius:15}}
  >
                 <TouchableOpacity 
                  onPress={()=>{this.Reviews=false
                    this.Photos=false
                    this.Chat=true
                    this.Menu=false
                    this.forceUpdate()
                    }}
                 style={{width:RFValue(100),height:RFValue(30),borderRadius:15,backgroundColor:'transparent'}}>
                 <Text style={{alignSelf:"center" , marginTop:RFValue(5)
        ,fontSize:RFValue(15),fontFamily:'Helvetica Neue',fontWeight:'bold',color:this.Chat?'black':'#deb459'}}>
             Chat
            </Text>
                 </TouchableOpacity>
                 </LinearGradient>
                 <LinearGradient
 
 colors={[this.Photos?"#FFC64B":"transparent",this.Photos?"#80662C":"transparent" ]}
 
  
   style={{width:RFValue(100),height:RFValue(30),borderRadius:15}}
  >

                 <TouchableOpacity 
                  onPress={()=>{this.Reviews=false
                    this.Chat=false
                    this.Photos=true
                    this.Menu=false
                    this.forceUpdate()
                    }}
                 style={{width:RFValue(100),height:RFValue(30),borderRadius:15,backgroundColor:'transparent'}}>
                 <Text style={{alignSelf:"center" , marginTop:RFValue(5)
        ,fontSize:RFValue(15),fontFamily:'Helvetica Neue',fontWeight:'bold',color:this.Photos?'black':'#deb459'}}>
             Photos
            </Text>
                 </TouchableOpacity>
                 </LinearGradient>
                 <LinearGradient
 
 colors={[this.Menu?"#FFC64B":"transparent",this.Menu?"#80662C":"transparent" ]}
 
  
   style={{width:RFValue(100),height:RFValue(30),borderRadius:15}}
  >
        
                 <TouchableOpacity 
                  onPress={()=>{this.Reviews=true
                    this.Chat=false
                    this.Photos=false
                    this.Menu=false
                    this.forceUpdate()
                    this.props.navigation.navigate('Menu')
                    }}
                 style={{width:RFValue(100),height:RFValue(30),borderRadius:15,backgroundColor:'transparent'}}>
                 <Text style={{alignSelf:"center" , marginTop:RFValue(5)
        ,fontSize:RFValue(15),fontFamily:'Helvetica Neue',fontWeight:'bold',color:this.Menu?'black':'#deb459'}}>
             Menu
            </Text>
                 </TouchableOpacity>
   
                 </LinearGradient>
                
             

                </View>
        
            
               { this.Reviews? <View style={{flexDirection:"column",alignSelf:'center',height:RFValue(200),marginTop:RFValue(0) }}>
  <Reviews></Reviews>
  <Reviews></Reviews>
  <Reviews></Reviews>
  <Reviews></Reviews>
  <Reviews></Reviews>
                </View>:null}

                { this.Chat? <View style={{flexDirection:"column",alignSelf:'center' ,width:'100%',heigh:'100%'
                ,marginTop:RFValue(0) }}>
   <View style={{alignSelf:'flex-start',flexDirection:"row",margin:RFValue(5)}}>
       <Image
                            style={{ resizeMode: 'contain' , height:RFValue(32) ,width:RFValue(32)  }}
                            source={user}>


                        </Image>
                        <View style={{margin:RFValue(5),backgroundColor:'white',width:'auto',height:'auto',borderRadius:RFValue(5),borderTopLeftRadius:0}}>
                            <Text style={{alignSelf:"center",padding :RFValue(5)}}> Very Yummy!!</Text>

                        </View>
                      
       </View>
       <Image
                            style={{ resizeMode: 'contain',marginLeft:RFValue(40),marginTop:RFValue(-20) , 
                            height:RFValue(100) ,width:RFValue(100)  }}
                            source={rice}>


                        </Image>
       <View style={{alignSelf:'flex-end',flexDirection:"row-reverse",margin:RFValue(5)}}>
       <Image
                            style={{ resizeMode: 'contain' , height:RFValue(32) ,width:RFValue(32)  }}
                            source={user2}>


                        </Image>
                        <View style={{margin:RFValue(5),backgroundColor:'white',width:'auto',height:'auto',
                        borderRadius:RFValue(5),borderTopRightRadius:0}}>
                            <Text style={{alignSelf:"center",padding :RFValue(5)}}> Really! What is the name of dish?</Text>
                        </View>
       </View>
       <View style={{alignSelf:'flex-end',flexDirection:"row-reverse",margin:RFValue(5)}}>
       <Image
                            style={{ resizeMode: 'contain' , height:RFValue(32) ,width:RFValue(32)  }}
                            source={user3}>


                        </Image>
                        <View style={{margin:RFValue(5),backgroundColor:'white',width:'auto',height:'auto',
                        borderRadius:RFValue(5),borderTopRightRadius:0}}>
                            <Text style={{alignSelf:"center",padding :RFValue(5)}}> ...</Text>
                        </View>
       </View>
   
       <View style={{ flexDirection: "row" ,marginTop:RFValue(120),
                width: '100%' ,height:RFValue(75),backgroundColor:'black',justifyContent:"space-between" }}>
         <TouchableOpacity style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(25) ,width:RFValue(25)   }}>  
                 <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(25) ,width:RFValue(25)   }}
                            source={plus}>


                        </Image>
                        </TouchableOpacity>
              <Text style={{alignSelf:"center" ,width:RFValue(200)  ,fontSize:RFValue(10),fontFamily:'Helvetica Neue',color:'#deb459'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e
</Text>
<TouchableOpacity   style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(25) ,width:RFValue(25)   }}>
<Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(25) ,width:RFValue(25)   }}
                            source={send}>


                        </Image>
                        </TouchableOpacity>
                </View>
                </View>:null}

               { this.Photos? <View style={{flexDirection:"row",alignSelf:'center',justifyContent:"space-evenly"
               ,height:'100%',width:'100%',marginTop:RFValue(0) ,flexWrap:"wrap"}}>
            
            <Image
                            style={{ resizeMode: 'contain'   
                            ,alignSelf:"center",
                            height:RFValue(150) ,width:RFValue(150)  }}
                            source={photo2}>


                        </Image>
                        <Image
                            style={{ resizeMode: 'contain'   ,
                            height:RFValue(150) ,width:RFValue(150)  }}
                            source={photo2}>


                        </Image>
                        <Image
                            style={{ resizeMode: 'contain'  ,  
                            height:RFValue(150) ,width:RFValue(150),marginTop:RFValue(-40)  }}
                            source={photo3}>


                        </Image>
                        <Image
                            style={{ resizeMode: 'contain'  , 
                            height:RFValue(150) ,width:RFValue(150) ,marginTop:RFValue(-40)   }}
                            source={photo4}>


                        </Image>
                        <Image
                            style={{ resizeMode: 'contain'  , 
                            height:RFValue(150) ,width:RFValue(150),marginTop:RFValue(-40)    }}
                            source={photo5}>


                        </Image>
                        <Image
                            style={{ resizeMode: 'contain'  ,  
                            height:RFValue(150) ,width:RFValue(150) ,marginTop:RFValue(-40)   }}
                            source={photo6}>


                        </Image>
                        
                </View>:null} 
                </LinearGradient>
       
        </View>

    )}
}

const styles = StyleSheet.create({})


