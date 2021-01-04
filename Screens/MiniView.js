import React from 'react'
import { StatusBar,StyleSheet, Text, View,Image ,ImageBackground,TextInput,TouchableOpacity} from 'react-native'
import Logo from '../Images/Signup/Path430.png'
import Background from '../Images/Signup/MaskGroup1.png'
import Button from '../Images/Signup/Rectangle131.png'
import Location from '../Images/Signup/Iconmaterial-my-location.png'
import Icon from '../Images/Dashboard/Group559.png'
import LiveChat from '../Images/Dashboard/Union4.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function MiniView() {
    return (
        <View style={{height:RFValue(60),borderRadius:10,width:RFValue(330),alignSelf:"center", margin:RFValue(5),
        backgroundColor:'#FFFFFF',flexDirection:"row",elevation:2}}>
        <TouchableOpacity style={{height:RFValue(50),borderRadius:10,width:RFValue(50)
            ,alignSelf:"center",justifyContent:"center",backgroundColor:'#deb459',marginLeft:RFValue(10)}}>
        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(32) ,width:RFValue(32)  }}
                            source={Icon}>


                        </Image>
        </TouchableOpacity>
        <View>
        <Text style={{alignSelf:"flex-start",marginLeft:RFValue(10),marginTop:RFValue(10)
        ,fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'black'}}>
                Meal Time
            </Text>
            <Text style={{alignSelf:"center",marginLeft:RFValue(10) 
        ,fontSize:RFValue(10),fontFamily:'Helvetica Neue',color:'black'}}>
                Indian Cruise Resturant            </Text>
        </View>
        <ImageBackground
                            style={{ resizeMode: 'contain',justifyContent:"center",
                            alignSelf:"center",marginLeft:RFValue(20), height:RFValue(35) ,width:RFValue(80)  }}
                            source={LiveChat}>
  <Text style={{alignSelf:"center" ,marginBottom:RFValue(10)
        ,fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'#deb459'}}>
               Live Chat
            </Text>

                        </ImageBackground>
        </View>
    )
}
