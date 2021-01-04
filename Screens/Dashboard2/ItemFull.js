import React from 'react'
import {KeyboardAvoidingView ,ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
 
import Background from '../../Images/Dashboard2/Menu/biryani.png'
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

import Background2 from '../../Images/Dashboard2/Group511.png'
import MealTime from '../../Images/Dashboard2/Group509.png'
import follow from '../../Images/Dashboard2/follow.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
 

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
        this.NoOfPersons=1
        this.AddtoCart='Add to Cart'
    }
    renderNavigation(){

    }
render(){
    return (
        
        <ScrollView style={{ flex: 1 }}>
               <StatusBar translucent backgroundColor="transparent" />     
           
            <View style={{ height:RFValue(350),backgroundColor: '#000000'   }}>
       
         
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
             
                        <TouchableOpacity
                        onPress={()=>{this.props.navigation.navigate('Cart')}}
                        >
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
  
  style={{height:'auto'}}
  >
                <Text style={{marginLeft:RFValue(20)  ,fontWeight:'bold',
                        fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'#deb459',marginTop:RFValue(10)}}>
 Recepie Name
</Text>  
<View style={{flexDirection:'row',justifyContent:"space-between"}}>
<Text style={{marginLeft:RFValue(20)  ,fontWeight:'bold',
                        fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'#deb459',marginTop:RFValue(10)}}>
 Price  
</Text>  
<LinearGradient
 
 colors={["#FFC64B" ,"#80662C"  ]}
 
  
   style={{width:RFValue(80),height:RFValue(30),borderRadius:RFValue(30),marginTop:RFValue(10)}}
  >
      <View style={{flexDirection:"row"}}>
          <TouchableOpacity 
             onPress={()=>{ this.NoOfPersons++
                this.forceUpdate()
                }}
          style={{width:RFValue(15),height:RFValue(15) ,backgroundColor:'#FFC64B',marginTop:RFValue(7),marginLeft:RFValue(10)
          ,elevation:5,borderRadius:RFValue(10)}}>
          <Text style={{ fontWeight:'bold',alignSelf:"center",marginTop:RFValue(-5),
                        fontSize:RFValue(18),fontFamily:'Helvetica Neue',color:'white'}}>
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
style={{width:RFValue(15),height:RFValue(15) ,backgroundColor:'#FFC64B',marginTop:RFValue(7),marginLeft:RFValue(10)
          ,elevation:5,borderRadius:RFValue(10)}}>
          <Text style={{ fontWeight:'bold',alignSelf:"center",marginTop:RFValue(-6),
                        fontSize:RFValue(18),fontFamily:'Helvetica Neue',color:'white'}}>
-
</Text>
          </TouchableOpacity>

</View>
</LinearGradient>  
</View>

<Text style={{margin:RFValue(20)  ,fontWeight:'bold',
                        fontSize:RFValue(12),width:'auto',fontFamily:'Helvetica Neue',color:'#deb459',marginTop:RFValue(10)}}>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e adveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
</Text> 
<Text style={{marginLeft:RFValue(20)  ,fontWeight:'bold',
                        fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'#deb459',marginTop:RFValue(10)}}>
 Related Items  
</Text> 

      <View 
      style={{flexDirection:"row",alignSelf:'center' 
               ,height:RFValue(180),width:'100%',marginTop:RFValue(0) ,flexWrap:"wrap"}}>
            

         
            <ItemMini image={photo2} price={'SR 9.99'} title={ 'Manchurrian'}></ItemMini>
            <ItemMini image={photo2} price={'SR 9.99'} title={ 'Peri Sandwich'}></ItemMini>
            
      
            
      </View>
      <View style={{flexDirection:"row", marginBottom:RFValue(10),justifyContent:"space-evenly"}}>
<LinearGradient
 
 colors={["#FFC64B" ,"#80662C"  ]}
 
  
   style={{width:RFValue(120),height:RFValue(50),borderRadius:RFValue(30)}}
  >
<TouchableOpacity

onPress={()=>{        this.AddtoCart='Added to Cart'
this.forceUpdate()
}}
style={{ width:RFValue(120),height:RFValue(50),borderRadius:RFValue(30),justifyContent:"center"}}>
<Text style={{ 
                   alignSelf:"center",     fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'black' }}>
{this.AddtoCart}
</Text>  
</TouchableOpacity>
</LinearGradient>
<LinearGradient
 
 colors={["#FFC64B" ,"#80662C"  ]}
 
  
   style={{width:RFValue(120),height:RFValue(50),borderRadius:RFValue(30)}}
  >
<TouchableOpacity
onPress={()=>{this.props.navigation.navigate('Reservation')}}
style={{ width:RFValue(120),height:RFValue(50),borderRadius:RFValue(30),justifyContent:"center"}}>
<Text style={{ 
                   alignSelf:"center",     fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'black' }}>
 Pay Now 
</Text>  
</TouchableOpacity>
</LinearGradient>

</View>
      
                </LinearGradient>
       
        </ScrollView>

    )}
}

const styles = StyleSheet.create({})


