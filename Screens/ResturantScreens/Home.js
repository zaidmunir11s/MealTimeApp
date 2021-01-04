import React from 'react'
import {KeyboardAvoidingView ,ScrollView, StatusBar, StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
 
import Background from '../../Images/Dashboard/Path551.png'
 
 
 
import Logo from '../../Images/Path430.png'
import Background3 from '../../Images/Dashboard/group.png'
import Group1 from '../../Images/Dashboard/Group523.png'
import Group2 from '../../Images/Dashboard/Group524.png'
import Group3 from '../../Images/Dashboard/Group525.png'
import Group4 from '../../Images/Dashboard/Group526.png'
import search from '../../Images/Dashboard/Group408.png'
import Orders from '../../Images/Dashboard/Orders.png'
import Add from '../../Images/Resturant/add.png'
import Scan from '../../Images/Resturant/scanIcon.png'
import { SearchBar } from 'react-native-elements';
import cross from '../../Images/Dashboard/cross.png'

import Notification1 from '../../Images/Dashboard/Notification1.png'
import Message1 from '../../Images/Dashboard/Message1.png'
import User1 from '../../Images/Dashboard/User1.png'
import Home1 from '../../Images/Dashboard/Home1.png'
import NotificationG from '../../Images/Dashboard/NotificationG.png'
import MessageG from '../../Images/Dashboard/MessageG.png'
import UserG from '../../Images/Dashboard/UserG.png'
import Dashboard from '../../Images/Dashboard/Path553.png'
import HomeB from '../../Images/Dashboard/HomeB.png'
import MiniView from '../MiniView'
import MiniNotif  from './MiniNotification'
import LinearGradient from 'react-native-linear-gradient';
import back from '../../Images/Dashboard/Message/back.png'
import Icon from '../../Images/Dashboard/Message/Group571.png'
import ContactMiniView from './ContactMini'
import {TopUser,BottomUser} from './User'
import userImage from '../../Images/Dashboard/Contact/profile.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import MiniNotification from './MiniNotification'
 

export default class Home extends React.Component {
    constructor(){
        super()
        this.Home=true,
        this.Notification=false,
        this.Message=false,
        this.User=false
        this.Neartoyou=true
        this.TopRated=false
        this.TopChat=false
        this.flag=false
        this.Order=false
        this.myRef=React.createRef()
        this.myRef1=React.createRef()
        this.myRef2=React.createRef()
        this.myRef3=React.createRef()

    }
    componentDidMount(){this.Home=true}
    renderNavigation(){

    }
render(){
    return (
      
        <View style={{ height:'100%' }}>
              
         {this.Home ?
         
         <View style={{ flex: 100, backgroundColor: '#000000', justifyContent: "center" }}>
               
         <StatusBar translucent backgroundColor="transparent" />
         <View style={{ height:RFValue(350)  }}>
             <ImageBackground
                 style={{
                     height: '100%', width: '100%', resizeMode: 'cover'
                 }}
                 source={Background3}
                 imageStyle={{ opacity: 1 }}
             >
                 <View style={{flexDirection:"row",height: RFValue(30)  , 
                 alignSelf:'flex-end',marginTop:RFValue(50),marginRight:RFValue(15)}}>
             <TouchableOpacity
             onPress={()=>{this.props.navigation.navigate('Scan')}}
             >   
                  <Image
         style={{ resizeMode: 'contain',  height: RFValue(30), width: RFValue(30) , alignSelf:'flex-end', marginRight:RFValue(15)}}
         source={Scan}>


     </Image>
     <Text style={{alignSelf:"center",alignSelf:'flex-end',fontSize:RFValue(14),marginRight:RFValue(15),fontFamily:'Helvetica Neue',color:'#deb459'}}>
        Scan
     </Text>
     </TouchableOpacity>
             <TouchableOpacity
             onPress={()=>{this.props.navigation.navigate('SellerOrders')}}
             >   
                  <Image
         style={{ resizeMode: 'contain',  height: RFValue(30), width: RFValue(30) , alignSelf:'flex-end', marginRight:RFValue(10)}}
         source={Orders}>


     </Image>
     <Text style={{alignSelf:"center",alignSelf:'flex-end',fontSize:RFValue(14),marginRight:RFValue(5),fontFamily:'Helvetica Neue',color:'#deb459'}}>
        Orders
     </Text>
     </TouchableOpacity>
     </View>
                 <Image
                     style={{ resizeMode: 'contain', alignSelf: "center", marginTop: RFValue( 0) }}
                     source={Logo}>


                 </Image>
                 <Text style={{alignSelf:"center",marginTop:RFValue(20),marginBottom:RFValue(20),fontSize:RFValue(25),fontFamily:'Helvetica Neue',color:'#deb459'}}>
        Meal Time
     </Text>
   
     <View style={{backgroundColor:'white',flexDirection:'row',width:RFValue(300),
     height:RFValue(35),borderRadius:15,alignSelf:"center"
       ,marginTop:RFValue(50)}}>
         <TextInput
        placeholder="Search Here..."
        style={{backgroundColor:'transparent',width:RFValue(250),padding:RFValue(10),height:RFValue(35),borderRadius:15,alignSelf:"flex-start",
       
       }}
     
         
      >


      </TextInput>
      <Image
            style={{ resizeMode: 'contain' ,alignSelf:"center",height:RFValue(20) }}
            source={search}>


        </Image>
      </View>
 



             </ImageBackground>
         </View>

         <View style={{    backgroundColor: '#F3F4FC' }}>
             <View style={{ flexDirection: "row" , width: RFValue(230), marginTop: RFValue(15) , 
             flexWrap: "wrap", alignSelf: "center" }}>
               
                 <TouchableOpacity
                   onPress={()=>{this.props.navigation.navigate('SellerDashboard2')}}
                 >
                     <Image
                         style={{ resizeMode: 'contain',  height:RFValue(120) ,width:RFValue(115)   }}
                         source={Group1}>


                     </Image>
                 </TouchableOpacity>
                 <TouchableOpacity
         >
                     <Image
                         style={{ resizeMode: 'contain',  height:RFValue(120) ,width:RFValue(115) }}
                         source={Group2}>


                     </Image>
                 </TouchableOpacity>
                 <TouchableOpacity>
                     <Image
                         style={{ resizeMode: 'contain', alignSelf: "center" ,  height:RFValue(120) ,width:RFValue(115) ,marginTop:RFValue(-2)}}
                         source={Group4}>


                     </Image>
                 </TouchableOpacity>
                 <TouchableOpacity>
                     <Image
                         style={{ resizeMode: 'contain', alignSelf: "center",  height:RFValue(120) ,width:RFValue(115) ,marginTop:RFValue(-2) }}
                         source={Group3}>


                     </Image>
                 </TouchableOpacity>


             </View>
             <TouchableOpacity style={{zIndex:50,}}
                    onPress={()=>{this.props.navigation.navigate('CreateAd')}}
             >
             <Image
                     style={{ resizeMode: 'contain', alignSelf: "center",width:RFValue(50)
                     ,height:RFValue(50), marginTop: RFValue( -30) }}
                     source={Add}>


                 </Image>
                 </TouchableOpacity>
             <View style={{flexDirection:"row",alignSelf:'center' }}>
          
<TouchableOpacity
onPress={()=>{
 this.Home=true
 this.Notification=false
 this.Message=false
 this.User=false    
 this.props.navigation.navigate('SellerHome') 
this.forceUpdate()
}}
style = {{
 borderRadius:RFValue(50),
 height:RFValue(70) ,width:RFValue(70) ,
 backgroundColor:this.Home?'#000000':'#F3F4FC',
 margin:RFValue(5),
 justifyContent:'center'
}}
underlayColor = '#ccc'
> 
             <Image
                         style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(32) ,width:RFValue(32)  }}
                         source={this.Home?Home1:HomeB}>


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
 backgroundColor:this.Notification?'#000000':'#F3F4FC',
 margin:RFValue(5),
 justifyContent:'center'
}}
underlayColor = '#ccc'>
                     <Image
                         style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(32) ,width:RFValue(32)   }}
                         source={this.Notification? NotificationG:Notification1}>


                     </Image>
                     </TouchableOpacity>
                  
                     <TouchableOpacity
                      onPress={()=>{
                         this.Home=false
                         this.Notification=false
                         this.Message=true
                         this.User=false    
                         this.props.navigation.navigate('SellerMessage') 
                         this.forceUpdate()
                     }}
