import React from 'react'
import {KeyboardAvoidingView ,ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
  
import Background from '../../Images/Dashboard/Path551.png'
import imageSelect from '../../Images/Signup/MaskGroup1.png'
import profile from '../../Images/Payment/profile.png'
import location from '../../Images/Payment/location.png'
import scan from '../../Images/Payment/Path402.png'
import ThankYou from '../../Images/Payment/Path593.png'
import flag from '../../Images/Payment/Group63.png'
import burger from '../../Images/Resturant/burger.png'
import meal from '../../Images/Resturant/meal.png'
import Breakfast from '../../Images/Resturant/Breakfast.png'
import tea from '../../Images/Resturant/tea.png'
import image from '../../Images/Resturant/image.png'
import DateIcon from '../../Images/Resturant/DateIcon.png'
import up from '../../Images/Resturant/up.png'
import down from '../../Images/Resturant/down.png'


import Notification1 from '../../Images/Dashboard/Notification1.png'
import Message1 from '../../Images/Dashboard/Message1.png'
import User1 from '../../Images/Dashboard/User1.png'
import Home1 from '../../Images/Dashboard/Home1.png'
import NotificationG from '../../Images/Dashboard/NotificationG.png'
import MessageG from '../../Images/Dashboard/MessageG.png'
import UserG from '../../Images/Dashboard/UserG.png'
 
import HomeB from '../../Images/Dashboard/HomeB.png'
 
import LinearGradient from 'react-native-linear-gradient';
 
import back from '../../Images/Dashboard/Message/back.png'
 
import drawer from '../../Images/Dashboard2/Menu/Group153.png'

import Background2 from '../../Images/Dashboard2/Group511.png'
import MealTime from '../../Images/Dashboard2/Group509.png'
import follow from '../../Images/Dashboard2/follow.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
 
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 
 
var radio_props = [
    {label: 'param1', value: -1 },
     
  ];



export default class Menu extends React.Component {
    constructor(){
        super()
        this.Home=true,
        this.Notification=false,
        this.Message=false,
        this.Time1=false,
        this.Time2=false,
        this.Time3=false,
        this.User=false,
        this.Reviews=true
        this.Chat=false
        this.Breakfast=false
        this.Lunch=false
        this.Tea=false
        this.Dinner=false
        this.Photos=false
        this.Menu=false
        this.NoOfPersons=1
        this.DateSelected=false
        this.ImageSelected=false
        this.state={
            color:'#545454'
        }
        this.dates=[]
    }
    componentDidMount(){
        let dates=[]
        for(let i = 1; i <= 30; i++){
 
           dates.push(
                {
               status:false, 
                key:i}
              
            )
            this.dates=dates
            this.forceUpdate()
        }
    }
render(){
    this.Home=false,
    this.Notification=false,
    this.Message=false,
    this.User=false
    let obj=this
    let payments=[]

     
 
    return (
        
        <ScrollView style={{ flex: 1 }}>
               <StatusBar translucent backgroundColor="transparent" />     
           
            <View style={{ height:RFValue(130),backgroundColor: '#000000'   }}>
       
         
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
                        <Text style={{marginRight:RFValue(120)  ,fontWeight:'bold',alignSelf:"center",
                        fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'white',marginTop:RFValue(75)}}>
Add Menu    
</Text> 
                       
 

            </View>
  
    </ImageBackground>
            </View>
     
    
    
            <LinearGradient
 
 colors={["#141414",'#2D2D2D', "#474747"]}
 start={{ x: 1, y: 0.1 }}
  
  style={{height:'auto'}}
  >
      
      <View style={{flexDirection:"column",alignSelf:'flex-start'  
               ,height:'100%',width:RFValue(350),marginTop:RFValue(0) }}>
              
              <View style={{width:'100%',flexDirection:"row",
              
              justifyContent:"space-around",alignSelf:"center",marginTop:RFValue(20)}}>
            <TouchableOpacity
            onPress={()=>{
                this.Breakfast=true
                this.Lunch=false
                this.Tea=false
                this.Dinner=false
                this.forceUpdate()

            }}
            style={{alignSelf:"center",
            borderRadius:RFValue(5),padding:RFValue(5),
            borderColor:'#deb459',borderWidth:this.Breakfast?1:0,
            flexDirection:"column"}}>
              <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", 
                             height:RFValue(50) ,width:RFValue(50),marginTop:RFValue(0)  }}
                            source={Breakfast}>


                        </Image>
                        <Text style={{ fontWeight:'bold',alignSelf:"center",
                        fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'#deb459',marginTop:RFValue(5)}}>
Breakfast   
</Text> 
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={()=>{
                                this.Breakfast=false
                                this.Lunch=true
                                this.Tea=false
                                this.Dinner=false
                                this.forceUpdate()
                
                            }}
                        
                        style={{alignSelf:"center",
                        borderRadius:RFValue(5),padding:RFValue(5),
                        borderColor:'#deb459',borderWidth:this.Lunch?1:0,
                        flexDirection:"column"}}>
              <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", 
                             height:RFValue(50) ,width:RFValue(50),marginTop:RFValue(0)  }}
                            source={burger}>


                        </Image>
                        <Text style={{ fontWeight:'bold',alignSelf:"center",
                        fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'#deb459',marginTop:RFValue(5)}}>
