import React from 'react'
import {KeyboardAvoidingView ,ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
  
import Background from '../../Images/Dashboard/Path551.png'
import profile from '../../Images/Payment/profile.png'
import location from '../../Images/Payment/location.png'
import scan from '../../Images/Payment/Path402.png'
import flag from '../../Images/Payment/bahrain.png'
 
 
import LinearGradient from 'react-native-linear-gradient';
 
import back from '../../Images/Dashboard/Message/back.png'
 
import drawer from '../../Images/Dashboard2/Menu/Group153.png'

import Background2 from '../../Images/Dashboard2/Group511.png'
import MealTime from '../../Images/Dashboard2/Group509.png'
import follow from '../../Images/Dashboard2/follow.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
 
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 
 
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
                        <Text style={{marginLeft:RFValue(20)  ,fontWeight:'bold',
                        fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'white',marginTop:RFValue(75)}}>
Card Information     
</Text> 
                        <TouchableOpacity>
                        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center",marginRight:RFValue(20),
                             height:RFValue(40) ,width:RFValue(40),marginTop:RFValue(70)  }}
                            source={profile}>


                        </Image>
                        </TouchableOpacity>
 

            </View>
  
    </ImageBackground>
            </View>
     
    
    
            <LinearGradient
 
 colors={["#141414",'#2D2D2D', "#474747"]}
 start={{ x: 1, y: 0.1 }}
  
  style={{height:RFValue(640)}}
  >
      
      <View style={{flexDirection:"column",alignSelf:'center'  
               ,height:'100%',width:RFValue(350),marginTop:RFValue(0) }}>
              

             
            
          


               <View style={{flexDirection:"row",justifyContent:'flex-start',width:RFValue(300)
               ,marginLeft:RFValue(20),marginTop:RFValue(30),borderBottomColor:'#f7c148',
             borderBottomWidth:RFValue(1),height:RFValue(80),
               marginBottom:RFValue(10)}}> 
          
           
          <TextInput
            placeholder='Enter Card Number' 
            placeholderTextColor={'#f7c148'}
            
          style={{marginTop:RFValue(20),color:'#deb459' 
          ,width:RFValue(250),alignSelf:"center",height:RFValue(50),fontSize:RFValue(14)}}
            ></TextInput>
      
   
        </View> 


       
<View 
            style={{width:RFValue(320),alignSelf:'center',flexDirection:"row",marginTop:RFValue(20),
            borderBottomColor:'#deb459',borderBottomWidth:0}}>
          
          <View style={{flexDirection:"row",justifyContent:'flex-start',width:RFValue(100)
               ,marginLeft:RFValue(10) ,borderBottomColor:'#f7c148',
             borderBottomWidth:RFValue(1),height:RFValue(80),
                }}>
<TextInput  style={{color:'#f7c148'}}
placeholder='Expire' 
placeholderTextColor={'#f7c148'}
>

</TextInput>

                </View> 
                  <View style={{flexDirection:"row",justifyContent:'flex-start',width:RFValue(100)
               ,marginLeft:RFValue(20) ,borderBottomColor:'#f7c148',
             borderBottomWidth:RFValue(1),height:RFValue(80),
                }}>
<TextInput  style={{color:'#f7c148'}}
placeholder='CVV' 
placeholderTextColor={'#f7c148'}
>

</TextInput>

                </View>
           
             </View>

              <TouchableOpacity  
               onPress={()=>{this.props.navigation.navigate('Payment4')}}
              style={{width:RFValue(150),height:RFValue(36),backgroundColor:'white',marginTop:RFValue(50),alignSelf:"center"}}
              >
  <Text
             
            
             style={{color:'#F7C148' ,alignSelf:"center",fontSize:RFValue(18),marginTop:RFValue(5)}}
               >
                 Add my card
               </Text>

              </TouchableOpacity>
                  </View>
                </LinearGradient>
       
        </View>

    )}
}

const styles = StyleSheet.create({})


