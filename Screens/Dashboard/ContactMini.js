import React from 'react'
import { StatusBar,StyleSheet, Text, View,Image ,ImageBackground,TextInput,TouchableOpacity} from 'react-native'
 

import LiveChat from '../../Images/Dashboard/Union4.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function ContactMini(props) {
    return (
        <View style={{height:RFValue(80),borderRadius:0,width:RFValue(310),alignSelf:"center", margin:RFValue(10),
        backgroundColor:'#FFFFFF',flexDirection:"row",elevation:2}}>
        <TouchableOpacity style={{height:RFValue(50),borderRadius:30,width:RFValue(50)
            ,alignSelf:"center",justifyContent:"center",backgroundColor:props.color,marginLeft:RFValue(10)}}>
        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(32) ,width:RFValue(32)  }}
                            source={props.image}>


                        </Image>
        </TouchableOpacity>
        <View style={{alignSelf:'center'}}>
        <Text style={{alignSelf:"center",marginLeft:RFValue(40),marginTop:RFValue(0)
        ,fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'black'}}>
             {props.title}
            </Text>
 
        </View>
        <Text style={{alignSelf:"center",marginLeft:RFValue(50),marginRight:RFValue(10),marginTop:RFValue(0),flexWrap:"wrap",width:RFValue(60)
        ,fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'black'}}>
               {props.time}
            </Text>
      
        </View>
    )
}