Lunch    
</Text> 
                        </TouchableOpacity>

                           <TouchableOpacity
                           
                           onPress={()=>{
                            this.Breakfast=false
                            this.Lunch=false
                            this.Tea=false
                            this.Dinner=true
                            this.forceUpdate()
            
                        }}

                           style={{alignSelf:"center",
                           borderRadius:RFValue(5),padding:RFValue(5),
                           borderColor:'#deb459',borderWidth:this.Dinner?1:0,
                           flexDirection:"column"}}>
              <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", 
                             height:RFValue(50) ,width:RFValue(50),marginTop:RFValue(0)  }}
                            source={meal}>


                        </Image>
                        <Text style={{ fontWeight:'bold',alignSelf:"center",
                        fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'#deb459',marginTop:RFValue(5)}}>
Dinner    
</Text> 
                        </TouchableOpacity> 

                        <TouchableOpacity 
                            onPress={()=>{
                                this.Breakfast=false
                                this.Lunch=false
                                this.Tea=true
                                this.Dinner=false
                                this.forceUpdate()
                
                            }}

                        style={{alignSelf:"center",
                        borderRadius:RFValue(5),padding:RFValue(5),
                        borderColor:'#deb459',borderWidth:this.Tea?1:0,
                        flexDirection:"column"}}>
              <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", 
                             height:RFValue(50) ,width:RFValue(50),marginTop:RFValue(0)  }}
                            source={tea}>


                        </Image>
                        <Text style={{ fontWeight:'bold',alignSelf:"center",
                        fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'#deb459',marginTop:RFValue(5)}}>
Coffee & Tea    
</Text> 
                        </TouchableOpacity> 

                      

              </View>
<TouchableOpacity
onPress={()=>{this.ImageSelected=true
this.forceUpdate()}}
>
              <Image
                            style={{ resizeMode: 'stretch',alignSelf:"center", borderRadius:RFValue(10),
                             height:RFValue(120) ,width:RFValue(260),marginTop:RFValue(20)  }}
                            source={this.ImageSelected?imageSelect: image}>


                        </Image>
                        </TouchableOpacity>

                        <TextInput  
                        placeholder='Price'
                        placeholderTextColor='#deb459'
                        style={{height:RFValue(70),borderBottomColor:'#deb459',color:'#deb459',fontWeight:"bold",fontSize:RFValue(18),alignSelf:"flex-start",marginLeft:RFValue(20)
                        ,borderBottomWidth:RFValue(1),width:RFValue(70)}}
                        >

                        </TextInput>
                        <Text
                        style={{width:'auto',fontWeight:"bold"
                        ,borderBottomColor:'#deb459',color:'#deb459',fontSize:RFValue(18),
                        alignSelf:"flex-start",marginLeft:RFValue(20),marginTop:RFValue(20)
                        ,borderBottomWidth:RFValue(0),width:RFValue(70)}}
                        >Details </Text>
                        <View style={{width:RFValue(330),height:'auto',flexWrap:"wrap"}}>
                        <TextInput  
                             placeholder='Enter Details here'
                        editable={true}
                        multiline={true}
                        placeholderTextColor='#deb459'
                        style={{borderBottomColor:'#deb459',color:'#deb459'
                        ,fontSize:RFValue(18),alignSelf:"flex-start",marginLeft:RFValue(15)
                        ,borderBottomWidth:RFValue(0)}}
                        >

                        </TextInput>
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                        <Text style={{ fontWeight:'bold',alignSelf:"center",
                        fontSize:RFValue(20),fontFamily:'Helvetica Neue',color:'#deb459',marginTop:RFValue(5)}}>
