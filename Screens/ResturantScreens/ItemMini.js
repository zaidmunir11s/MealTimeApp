import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { View,Image,TouchableOpacity, Text } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export default function ItemMini(props) {
    return (
        <View 
        style={{marginHorizontal:RFValue(10),marginVertical:RFValue(10),height:RFValue(150),borderRadius:RFValue(20)
            ,width:RFValue(150)}}
        >
  
     <LinearGradient
 
 colors={["#FFC64B" ,"#80662C"  ]}
 
  
   style={{height:RFValue(150),borderRadius:RFValue(20)
    ,width:RFValue(150)}}
  > 
     <Image
                            style={{ resizeMode: 'contain'   
                            ,alignSelf:"flex-start",
                            height:RFValue(92.5) ,width:RFValue(150)  }}
                            source={props.image}>

                        </Image>
                        <Text style={{marginLeft:RFValue(20)  ,fontWeight:'bold',
                        fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'black'}}>
             {props.title}
</Text>
<View style={{flexDirection:"row"}}>
<Text style={{marginLeft:RFValue(20)  ,fontWeight:'bold',
                        fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'black'}}>
       {props.price}      
</Text>    
 
</View>
</LinearGradient>
 
        </View>
    )
}
