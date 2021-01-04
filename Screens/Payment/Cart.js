import React from 'react'
import {KeyboardAvoidingView ,ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
  
import Background from '../../Images/Dashboard/Path551.png'
import edit from '../../Images/Cart/Path3248.png'
import bin from '../../Images/Cart/bin.png'
import biryani from '../../Images/Cart/biryani.png'
 
import Rect from '../../Images/Cart/Path3790.png'
 
 
import Notification1 from '../../Images/Dashboard/Notification1.png'
import Message1 from '../../Images/Dashboard/Message1.png'
import User1 from '../../Images/Dashboard/User1.png'
import Home1 from '../../Images/Dashboard/Home1.png'
import NotificationG from '../../Images/Dashboard/NotificationG.png'
import MessageG from '../../Images/Dashboard/MessageG.png'
import UserG from '../../Images/Dashboard/UserG.png'
import HomeB from '../../Images/Dashboard/HomeB.png'
 
import LinearGradient from 'react-native-linear-gradient';
 
import back from '../../Images/Dashboard/Message/back.png'
 
import drawer from '../../Images/Dashboard2/Menu/Group153.png'

import Background2 from '../../Images/Dashboard2/Group511.png'
import MealTime from '../../Images/Dashboard2/Group509.png'
import follow from '../../Images/Dashboard2/follow.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
 
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import ThankYou from '../../Images/Payment/Path593.png'
import flag from '../../Images/Payment/wallet.png'
 
var radio_props = [
    {label: 'param1', value: -1 },
     
  ];



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
    }
    renderNavigation(){

    }
render(){
    return (
        
        <View style={{ flex: 1 }}>
               <StatusBar translucent backgroundColor="transparent" />     
           
            <View style={{ height:RFValue(150),backgroundColor: '#000000'   }}>
       
         
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
                             height:RFValue(20) ,width:RFValue(20),marginTop:RFValue(80)  }}
                            source={back}>


                        </Image>
                      
                        </TouchableOpacity>
                        <Text style={{marginRight:RFValue(150)  ,fontWeight:'bold',
                        fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'white',marginTop:RFValue(75)}}>
Contact     
</Text> 
                        
 

            </View>
  
    </ImageBackground>
            </View>
     
    
    
            <LinearGradient
 
 colors={["#141414",'#2D2D2D', "#474747"]}
 start={{ x: 1, y: 0.1 }}
  
  style={{height:RFValue(640)}}
  >
      
      <View style={{flexDirection:"column",alignSelf:'center'  
               ,height:RFValue(450),width:RFValue(350),marginTop:RFValue(0) }}>
              
 
           
<View 
            style={{width:RFValue(350),alignSelf:'center',flexDirection:"row",marginTop:RFValue(40) ,height:RFValue(50),
            borderBottomColor:'#deb459',height:RFValue(100),borderWidth:0}}>
          
       
  <Image
                            style={{ resizeMode: 'contain',alignSelf:"center",marginLeft:RFValue(10),
                             height:RFValue(150) ,width:RFValue(100),marginTop:RFValue(80)  }}
                            source={biryani}>


                        </Image>

               
                  <View style={{width:RFValue(130),alignSelf:"center"
               ,marginLeft:RFValue(10) ,borderBottomColor:'#f7c148', marginTop:RFValue(50),
             borderBottomWidth:RFValue(0) 
                }}>   
            
                <Text
             
            
                style={{color:'#deb459',width:'auto',alignSelf:"flex-start",fontSize:RFValue(18),height:RFValue(20),
               marginLeft:RFValue(0)}}
                  >
                     Chicken Biryani
                  </Text>
                  <Text
             
            
             style={{color:'#deb459',width:'auto',alignSelf:"flex-start",fontSize:RFValue(18),height:RFValue(20),
             marginTop:RFValue(0),marginLeft:RFValue(0)}}
               >
                  SR 9.99
               </Text>

               <LinearGradient
 
 colors={["#FFC64B" ,"#80662C"  ]}
 
  
   style={{width:RFValue(80),height:RFValue(30),borderRadius:RFValue(30),marginTop:RFValue(10)}}
  >

               <View style={{flexDirection:"row",marginLeft:RFValue(0),width:RFValue(80),height:RFValue(30)}}>
          <TouchableOpacity 
             onPress={()=>{ this.NoOfPersons++
                this.forceUpdate()
                }}
          style={{width:RFValue(15),height:RFValue(15) ,backgroundColor:'#FFC64B',marginTop:RFValue(7),marginLeft:RFValue(10)
          ,elevation:5,borderRadius:RFValue(10)}}>
          <Text style={{ fontWeight:'bold',alignSelf:"center",marginTop:RFValue(-5),
                        fontSize:RFValue(18),fontFamily:'Helvetica Neue',color:'white'}}>