Booking    
</Text> 
<Text style={{ fontWeight:'bold',alignSelf:"center",width:RFValue(195),
                        fontSize:RFValue(12),fontFamily:'Helvetica Neue',color:'#deb459',marginTop:RFValue(5)}}>
Note: Select the Days When Unavailable for Booking    
</Text> 
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                        <Text style={{ fontWeight:'bold',alignSelf:"center",
                        fontSize:RFValue(12),fontFamily:'Helvetica Neue',color:'#deb459',marginTop:RFValue(5)}}>
Seats    
</Text> 
<Text style={{ fontWeight:'bold',alignSelf:"center",width:RFValue(180),
                        fontSize:RFValue(12),fontFamily:'Helvetica Neue',color:'#deb459',marginTop:RFValue(5)}}>
Reservation Date    
</Text> 
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                        <LinearGradient
 
 colors={["#FFC64B" ,"#80662C"  ]}
 
  
   style={{width:RFValue(80),height:RFValue(30),borderRadius:RFValue(30),marginTop:RFValue(10)}}
  >
      <View style={{flexDirection:"row"}}>
          <TouchableOpacity 
             onPress={()=>{ this.NoOfPersons++
                this.forceUpdate()
                }}
          style={{width:RFValue(15),height:RFValue(15) ,backgroundColor:'transparent',marginTop:RFValue(7),marginLeft:RFValue(10)
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
style={{width:RFValue(15),height:RFValue(15) ,backgroundColor:'transparent',marginTop:RFValue(7),marginLeft:RFValue(10)
          ,elevation:5,borderRadius:RFValue(10)}}>
          <Text style={{ fontWeight:'bold',alignSelf:"center",marginTop:RFValue(-6),
                        fontSize:RFValue(18),fontFamily:'Helvetica Neue',color:'white'}}>
-
</Text>
          </TouchableOpacity>

</View>
</LinearGradient> 

<View style={{flexDirection:"row",width:RFValue(200),flexWrap:"wrap"}}>
    <View style={{flexDirection:"row",marginTop:RFValue(10),width:RFValue(200)}}>
     
    <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", 
                             height:RFValue(15) ,width:RFValue(15),marginHorizontal:RFValue(5)  }}
                            source={DateIcon}>


                        </Image>
        <Text style={{ fontWeight:'bold',alignSelf:"center",
                        fontSize:RFValue(12),fontFamily:'Helvetica Neue',color:'#deb459'}}>
January 2020    
</Text> 
<View style={{flexDirection:"column",marginLeft:RFValue(5)}}>
<TouchableOpacity>
<Image
                            style={{ resizeMode: 'contain',alignSelf:"center", 
                             height:RFValue(10) ,width:RFValue(10),marginHorizontal:RFValue(0)  }}
                            source={up}>


                        </Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image
                            style={{ resizeMode: 'contain',alignSelf:"center", 
                             height:RFValue(10) ,width:RFValue(10),marginHorizontal:RFValue(0)  }}
                            source={down}>


                        </Image>
                        </TouchableOpacity>

</View>

</View>

{this.dates.map((props, key) => {
         return (
            <TouchableOpacity 
            onPress={()=>{ 
              
             this.dates[key].status=true
             this.dates.forEach(e=>{console.log(e.status)})
        this.forceUpdate()
            }}
            key={key}>
            <LinearGradient
             
             colors={["#000000" ,this.dates[key].status ?'#F7C148':this.state.color ]}
             
              
               style={{width:RFValue(20),height:RFValue(20),borderRadius:RFValue(20),marginTop:RFValue(6)}}
              >
                  <Text style={{ fontWeight:'bold',alignSelf:"center",marginTop:RFValue(0),
                                    fontSize:RFValue(12),fontFamily:'Helvetica Neue',color:'white'}}>
            {key}
            </Text>
            
              </LinearGradient>
            </TouchableOpacity>
         );
      })}

