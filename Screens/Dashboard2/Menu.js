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
    }
    renderNavigation(){

    }
render(){
    return (
        
        <View style={{ flex: 1 }}>
               <StatusBar translucent backgroundColor="transparent" />     
           
            <View style={{ height:RFValue(150),backgroundColor: '#000000'   }}>
       
         
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
                             height:RFValue(20) ,width:RFValue(20),marginTop:RFValue(80)  }}
                            source={back}>


                        </Image>
                      
                        </TouchableOpacity>
                        <Text style={{marginLeft:RFValue(20)  ,fontWeight:'bold',
                        fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'white',marginTop:RFValue(75)}}>
 Menu     
</Text> 
                        <TouchableOpacity
                         onPress={()=>{this.props.navigation.navigate('Cart')}}
                        
                        >
                        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center",marginRight:RFValue(20),
                             height:RFValue(40) ,width:RFValue(40),marginTop:RFValue(80)  }}
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
      
      <View style={{flexDirection:"row",alignSelf:'center' ,justifyContent:"center"
               ,height:'100%',width:RFValue(350),marginTop:RFValue(0) ,flexWrap:"wrap"}}>
            

          <TouchableOpacity  


          onPress={()=>{this.props.navigation.navigate('ItemFull')}}
          >
            <ItemMini image={photo2} price={'SR 9.99'} title={ 'Manchurrian'}></ItemMini>
            </TouchableOpacity>

            <TouchableOpacity  
         
          onPress={()=>{this.props.navigation.navigate('ItemFull')}}
          >
 
            <ItemMini image={photo3} price={'SR 9.99'} title={ 'Salad'}></ItemMini>
            </TouchableOpacity>
            <TouchableOpacity  
          onPress={()=>{this.props.navigation.navigate('ItemFull')}}
          >

            <ItemMini image={photo4} price={'SR 9.99'} title={ 'Club Sandwich'}></ItemMini>
            </TouchableOpacity>
            <TouchableOpacity  
          onPress={()=>{this.props.navigation.navigate('ItemFull')}}
          >

            <ItemMini image={photo2} price={'SR 9.99'} title={ 'Manchurrian'}></ItemMini>
            </TouchableOpacity>
            <TouchableOpacity  
          onPress={()=>{this.props.navigation.navigate('ItemFull')}}
          >

            <ItemMini image={photo2} price={'SR 9.99'} title={ 'Peri Sandwich'}></ItemMini>
            </TouchableOpacity>
            <TouchableOpacity  
          onPress={()=>{this.props.navigation.navigate('ItemFull')}}
          >

            <ItemMini image={photo6} price={'SR 9.99'} title={ 'Chicken Biryani'}></ItemMini>
            </TouchableOpacity>
      </View>
                </LinearGradient>
       
        </View>

    )}
}

const styles = StyleSheet.create({})


