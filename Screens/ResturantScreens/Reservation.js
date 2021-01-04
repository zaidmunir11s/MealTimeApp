import React from 'react'
import {KeyboardAvoidingView ,ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
 
import Background from '../../Images/Dashboard/Path551.png'
import photo2 from '../../Images/Dashboard2/Photos/2.png'
import photo3 from '../../Images/Dashboard2/Photos/3.png'
import photo4 from '../../Images/Dashboard2/Photos/4.png'
import photo5 from '../../Images/Dashboard2/Photos/5.png'
import photo6 from '../../Images/Dashboard2/Photos/6.png'
 
 
import userImage from '../../Images/Dashboard/Orders/Group517.png'
 import ItemMini from './ItemMini'
import LinearGradient from 'react-native-linear-gradient';
 
import back from '../../Images/Dashboard/Message/back.png'
 
import drawer from '../../Images/Dashboard2/Menu/Group153.png'

import Rectangle from '../../Images/Dashboard2/Reservation/Rectangle.png'
import chairLeft from '../../Images/Dashboard2/Reservation/chairLeft.png'
import chairRight from '../../Images/Dashboard2/Reservation/chairRight.png'
import MealTime from '../../Images/Dashboard2/Group509.png'
import follow from '../../Images/Dashboard2/follow.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
 

export default class Reservation extends React.Component {
    constructor(){
        super()
        this.Home=true,
        this.Time1=false,
        this.Time2=false,
        this.Time3=false,
        this.Reviews=true
        this.Chat=false
        this.Photos=false
        this.Menu=false
        this.NoOfPersons=1
    }
    renderNavigation(){

    }
render(){
    return (
        
        <View style={{ flex: 1 }}>
               <StatusBar translucent backgroundColor="transparent" />     
           
            <View style={{ height:RFValue(100),backgroundColor: '#000000'   }}>
       
         
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
                             height:RFValue(20) ,width:RFValue(20),marginTop:RFValue(50)  }}
                            source={back}>


                        </Image>
                      
                        </TouchableOpacity>
                        <Text style={{marginLeft:RFValue(20)  ,fontWeight:'bold',
                        fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'white',marginTop:RFValue(45)}}>
 Menu     
</Text> 
 
                        <TouchableOpacity>
                        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center",marginRight:RFValue(20),
                             height:RFValue(40) ,width:RFValue(40),marginTop:RFValue(50)  }}
                            source={drawer}>


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
      
      <View style={{flexDirection:"row",alignSelf:'center' 
               ,height:RFValue(300),width:'100%',marginTop:RFValue(0),justifyContent:"center" }}>
      <View  style={{width:RFValue(250),height:RFValue(250),borderRadius:RFValue(200),marginTop:RFValue(50),flexDirection:"row",
        alignSelf:"flex-start",backgroundColor:'white',justifyContent:"center"}}>
 
 <View style={{height:RFValue(100) ,width:RFValue(40) ,marginTop:RFValue(80),}}>    
                     {this.NoOfPersons>=1?   
     <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", 
                             height:RFValue(40) ,width:RFValue(40)  }}
                            source={chairLeft}>


                        </Image>:null}
                        {this.NoOfPersons>=2?   <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", 
                             height:RFValue(40) ,width:RFValue(40),marginTop:RFValue(10)  }}
                            source={chairLeft}>


                        </Image>:null}
                        </View>

   <Image
                            style={{ resizeMode: 'contain',alignSelf:"center",marginRight:RFValue(40),
                             height:RFValue(150) ,width:RFValue(100),marginTop:RFValue(0)  }}
                            source={Rectangle}>


                        </Image>
                     <View style={{height:RFValue(100) ,width:RFValue(40) ,marginLeft:RFValue(-40),}}>    
                     {this.NoOfPersons>=3?    <Image
                            style={{ resizeMode: 'contain',alignSelf:"center",
                             height:RFValue(40) ,width:RFValue(40),marginTop:RFValue(80)  }}
                            source={chairRight}>


                        </Image>:null}
                        {this.NoOfPersons>=4?       <Image
                            style={{ resizeMode: 'contain',alignSelf:"center",  
                             height:RFValue(40) ,width:RFValue(40),marginTop:RFValue(this.NoOfPersons>=3?10:90)  }}
                            source={chairRight}>


                        </Image>:null}
                        </View>
                        </View>
      </View>

    <View style={{flexDirection:"row"}}>
          <Text style={{ fontWeight:'bold',alignSelf:"flex-start",marginLeft:RFValue(30),marginTop:RFValue(10),
                        fontSize:RFValue(18),fontFamily:'Helvetica Neue',color:'#FFC64B'}}>
Amount of Guests
</Text>
<Text style={{ fontWeight:'bold',alignSelf:"flex-start",marginLeft:RFValue(30),marginTop:RFValue(10),
                        fontSize:RFValue(18),fontFamily:'Helvetica Neue',color:'#FFC64B'}}>
Reservation Date
</Text>
</View>
   <View style={{flexDirection:"row",width:RFValue(380),alignSelf:"center"}}>
             <LinearGradient
 
 colors={["#FFC64B" ,"#80662C"  ]}

   style={{width:RFValue(145),height:RFValue(50),borderRadius:RFValue(30),marginTop:RFValue(10),marginLeft:RFValue(30)}}
  >
      <View style={{flexDirection:"row"}}>
          <TouchableOpacity 
          onPress={()=>{ this.NoOfPersons++
        this.forceUpdate()
        }}
          style={{width:RFValue(45),height:RFValue(45) ,backgroundColor:'#FFC64B',marginTop:RFValue(0),marginLeft:RFValue(10)
          ,elevation:5,borderRadius:RFValue(50)}}>
          <Text style={{ fontWeight:'bold',alignSelf:"center",marginTop:RFValue(6),
                        fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'white'}}>