style = {{
 borderRadius:RFValue(50),
 height:RFValue(70) ,width:RFValue(70) ,
 backgroundColor:this.Message?'#000000':'#F3F4FC',
 margin:RFValue(5),
 justifyContent:'center'
}}
underlayColor = '#ccc'>
                     <Image
                         style={{ resizeMode: 'contain',alignSelf:"center",height:RFValue(32) ,width:RFValue(32)  }}
                         source={this.Message?MessageG:Message1}>


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
 backgroundColor:this.User?'#000000':'#F3F4FC',
 margin:RFValue(5),
 justifyContent:'center'
}}
underlayColor = '#ccc'>
                     <Image
                         style={{ resizeMode: 'contain',alignSelf:"center",height:RFValue(32) ,width:RFValue(32)   }}
                         source={this.User?UserG:User1}>


                     </Image>

                     </TouchableOpacity>
             </View>
         </View>
    
     </View>
        
        :null}   
             
               {this.flag && !this.Home?
TopUser(this)

           :null    }
        {this.flag && !this.Home?    
        
 
         <View style={{ height:RFValue(130),backgroundColor: '#000000' ,marginTop:RFValue(0) }}>

        <ImageBackground
                style={{
                    height: '100%', width: '100%', resizeMode: 'cover'
                }}
                source={Background}
                imageStyle={{ opacity: 1 }}
            >
        <StatusBar translucent backgroundColor="transparent" />
       <View style={{flexDirection:"row",marginTop:RFValue(50),justifyContent:"center"}}>      
        <Text style={{alignSelf:"center",marginLeft:RFValue(120)
    ,fontSize:RFValue(24),fontFamily:'Helvetica Neue',color:'white'}}>
         Contact
        </Text>
        <Image
                        style={{ resizeMode: 'contain',alignSelf:"flex-end", height:RFValue(32) ,width:RFValue(32) ,
                        marginLeft:RFValue(80) }}
                        source={userImage}>


                    </Image>
                    </View>
</ImageBackground>
        </View>
        
        :null}  
     { this.flag && !this.Home ?      
      <View style={{ height:RFValue(130),backgroundColor: '#000000' ,marginTop:RFValue(0)}}>

            <ImageBackground
                    style={{
                        height: '100%', width: '100%', resizeMode: 'cover'
                    }}
                    source={Background}
                    imageStyle={{ opacity: 1 }}
                >
            <StatusBar translucent backgroundColor="transparent" />
                 
      <View style={{backgroundColor:'white',flexDirection:'row',width:RFValue(300),height:RFValue(35),borderRadius:15,alignSelf:"center"
       ,marginTop:RFValue(75)}}>
         <TextInput
        placeholder="Search Here..."
        style={{backgroundColor:'transparent',width:RFValue(250),padding:RFValue(10),height:RFValue(35),borderRadius:15,alignSelf:"flex-start",
       
       }}
     
         
      >


      </TextInput>
      <Image
            style={{ resizeMode: 'contain' ,alignSelf:"center",height:RFValue(20) }}
            source={search}>


        </Image>
      </View>
    
    </ImageBackground>
            </View> :null}
         

       {!this.Home?     <LinearGradient
 
 colors={["#141414",'#2D2D2D', "#474747"]}
 start={{ x: 1, y: 0.1 }}
  
  style={{height:RFValue(575)}}
  >
{this.flag && !this.Home?  BottomUser(this):null}
{this.flag && !this.Home?    

<View style={{ flexDirection: "column" , height:RFValue(430),
width: RFValue(310), marginTop: RFValue(40) ,margin:RFValue(15), alignSelf: "center" }}>
<ScrollView ref={this.myRef} horizontal contentContainerStyle={{justifyContent:"center",height:RFValue(100)}} style={{ flexDirection:"row"}}>

<TouchableOpacity
onPress={()=>{ this.props.navigation.navigate('SellerMessage')}}>
  <ContactMiniView image={Icon} title={'Meal Time'} time={'24 mins ago'} color={'#deb459'} ></ContactMiniView>
  </TouchableOpacity>
  <TouchableOpacity
  style={{alignSelf:"center", height:RFValue(25) ,width:RFValue(25) }}
  onPress={()=>{this.myRef.current.scrollTo({x: 0, y: 0, animated: true})}}
  >
  <Image
  onPress
                        style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(25) ,width:RFValue(25) 
                        }}
                        source={cross}>


                    </Image>
                    </TouchableOpacity>
  </ScrollView>


  <ScrollView ref={this.myRef3} horizontal contentContainerStyle={{justifyContent:"center",height:RFValue(100)}} style={{ flexDirection:"row"}}>
  <TouchableOpacity
