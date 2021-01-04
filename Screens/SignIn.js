import React,{useEffect} from 'react'
import {StatusBar, StyleSheet, Text, View,Image ,ImageBackground,TextInput,TouchableOpacity,BackHandler,Alert} from 'react-native'
import Logo from '../Images/Signup/Path430.png'
import Background from '../Images/Signup/MaskGroup1.png'
import Button from '../Images/Signup/Rectangle131.png'
import Location from '../Images/Signup/Iconmaterial-my-location.png'
import Eye from '../Images/Signup/Iconfeather-eye.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import UserDatabase from '../Database/User.js'
 let User=new UserDatabase()
 

var radio_props = [
    {label: 'param1', value: -1 },
     
  ];

export default class SignIn extends React.Component{
  constructor( ) {
    super( )
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state={
      Userid:null,Password:null
    }
}

componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
  if(this.props.navigation.isFocused()){
BackHandler.exitApp()
return true
  }

  else return false   
     
}
 
  render(){
    return (
       <View style={{backgroundColor:'#000000',}}>
          <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground
            style={{
                height:'100%',width:'100%',resizeMode: 'cover'}}
            source={Background}
            imageStyle={{opacity:0.32}}
            >
               
 <Image
            style={{resizeMode:'contain' ,alignSelf:"center",marginTop:RFValue(100)}}
            source={Logo}>


            </Image>
           
            <Text style={{alignSelf:"center",fontSize:RFValue(25),fontFamily:'Helvetica Neue',color:'#deb459'}}>
                Sign In Now
            </Text>
            <TextInput
            placeholder='Email or Phone Number' 
            placeholderTextColor={'#f7c148'}
            onChangeText={(e)=>{
              this.setState({Userid:e})
            }}
          style={{marginTop:RFValue(70),color:'#deb459',borderBottomColor:'#deb459',borderBottomWidth:1,width:RFValue(250),alignSelf:"center"}}
            ></TextInput>
            <View 
            style={{width:RFValue(250),alignSelf:'center',flexDirection:"row",marginTop:RFValue(20),borderBottomColor:'#deb459',borderBottomWidth:1}}>
            <TextInput
            placeholder='Password' 
            placeholderTextColor={'#deb459'}
            onChangeText={(e)=>{
              this.setState({Password:e})
            }}
          style={{color:'#deb459',width:RFValue(230),alignSelf:"center"}}
            >


            </TextInput>
            <TouchableOpacity style={{width:RFValue(20),height:RFValue(20) ,alignSelf:"center"}}>
            <Image
            style={{resizeMode:'contain',width:RFValue(20),height:RFValue(20) ,alignSelf:"center",marginTop:RFValue(0)}}
            source={Eye}>
            </Image>
            </TouchableOpacity>
            </View>
            <TouchableOpacity 
            onPress={()=>{  this.props.navigation.navigate('SignInverify1',{path:'ResetPassword'})}}>          
              <Text style={{alignSelf:"center",marginLeft:RFValue(200),marginTop:RFValue(10)
            ,fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'#deb459',borderBottomColor:'#deb459',borderBottomWidth:1}}>
               Forgot?
            </Text>
            </TouchableOpacity>

            <View style={{flexDirection:"row",justifyContent:'center'
            ,marginLeft:RFValue(0),marginTop:RFValue(20),marginBottom:RFValue(30)}}> 
            
            <TouchableOpacity     
            onPress={()=>{ 
              User.getUser(this.state.Userid,this.state.Password,flag=>{
       
                flag=='Resturant'?  this.props.navigation.navigate('SellerDashboard') : this.props.navigation.navigate('Dashboard')
              })
            }}
             style={{ justifyContent:"center",height:RFValue(35),width:RFValue(120)
             ,marginTop:RFValue(5) ,alignSelf:"center" }}>
            <ImageBackground
            style={{ resizeMode:'contain' ,justifyContent:"center"}}
            source={Button}
            imageStyle={{width:RFValue(120),height:RFValue(35),borderRadius:40}}
      
            >

<Text style={{alignSelf:"center",fontSize:RFValue(14),fontFamily:'Helvetica Neue',marginTop:RFValue(6.5)}}> Sign In</Text>
            </ImageBackground>
            </TouchableOpacity>
            <View style={{flexDirection:"row",alignSelf:"center",justifyContent:"center"}}>         
                     <Text style={{alignSelf:"center",fontSize:RFValue(14),marginLeft:RFValue(80),marginTop:RFValue(12),
                     fontFamily:'Helvetica Neue',color:'#deb459'}}>
              or 
            </Text>
            <TouchableOpacity
            
            >
               <Text style={{alignSelf:"center",marginTop:RFValue(12),marginLeft:RFValue(5),fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'#deb459',borderBottomColor:'#deb459',borderBottomWidth:1}}>
               Skip
            </Text>
            
            </TouchableOpacity>
            </View>

        </View>       
          
      
            <View style={{flexDirection:"row",justifyContent:'center',marginLeft:RFValue(0),marginTop:RFValue(20),marginBottom:RFValue(30)}}> 
              <Text style={{alignSelf:"center",fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'#deb459'}}>
              Already an account?
            </Text>
            <TouchableOpacity
            onPress={()=>{  this.props.navigation.navigate('SignUp')}}
            >
               <Text style={{alignSelf:"center",fontSize:RFValue(14),marginLeft:RFValue(5)
               ,fontFamily:'Helvetica Neue',color:'#deb459',borderBottomColor:'#deb459',borderBottomWidth:1}}>
               SignUp
            </Text>
            </TouchableOpacity>
        </View> 

            </ImageBackground>
            </View>
      
    )}
}

const styles = StyleSheet.create({})