+
</Text>
          </TouchableOpacity>
          <Text style={{ fontWeight:'bold',alignSelf:"center",marginTop:RFValue(2),marginLeft:RFValue(10),
                        fontSize:RFValue(18),fontFamily:'Helvetica Neue',color:'white' }}>
{this.NoOfPersons} 
</Text>  
<TouchableOpacity 
   onPress={()=>{ this.NoOfPersons--
    this.forceUpdate()
    }}
style={{width:RFValue(15),height:RFValue(15) ,backgroundColor:'#FFC64B',marginTop:RFValue(7),marginLeft:RFValue(10)
          ,elevation:5,borderRadius:RFValue(10)}}>
          <Text style={{ fontWeight:'bold',alignSelf:"center",marginTop:RFValue(-6),
                        fontSize:RFValue(18),fontFamily:'Helvetica Neue',color:'white'}}>
-
</Text>
          </TouchableOpacity>

</View>
           
</LinearGradient>


            
                </View>
                <View style={{width:RFValue(50),height:RFValue(100),marginTop:RFValue(30),marginLeft:RFValue(30)}}>
                    
                <ImageBackground
                    style={{
                        height: RFValue(50), width: RFValue(30), resizeMode: 'cover',justifyContent:"center"
                    }}
                    source={Rect}
                    imageStyle={{ opacity: 1 }}
                >
                 <TouchableOpacity>
                 <Image
                            style={{ resizeMode: 'contain',alignSelf:"center",marginLeft:RFValue(0),
                             height:RFValue(20) ,width:RFValue(20),marginTop:RFValue(0)  }}
                            source={bin}>


                        </Image>
                      
                        </TouchableOpacity>
                        </ImageBackground>
                        <ImageBackground
                    style={{
                        height: RFValue(50), width: RFValue(30), resizeMode: 'cover',justifyContent:"center",marginTop:RFValue(5)
                    }}
                    source={Rect}
                    imageStyle={{ opacity: 1 }}
                >
                 <TouchableOpacity>
                 <Image
                            style={{ resizeMode: 'contain',alignSelf:"center",marginLeft:RFValue(0),
                             height:RFValue(20) ,width:RFValue(20),marginTop:RFValue(0)  }}
                            source={edit}>


                        </Image>
                      
                        </TouchableOpacity>
                        </ImageBackground>


                    </View>     
             </View>
             <LinearGradient
 
 colors={["#FFC64B" ,"#80662C"  ]}
 
  
   style={{width:RFValue(120),height:RFValue(50),borderRadius:RFValue(30),alignSelf:"center",marginTop:RFValue(80)}}
  >
<TouchableOpacity

onPress={()=>{this.props.navigation.navigate('Reservation')}}
style={{ width:RFValue(120),height:RFValue(50),borderRadius:RFValue(30),justifyContent:"center"}}>
<Text style={{ 
                   alignSelf:"center",     fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'black' }}>
 Book 
</Text>  
</TouchableOpacity>
</LinearGradient>
            
                  </View>


            
                </LinearGradient>
       
        </View>

    )}
}

const styles = StyleSheet.create({})