onPress={()=>{ this.props.navigation.navigate('SellerMessage')}}>
  <ContactMiniView image={Icon} title={'Meal Time'} time={'24 mins ago'} color={'#deb459'} ></ContactMiniView>
  </TouchableOpacity>
  <TouchableOpacity
  style={{alignSelf:"center", height:RFValue(25) ,width:RFValue(25) }}
  onPress={()=>{this.myRef3.current.scrollTo({x: 0, y: 0, animated: true})}}
  >
  <Image
  onPress
                        style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(25) ,width:RFValue(25) 
                        }}
                        source={cross}>


                    </Image>
                    </TouchableOpacity>
  </ScrollView>
  <ScrollView ref={this.myRef1} horizontal contentContainerStyle={{justifyContent:"center",height:RFValue(100)}} style={{ flexDirection:"row"}}>

  <TouchableOpacity
onPress={()=>{ this.props.navigation.navigate('SellerMessage')}}>
  <ContactMiniView image={Icon} title={'Meal Time'} time={'24 mins ago'} color={'yellow'} ></ContactMiniView>
  </TouchableOpacity>
  <TouchableOpacity
  style={{alignSelf:"center", height:RFValue(25) ,width:RFValue(25) }}
  onPress={()=>{this.myRef1.current.scrollTo({x: 0, y: 0, animated: true})}}
  >
  <Image
  onPress
                        style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(25) ,width:RFValue(25) 
                        }}
                        source={cross}>


                    </Image>
                    </TouchableOpacity>
  </ScrollView>
  <ScrollView ref={this.myRef2} horizontal contentContainerStyle={{justifyContent:"center",height:RFValue(100)}} style={{ flexDirection:"row"}}>

  <TouchableOpacity
