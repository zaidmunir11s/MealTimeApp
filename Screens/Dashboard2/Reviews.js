import React from 'react'
import { StatusBar,StyleSheet, Text, View,Image ,ImageBackground,TextInput,TouchableOpacity} from 'react-native'
 
import user from '../../Images/Dashboard2/Reviews/photo.png'
import LiveChat from '../../Images/Dashboard/Union4.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function Reviews() {
    return (
        <View style={{height:RFValue(70),borderRadius:RFValue(15),width:RFValue(330),alignSelf:"center", margin:RFValue(5),
        backgroundColor:'#FFFFFF',flexDirection:"row",elevation:2}}>
        <TouchableOpacity style={{height:RFValue(50),borderRadius:30,width:RFValue(50)
            ,alignSelf:"center",justifyContent:"center",marginLeft:RFValue(10)}}>
        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(50) ,width:RFValue(50)  }}
                            source={user}>


                        </Image>
        </TouchableOpacity>
        <View style={{alignSelf:'center'}}>
        <Text style={{alignSelf:"flex-start",marginLeft:RFValue(10),marginTop:RFValue(-20),fontWeight:'bold'
        ,fontSize:RFValue(12),fontFamily:'Helvetica Neue',color:'black'}}>
          Jack Holfman
            </Text>
 
       
        <Text style={{alignSelf:"center",marginLeft:RFValue(10),marginTop:RFValue(0)
        ,fontSize:RFValue(8),fontFamily:'Helvetica Neue',color:'black'}}>
               Amazing Services, Highly recommend!
            </Text>
            </View>
        </View>
    )
}