</View>
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
onPress={()=>{this.props.navigation.navigate('SellerItemFull')}}
              style={{width:RFValue(100),height:RFValue(36),backgroundColor:'#F7C148',marginVertical:RFValue(20),alignSelf:"center",borderRadius:RFValue(20)}}
              >
  <Text
             
            
             style={{color:'black' ,alignSelf:"center",fontSize:RFValue(18),marginTop:RFValue(5)}}
               >
                 Add
               </Text>

              </TouchableOpacity>
                        
       
                
             
                <View style={{flexDirection:"row",alignSelf:'center' }}>
             
             <TouchableOpacity
              onPress={()=>{
                 this.Home=true
                 this.Notification=false
                 this.Message=false
                 this.User=false   
                 this.props.navigation.navigate('SellerDashboard')
              
             this.forceUpdate()
             }}
              style = {{
                 borderRadius:RFValue(50),
                 height:RFValue(70) ,width:RFValue(70) ,
                 backgroundColor:this.Home?'#deb459':'transparent',
                 margin:RFValue(5),
                 justifyContent:'center'
               }}
               underlayColor = '#ccc'
             > 
                             <Image
                                         style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(32) ,width:RFValue(32)  }}
                                         source={this.Home?HomeB :Home1}>
             
             
                                     </Image>
                                     </TouchableOpacity>
                                     <TouchableOpacity
                                     onPress={()=>{
                                         this.Home=false
                                         this.Notification=true
                                         this.Message=false
                                         this.User=false  
                                         this.props.navigation.navigate('SellerNotification')  
                                          
                                         this.forceUpdate()
                                     }}
              style = {{
                 borderRadius:RFValue(50),
                 height:RFValue(70) ,width:RFValue(70) ,
                 backgroundColor:this.Notification?'#deb459':'transparent',
                 margin:RFValue(5),
                 justifyContent:'center'
               }}
               underlayColor = '#ccc'>
                                     <Image
                                         style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(32) ,width:RFValue(32)   }}
                                         source={this.Notification? Notification1:NotificationG}>
             
             
                                     </Image>
                                     </TouchableOpacity>
                                  
                                     <TouchableOpacity
                                      onPress={()=>{
                                         this.Home=false
                                         this.Notification=false
                                         this.Message=true
                                         this.User=false    
                                         this.props.navigation.navigate('SellerContact')  
                                         this.forceUpdate()
                                     }}
              style = {{
                 borderRadius:RFValue(50),
                 height:RFValue(70) ,width:RFValue(70) ,
                 backgroundColor:this.Message?'#deb459':'transparent',
                 margin:RFValue(5),
                 justifyContent:'center'
               }}
               underlayColor = '#ccc'>
                                     <Image
                                         style={{ resizeMode: 'contain',alignSelf:"center",height:RFValue(32) ,width:RFValue(32)  }}
                                         source={this.Message?Message1:MessageG}>
             
             
                                     </Image>
                                     </TouchableOpacity>
                                     <TouchableOpacity
                                      onPress={()=>{
                                         this.Home=false
                                         this.Notification=false
                                         this.Message=false
                                         this.User=true    
                                         this.props.navigation.navigate('SellerUser')  
                                
                                         this.forceUpdate()
                                     }}
              style = {{
                 borderRadius:RFValue(50),
                 height:RFValue(70) ,width:RFValue(70) ,
                 backgroundColor:this.User?'#deb459':'transparent',
                 margin:RFValue(5),
                 justifyContent:'center'
               }}
               underlayColor = '#ccc'>
                                     <Image
                                         style={{ resizeMode: 'contain',alignSelf:"center",height:RFValue(32) ,width:RFValue(32)   }}
                                         source={this.User?User1:UserG}>
             
             
                                     </Image>
             
                                     </TouchableOpacity>
                             </View>
                             </View>
                             </LinearGradient>
        </ScrollView>

    )}
    renderDates(payments,obj){
        for(let i = 1; i <= 30; i++){
let color='#545454'
            payments.push(
                <TouchableOpacity 
                onPress={()=>{color='#F7C148'
                console.log(i)
                this.forceUpdate()}}
                key={i}>
                <LinearGradient
                 
                 colors={["#000000" ,color  ]}
                 
                  
                   style={{width:RFValue(20),height:RFValue(20),borderRadius:RFValue(20),marginTop:RFValue(6)}}
                  >
                      <Text style={{ fontWeight:'bold',alignSelf:"center",marginTop:RFValue(0),
                                        fontSize:RFValue(12),fontFamily:'Helvetica Neue',color:'white'}}>
                {i}
                </Text>
                
                  </LinearGradient>
                </TouchableOpacity>
            )
        }

    }
}

const styles = StyleSheet.create({})


