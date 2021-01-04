import React from 'react'
import { StatusBar,StyleSheet, Text, View,Image ,ImageBackground,TextInput,TouchableOpacity} from 'react-native'
 
import Icon1 from '../../Images/Dashboard/User/1.png'
import Icon2 from '../../Images/Dashboard/User/2.png'
import Icon3 from '../../Images/Dashboard/User/3.png'
import Icon4 from '../../Images/Dashboard/User/4.png'
import Icon5 from '../../Images/Dashboard/User/5.png'

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function MiniView() {
    return (
        <View style={{height:RFValue(200),width:RFValue(265),alignSelf:"center",flexWrap:"wrap",
        backgroundColor:'transparent',flexDirection:"row"}}>
       <TouchableOpacity style={{height:RFValue(80) ,width:RFValue(80) 
            ,alignSelf:"center",justifyContent:"center",backgroundColor:'transparent' }}>
        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:'100%' ,width:'100%' }}
                            source={Icon1}>


                        </Image>
        </TouchableOpacity>  
        <TouchableOpacity style={{height:RFValue(80) ,width:RFValue(80),marginLeft:RFValue(10)
            ,alignSelf:"center",justifyContent:"center",backgroundColor:'transparent' }}>
        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:'100%' ,width:'100%' }}
                            source={Icon2}>


                        </Image>
        </TouchableOpacity> 
         <TouchableOpacity style={{height:RFValue(80) ,width:RFValue(80),marginLeft:RFValue(10)
            ,alignSelf:"center",justifyContent:"center",backgroundColor:'transparent' }}>
        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:'100%' ,width:'100%' }}
                            source={Icon3}>


                        </Image>
        </TouchableOpacity>
        <TouchableOpacity style={{height:RFValue(80) ,width:RFValue(80) ,marginTop:RFValue(20)
            ,alignSelf:"center",justifyContent:"center",backgroundColor:'transparent' }}>
        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:'100%' ,width:'100%' }}
                            source={Icon3}>


                        </Image>
        </TouchableOpacity>
        <TouchableOpacity style={{height:RFValue(80) ,width:RFValue(80),marginLeft:RFValue(10),marginTop:RFValue(20)
            ,alignSelf:"center",justifyContent:"center",backgroundColor:'transparent' }}>
        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:'100%' ,width:'100%' }}
                            source={Icon4}>


                        </Image>
        </TouchableOpacity>
        <TouchableOpacity style={{height:RFValue(80) ,width:RFValue(80),marginLeft:RFValue(10),marginTop:RFValue(20)
            ,alignSelf:"center",justifyContent:"center",backgroundColor:'transparent' }}>
        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", height:'100%' ,width:'100%' }}
                            source={Icon5}>


                        </Image>
        </TouchableOpacity>
        
        
       
    
        </View>
    )
}
