import React from 'react'
import {KeyboardAvoidingView ,ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
  
import Background from '../../Images/Signup/MaskGroup1.png'
import profile from '../../Images/Payment/profile.png'
import location from '../../Images/Payment/location.png'
import scan from '../../Images/Payment/Path402.png'
import ThankYou from '../../Images/Payment/Path593.png'
import flag from '../../Images/Payment/Group63.png'
 
 
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
        
        <View style={{backgroundColor:'#000000',}}>
               <StatusBar translucent backgroundColor="transparent" />     
           
              
       
         
            <ImageBackground
                    style={{
                        height: '100%', width: '100%', resizeMode: 'cover'
                    }}
                    source={Background}
                    imageStyle={{ opacity: 0.32 }}
                >
        
  
  <TouchableOpacity 
  onPress={()=>{this.props.navigation.goBack()}}
  >
        <Image
                            style={{ resizeMode: 'contain',alignSelf:"flex-start",marginLeft:RFValue(20),
                             height:RFValue(20) ,width:RFValue(20),marginTop:RFValue(80) ,marginBottom:RFValue(80)  }}
                            source={back}>


                        </Image>  
     
                        </TouchableOpacity> 
    
  
      
      <View style={{flexDirection:"column",alignSelf:'center'  
               ,height:'100%',width:RFValue(350),marginTop:RFValue(0) }}>
              

             
              <ImageBackground
            style={{resizeMode:'contain',width:RFValue(100),height:RFValue(100),marginLeft:RFValue(0)  ,alignSelf:"center"
            ,marginTop:RFValue(30)}}
            source={ThankYou}>

<Image
            style={{resizeMode:'contain',width:RFValue(50),height:RFValue(50),marginLeft:RFValue(0)  ,alignSelf:"center"
            ,marginTop:RFValue(30)}}
            source={flag}>
            </Image>
            </ImageBackground>
            <Text style={{marginLeft:RFValue(0)  ,fontWeight:'bold',alignSelf:"center",
                        fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'#f7c148',marginTop:RFValue(10)}}>
Verify your phone number    
</Text> 

<Text style={{marginLeft:RFValue(0)  ,fontWeight:'bold',alignSelf:"center",
                        fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'#f7c148',marginTop:RFValue(0)}}>
Your account will be linked to this phone number    
</Text> 
<View 
            style={{width:RFValue(320),alignSelf:'center',flexDirection:"row",marginTop:RFValue(20),justifyContent:"center",
            borderBottomColor:'#deb459',borderBottomWidth:0}}>
          
          <View style={{flexDirection:"row",justifyContent:'flex-start',width:RFValue(50)
               ,marginLeft:RFValue(10) ,borderBottomColor:'#f7c148',
             borderBottomWidth:RFValue(1),height:RFValue(80),
                }}>
<TextInput  style={{color:'#f7c148'}}
placeholder='+973' 
placeholderTextColor={'white'}
>

</TextInput>

                </View> 
                  <View style={{flexDirection:"row",justifyContent:'flex-start',width:RFValue(50)
               ,marginLeft:RFValue(20) ,borderBottomColor:'#f7c148',
             borderBottomWidth:RFValue(1),height:RFValue(80),
                }}>
<TextInput  style={{color:'#f7c148'}}
placeholder='123' 
placeholderTextColor={'white'}
>

</TextInput>

                </View>
                <View style={{flexDirection:"row",justifyContent:'flex-start',width:RFValue(50)
               ,marginLeft:RFValue(20) ,borderBottomColor:'#f7c148',
             borderBottomWidth:RFValue(1),height:RFValue(80),
                }}>
<TextInput  style={{color:'#f7c148'}}
placeholder='456' 
placeholderTextColor={'white'}
>

</TextInput>

                </View>
                <View style={{flexDirection:"row",justifyContent:'flex-start',width:RFValue(50)
               ,marginLeft:RFValue(20) ,borderBottomColor:'#f7c148',
             borderBottomWidth:RFValue(1),height:RFValue(80),
                }}>
<TextInput  style={{color:'#f7c148'}}
placeholder='456' 
placeholderTextColor={'white'}
>

</TextInput>

                </View>
                <View style={{flexDirection:"row",justifyContent:'flex-start',width:RFValue(30)
               ,marginLeft:RFValue(20) ,borderBottomColor:'#f7c148',
             borderBottomWidth:RFValue(1),height:RFValue(80),
                }}>
<TextInput  style={{color:'#f7c148'}}
placeholder='00' 
placeholderTextColor={'white'}
>

</TextInput>

                </View>

         
          
             </View>
           
              <TouchableOpacity  

onPress={()=>{this.props.navigation.navigate('SignInverify2',
{path:this.props.route.params.path})}}
              style={{width:RFValue(150),height:RFValue(36),backgroundColor:'white',marginTop:RFValue(50),alignSelf:"center"}}
              >
  <Text
             
            
             style={{color:'#F7C148' ,alignSelf:"center",fontSize:RFValue(18),marginTop:RFValue(5)}}
               >
                 Continue
               </Text>

              </TouchableOpacity>
                  </View>
                  </ImageBackground>
       
        </View>

    )}
}

const styles = StyleSheet.create({})


