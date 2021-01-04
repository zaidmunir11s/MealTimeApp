import React from 'react'
import { StatusBar,StyleSheet, Text, View,Image ,ImageBackground,TextInput,TouchableOpacity} from 'react-native'
 
 
import Icon from '../../Images/Dashboard/Notification/Group393.png'
import LiveChat from '../../Images/Dashboard/Union4.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function MiniNotification() {
    return (
        <View style={{height:RFValue(60),borderRadius:10,width:RFValue(330),alignSelf:"center", margin:RFValue(5),marginBottom:RFValue(10),
        backgroundColor:'transparent',flexDirection:"row" }}>
        <TouchableOpacity style={{height:RFValue(50),borderRadius:50,width:RFValue(50)
            ,alignSelf:"center",justifyContent:"center",backgroundColor:'#deb459',marginLeft:RFValue(10)}}>
        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(32) ,width:RFValue(32)  }}
                            source={Icon}>


                        </Image>
        </TouchableOpacity>
        <View  >
        <Text style={{alignSelf:"flex-start",marginLeft:RFValue(10),marginTop:RFValue(0),width:RFValue(250)
        ,fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'#deb459'}}>
               Reminder: You better be ready!
Your table will be ready at 2:25pm
On Hamza Grill and Shawarma
            </Text>
            <Text style={{alignSelf:"flex-start",marginLeft:RFValue(10) 
        ,fontSize:RFValue(10),fontFamily:'Helvetica Neue',color:'#deb459'}}>
                26 mins          </Text>
        </View>
    
        </View>
    )
}
