import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
export default class User{

   async setUser(email,password,PhoneNo,Location,Type){
     
      firestore()
      .collection('Users')
      // Filter results
      .where('email', '==', email)
      .get().then(emailExist=>{

        if (emailExist.empty) {
          firestore()
          .collection('Users')
          // Filter results
          .where('PhoneNumber', '==', PhoneNo)
          .get().then(Ph=>{
    
            if (Ph.empty) {
          firestore()
          .collection('Users')
          .add({
   
      email: email,
      PhoneNumber:PhoneNo,
      password: password,
      Location:Location,
      UserType:Type
    })
    .then(() => console.log('Data set.'));
  
       }
      })
    }
  })
  
}
getUser(Userid,password,flag){
  firestore()
  .collection('Users')
  // Filter results
  .where('email', '==', Userid)
  .get().then(emailExist=>{

    if (emailExist.empty) {
      firestore()
      .collection('Users')
      // Filter results
      .where('PhoneNumber', '==', Userid)
      .get().then(Ph=>{ 

        if (!Ph.empty) {
           
              Ph.forEach(e=>{ 
                if(e.data().password==password){
                  console.log( e.data().UserType)
               flag( e.data().UserType)
              }
              }) 
       }
       })
    }else{

   
         
        emailExist.forEach(e=>{ 
          if(e.data().password==password){
            console.log( e.data().UserType)
         flag( e.data().UserType)
        }
        }) 
 
    }
  
  
  })
  
}

}