import React from 'react'
import { StatusBar,StyleSheet, Text, View,Image ,ImageBackground,TextInput,TouchableOpacity} from 'react-native'
import Logo from '../Images/Signup/Path430.png'
import Background from '../Images/Signup/MaskGroup1.png'
import Button from '../Images/Signup/Rectangle131.png'
import Location from '../Images/Signup/Iconmaterial-my-location.png'
import Eye from '../Images/Signup/Iconfeather-eye.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 
 
var radio_props = [
    {label: 'param1', value: -1 },
     
  ];
export default function ResetPassword({navigation}) {
    return (
       <View style={{backgroundColor:'#000000',}}>
          <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground
            style={{
                height:'100%',width:'100%',resizeMode: 'cover'}}
            source={Background}
            imageStyle={{opacity:0.32}}
            >
               
 <Image
            style={{resizeMode:'contain' ,alignSelf:"center",marginTop:RFValue(100)}}
            source={Logo}>


            </Image>
           
            <Text style={{alignSelf:"center",marginTop:RFValue(80),fontSize:RFValue(25),fontFamily:'Helvetica Neue',color:'#deb459'}}>
                Reset Password
            </Text>
            <TextInput
            placeholder='Enter New Password' 
            placeholderTextColor={'#f7c148'}
            
          style={{marginTop:RFValue(70),color:'#deb459',borderBottomColor:'#deb459',borderBottomWidth:1,width:RFValue(250),alignSelf:"center"}}
            ></TextInput>
            <View 
            style={{width:RFValue(250),alignSelf:'center',flexDirection:"row",marginTop:RFValue(20),borderBottomColor:'#deb459',borderBottomWidth:1}}>
            <TextInput
            placeholder='Confirm Password' 
            placeholderTextColor={'#deb459'}
            
          style={{color:'#deb459',width:RFValue(230),alignSelf:"center"}}
            >


            </TextInput>
            <TouchableOpacity style={{width:RFValue(20),height:RFValue(20) ,alignSelf:"center"}}>
            <Image
            style={{resizeMode:'contain',width:RFValue(20),height:RFValue(20) ,alignSelf:"center",marginTop:RFValue(0)}}
            source={Eye}>
            </Image>
            </TouchableOpacity>
            </View> 
            <View style={{flexDirection:"row",justifyContent:'center'
            ,marginLeft:RFValue(0),marginTop:RFValue(20),marginBottom:RFValue(30)}}> 
            
            <TouchableOpacity     
    onPress={()=>{navigation.navigate('Dashboard' )}}   

             style={{ justifyContent:"center",height:RFValue(35),width:RFValue(120)
             ,marginTop:RFValue(5),height:RFValue(40),alignSelf:"center" }}>
            <ImageBackground
            style={{ resizeMode:'contain' ,justifyContent:"center"}}
            source={Button}
            imageStyle={{width:RFValue(120),height:RFValue(35),borderRadius:40}}
      
            >

<Text style={{alignSelf:"center",fontSize:RFValue(14),fontFamily:'Helvetica Neue',marginTop:RFValue(5)}}> Confirm</Text>
            </ImageBackground>
            </TouchableOpacity>
            
        </View>       
          
        </ImageBackground>
            </View>
      
    )
}

const styles = StyleSheet.create({})
