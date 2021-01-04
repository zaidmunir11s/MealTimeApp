import React,{useState} from 'react'
import { StatusBar,StyleSheet, Text, View,Image ,ImageBackground,TextInput,TouchableOpacity} from 'react-native'
import Logo from '../Images/Signup/Path430.png'
import Background from '../Images/Signup/MaskGroup1.png'
import Button from '../Images/Signup/Rectangle131.png'
import LocationLogo from '../Images/Signup/Iconmaterial-my-location.png'
import Eye from '../Images/Signup/Iconfeather-eye.png'
import certificate from '../Images/Resturant/certificate.png'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Geolocation from '@react-native-community/geolocation';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
var RNFS = require('react-native-fs');
import storage from '@react-native-firebase/storage';
 import UserDatabase from '../Database/User.js'
 let User=new UserDatabase()
var radio_props = [
    {label: 'param1', value: -1 },
     
  ];

  findCoordinates =async (ret) => {
		Geolocation.getCurrentPosition(
		async	position => {
	 
 
				ret( position.coords)
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
  };
  
 function ChooseImage(username) {

    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    launchImageLibrary(options, async (response) => {


      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.uri;
        let img = uri;
        const data = await RNFS.readFile(uri, 'base64')



        var a = await storage()
          .ref(`ResturantCredentials/user${username}.png`)
          .putString(data, 'base64')
          .then((snapshot) => {
            //You can check the image is now uploaded in the storage bucket
            this.ImageUri = true
            console.log(` has been successfully uploaded.`);
          })
          .catch((e) => console.log('uploading image error => ', e));


      }

      let ref = storage()
        .ref(`ResturantCredentials/user${username}.png`)

      this.ImageUpload = true
      let URI = await ref.getDownloadURL()
     



    });

  }


export default function SignUp({navigation}) {
  const [customer, setcustomer] = useState(false);
  const [PhoneNo, setPhoneNo] = useState(null);
  const [email, setemail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Location, setLocation] = useState(null);
    return (
       <View style={{backgroundColor:'#000000',}}>
          <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground
            style={{
                height:'100%',width:'100%',resizeMode: 'cover'}}
            source={Background}
            imageStyle={{opacity:0.32}}
            >
            <TouchableOpacity
            onPress={()=>{
if(customer){
setcustomer(false)
}else{
  setcustomer(true)
}
 
            }}
            >   
               <Text style={{marginRight:RFValue(20)  ,borderBottomColor:'#f7c148',borderBottomWidth:2,alignSelf:"flex-end",
                        fontSize:RFValue(18),fontFamily:'Helvetica Neue',color:'#f7c148',marginTop:RFValue(50)}}>
{customer?'Customer':'Resturant'}   
</Text>  
</TouchableOpacity>
 <Image
            style={{resizeMode:'contain' ,alignSelf:"center",marginTop:RFValue(10)}}
            source={Logo}>


            </Image>
           
            <Text style={{alignSelf:"center",fontSize:RFValue(25),fontFamily:'Helvetica Neue',color:'#deb459'}}>
                Sign Up Now
            </Text>
            <TextInput
            placeholder='Email' 
            placeholderTextColor={'#f7c148'}
            onChangeText={(e)=>{
setemail(e)
            }}
          style={{marginTop:RFValue(20),color:'#deb459',borderBottomColor:'#deb459',borderBottomWidth:1,width:RFValue(250),alignSelf:"center"}}
            ></TextInput>
                        <TextInput
            placeholder='Phone Number' 
            placeholderTextColor={'#f7c148'}
            onChangeText={(e)=>{
setPhoneNo(e)
            }}
          style={{marginTop:RFValue(20),color:'#deb459',borderBottomColor:'#deb459',borderBottomWidth:1,width:RFValue(250),alignSelf:"center"}}
            ></TextInput>
            <View 
            style={{width:RFValue(250),alignSelf:'center',flexDirection:"row",marginTop:RFValue(20),borderBottomColor:'#deb459',borderBottomWidth:1}}>
            <TextInput
            placeholder='Password' 
            placeholderTextColor={'#deb459'}
            onChangeText={(e)=>{
              setPassword(e)
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
              <TextInput
            placeholder='Confirm Password' 
            placeholderTextColor={'#deb459'}
            onEndEditing={e=>{
              console.log( e.nativeEvent.text)
              e.nativeEvent.text==Password?null:alert('Password Mismatch')
            }}
          style={{color:'#deb459',marginTop:RFValue(20),borderBottomColor:'#deb459',borderBottomWidth:1,width:RFValue(250),alignSelf:"center"}}
            ></TextInput>
            <View 
            style={{width:RFValue(250),alignSelf:'center',flexDirection:"row",marginTop:RFValue(20)
            ,borderBottomColor:'#deb459',borderBottomWidth:1}}>
            <Text
             
            
          style={{color:'#deb459',width:RFValue(230),alignSelf:"center",marginBottom:RFValue(15),marginLeft:RFValue(5)}}
            >
{Location==null?'Location' :'Location Fetched'}

            </Text>
            <TouchableOpacity
             onPress={async ()=>{
          findCoordinates(ret=>  setLocation( ret)) 
                          }}
            style={{width:RFValue(20),height:RFValue(20) ,alignSelf:"center",marginBottom:RFValue(10)}}>
            <Image
            style={{resizeMode:'contain',width:RFValue(20),height:RFValue(20) ,alignSelf:"center",marginTop:RFValue(0)}}
            source={LocationLogo}>
            </Image>
            </TouchableOpacity>
            </View>
           {customer? <View 
            style={{width:RFValue(250),alignSelf:'center',flexDirection:"row",marginTop:RFValue(20),borderBottomColor:'#deb459',borderBottomWidth:1}}>
            <TextInput
            placeholder='Upload Credentials' 
            placeholderTextColor={'#deb459'}
            
          style={{color:'#deb459',width:RFValue(230),alignSelf:"center"}}
            >


            </TextInput>
            <TouchableOpacity 
            onPress={()=>{
              ChooseImage(email)
            }}
            style={{width:RFValue(20),height:RFValue(20) ,alignSelf:"center"}}>
            <Image
            style={{resizeMode:'contain',width:RFValue(20),height:RFValue(20) ,alignSelf:"center",marginTop:RFValue(0)}}
            source={certificate}>
            </Image>
            </TouchableOpacity>
            </View> :null}

         <View style={{flexDirection:"row",justifyContent:'center',marginLeft:RFValue(50),marginTop:RFValue(10),marginBottom:RFValue(10)}}> 
              <Text style={{alignSelf:"center",fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'#deb459'}}>
               Terms and Conditions
            </Text>
            <View style={{alignSelf:'center',marginTop:RFValue(10),marginLeft:RFValue(10)}}>
            <RadioForm
      
      radio_props={radio_props}
      initial={-1}
      formHorizontal={false}
      labelHorizontal={true}
      buttonColor={'#deb459'}
      selectedButtonColor={'#deb459'}
      animation={true}
      buttonSize={8}
      onPress={(value) => { }}
      
         
        />
        </View>
        </View> 
         
            <TouchableOpacity   
            
            onPress={()=>{
              if(email!=null &&Password!==null && PhoneNo!=null && Location!=null){
               User.setUser(email,Password,PhoneNo,Location,customer?'Customer':'Resturant') 
               navigation.navigate('SignInverify1',{path: customer?'SellerDashboard':'Dashboard'})
              }
            }}
            style={{ justifyContent:"center",height:RFValue(35),width:RFValue(120),marginTop:RFValue(5),height:RFValue(40),alignSelf:"center" }}>
            <ImageBackground
            style={{ resizeMode:'contain' ,justifyContent:"center"}}
            source={Button}
            imageStyle={{width:RFValue(120),height:RFValue(35),borderRadius:40}}
      
            >

<Text style={{alignSelf:"center",fontSize:RFValue(14),fontFamily:'Helvetica Neue',marginTop:RFValue(5)}}> Sign Up</Text>
            </ImageBackground>
            </TouchableOpacity>
      
            <View style={{flexDirection:"row",justifyContent:'center',marginLeft:RFValue(0),marginTop:RFValue(20),marginBottom:RFValue(30)}}> 
              <Text style={{alignSelf:"center",fontSize:RFValue(14),fontFamily:'Helvetica Neue',color:'#deb459'}}>
              Already an account?
            </Text>
            <TouchableOpacity
                   onPress={()=>{
                 
                   
                    navigation.navigate('SignIn')}}
            >
               <Text style={{alignSelf:"center",fontSize:RFValue(14),marginLeft:RFValue(5),
               fontFamily:'Helvetica Neue',color:'#deb459',borderBottomColor:'#deb459',borderBottomWidth:1}}>
               Sign In
            </Text>
            </TouchableOpacity>
        </View> 

            </ImageBackground>
            </View>
      
    )
}

const styles = StyleSheet.create({})