+
</Text>
          </TouchableOpacity>
          <Text style={{ fontWeight:'bold',alignSelf:"center",marginTop:RFValue(2),marginLeft:RFValue(10),
                        fontSize:RFValue(18),fontFamily:'Helvetica Neue',color:'white' }}>
 {this.NoOfPersons}  
</Text>  
<TouchableOpacity
   onPress={()=>{ this.NoOfPersons--
    this.forceUpdate()
    }}
style={{width:RFValue(45),height:RFValue(45) ,backgroundColor:'#FFC64B',marginTop:RFValue(0),marginLeft:RFValue(10)
          ,elevation:5,borderRadius:RFValue(50)}}>
          <Text style={{ fontWeight:'bold',alignSelf:"center",marginTop:RFValue(6),
                        fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'white'}}>
-
</Text>
          </TouchableOpacity>

</View>
</LinearGradient>    
<LinearGradient
 
 colors={["white" ,"white"  ]}

   style={{width:RFValue(145),height:RFValue(50),borderRadius:RFValue(30),marginTop:RFValue(10),marginLeft:RFValue(30)}}
  >
      <View style={{flexDirection:"row",justifyContent:"center"}}>
   
          <Text style={{ fontWeight:'bold',alignSelf:"center",marginTop:RFValue(10),marginLeft:RFValue(0),
                        fontSize:RFValue(20),fontFamily:'Helvetica Neue',color:'black' }}>
Dec, 31st 
</Text>  
 

</View>
</LinearGradient> 
</View>
<View style={{flexDirection:"row"}}>
          <Text style={{ fontWeight:'bold',alignSelf:"flex-start",marginLeft:RFValue(30),marginTop:RFValue(10),
                        fontSize:RFValue(18),fontFamily:'Helvetica Neue',color:'#FFC64B'}}>
Available Time
</Text>
 
</View>
<View style={{flexDirection:"row",width:RFValue(380),alignSelf:"center"}}>

<TouchableOpacity
onPress={()=>{
    this.Time1=true
    this.Time3=false
    this.Time2=false
    this.forceUpdate()
}}
>
<LinearGradient
 
 colors={[this.Time1?"#FFC64B" :"white" ,this.Time1?"#80662C" :"white"  ]}

   style={{width:RFValue(100),height:RFValue(30),borderRadius:RFValue(30),marginTop:RFValue(10),marginLeft:RFValue(30)}}
  >
      <View style={{flexDirection:"row",justifyContent:"center"}}>
   
          <Text style={{ fontWeight:'bold',alignSelf:"center",marginTop:RFValue(5),marginLeft:RFValue(0),
                        fontSize:RFValue(16),fontFamily:'Helvetica Neue',color:'black' }}>
19:00 
</Text>  
 

</View>
</LinearGradient> 
</TouchableOpacity>

<TouchableOpacity
 onPress={()=>{
    this.Time1=false
    this.Time3=false
    this.Time2=true
    this.forceUpdate()
}}
>
<LinearGradient
 
 colors={[this.Time2?"#FFC64B" :"white" ,this.Time2?"#80662C" :"white"   ]}

   style={{width:RFValue(100),height:RFValue(30),borderRadius:RFValue(30),marginTop:RFValue(10),marginLeft:RFValue(10)}}
  >
      <View style={{flexDirection:"row",justifyContent:"center"}}>
   
          <Text style={{ fontWeight:'bold',alignSelf:"center",marginTop:RFValue(5),marginLeft:RFValue(0),
                        fontSize:RFValue(16),fontFamily:'Helvetica Neue',color:'black' }}>
19:15
</Text>  
 

</View>
</LinearGradient> 
 
</TouchableOpacity>
<TouchableOpacity
onPress={()=>{
    this.Time1=false
    this.Time2=false
    this.Time3=true
    this.forceUpdate()
}}
>
<LinearGradient
 
 colors={[this.Time3?"#FFC64B" :"white" ,this.Time3?"#80662C" :"white"   ]}

   style={{width:RFValue(100),height:RFValue(30),borderRadius:RFValue(30),marginTop:RFValue(10),marginLeft:RFValue(10)}}
  >
      <View style={{flexDirection:"row",justifyContent:"center"}}>
   
          <Text style={{ fontWeight:'bold',alignSelf:"center",marginTop:RFValue(5),marginLeft:RFValue(0),
                        fontSize:RFValue(16),fontFamily:'Helvetica Neue',color:'black' }}>
19:30
</Text>  
 

</View>
</LinearGradient> 
 
</TouchableOpacity>

 
 
</View>

<TouchableOpacity  
onPress={()=>{this.props.navigation.navigate('SellerMessage')}}
              style={{width:RFValue(150),height:RFValue(36),backgroundColor:'white',marginTop:RFValue(20),alignSelf:"center",borderRadius:RFValue(20)}}
              >
  <Text
             
            
             style={{color:'#F7C148' ,alignSelf:"center",fontSize:RFValue(18),marginTop:RFValue(5)}}
               >
                 Confirm
               </Text>

              </TouchableOpacity>
                </LinearGradient>
       
        </View>

    )}
}

const styles = StyleSheet.create({})


