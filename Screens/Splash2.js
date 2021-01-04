import React from 'react'
import {StatusBar, StyleSheet, Text, View,Image ,ImageBackground,TextInput,TouchableOpacity} from 'react-native'
import Logo from '../Images/Signup/Path430.png'
import Background from '../Images/Signup/MaskGroup1.png'
import Button from '../Images/Signup/Rectangle131.png'
import Location from '../Images/Signup/Iconmaterial-my-location.png'
import Eye from '../Images/Signup/Iconfeather-eye.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 
 
 
export default function Splash1({navigation}) {
    setTimeout(
        function() {
           navigation.navigate('Splash3')
        }
        .bind(this),
        2000
      );
    return (
       <View style={{backgroundColor:'#000000',justifyContent:"center"}}>
           <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground
            style={{
                height:'100%',width:'100%',resizeMode: 'cover'}}
            source={Background}
            imageStyle={{opacity:0.32}}
            >
               
 <Image
            style={{resizeMode:'contain' ,alignSelf:"center",marginTop:RFValue(300)}}
            source={Logo}>


            </Image>
            <Text style={{alignSelf:"center",marginTop:RFValue(30),fontSize:RFValue(25),fontFamily:'Helvetica Neue',color:'#deb459'}}>
                Meal Time
            </Text>
         
           
        
            
          
        </ImageBackground>
            </View>
      
    )
}

const styles = StyleSheet.create({})