onPress={()=>{ this.props.navigation.navigate('SellerMessage')}}>
  <ContactMiniView image={Icon} title={'Meal Time'} time={'24 mins ago'} color={'red'} ></ContactMiniView>
  </TouchableOpacity>
  <TouchableOpacity
  style={{alignSelf:"center", height:RFValue(25) ,width:RFValue(25) }}
  onPress={()=>{this.myRef2.current.scrollTo({x: 0, y: 0, animated: true})}}
  >
  <Image
  onPress
                        style={{ resizeMode: 'contain',alignSelf:"center", height:RFValue(25) ,width:RFValue(25) 
                        }}
                        source={cross}>


                    </Image>
                    </TouchableOpacity>
  </ScrollView>




</View>

:null}
    
   

           {this.flag && !this.Home?     <View style={{ flexDirection: "column" , height:RFValue(430),
                width: RFValue(230), marginTop: RFValue(40) ,margin:RFValue(15), alignSelf: "center" }}>
                  <MiniNotif></MiniNotif>
                  <MiniNotif></MiniNotif>
                  <MiniNotif></MiniNotif>
                  <MiniNotif></MiniNotif>
                  <MiniNotif></MiniNotif>
                
                
             

                </View>:null}

                <View style={{flexDirection:"row",alignSelf:'center' }}>
             
<TouchableOpacity
 onPress={()=>{
    this.Home=true
    this.Notification=false
    this.Message=false
    this.User=false   
 
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
                </LinearGradient> :null}
       
        </View>

    )}
}

const styles = StyleSheet.create({})
