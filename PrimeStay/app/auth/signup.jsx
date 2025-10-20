import {Text, View, ScrollView, Image, Dimensions, TextInput, StyleSheet,
   TouchableOpacity, Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 import { useState, useEffect } from "react";
 import Feather from '@expo/vector-icons/Feather';
 import { router } from "expo-router";
  import {auth} from '../firebase'


  export default function Signup() {
const {width,height}= Dimensions.get("screen")
  const [passwordVisible, setPasswordVisible]= useState(false)
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email,password)
    .then(userCredentials => {
      const user =userCredentials.user
      console.log(user)
    })
    .catch(error => alert(error.message))
  }

  

  return (
    <ScrollView style={{marginHorizontal:15}}>
      <SafeAreaView>
        <Text style={{fontSize:18, fontWeight:"300", textAlign:"center", margin:5}}>Sign-up</Text>
        <View style={styles.line}>
        </View>


    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection:"row",
        marginTop:height*.03, 
        marginBottom:height*.05
      }}
    >

      <Text style={{fontSize:29}}> Welcome to</Text>
      <Text
       style={{fontSize:29, color:"rgb(12,66,94)", marginLeft:5, fontStyle:"italic"}}>
        PrimeStay
      </Text>
    </View>

    <Text
     style={{fontSize:20, color:"rgb(12,66,94)", marginBottom:height*.01}}>
      Username
      </Text>
    <TextInput
     style={{height:height*.06, borderWidth:1, borderColor:"black", borderRadius: 15, marginBottom:height*.03, padding:10}}
      placeholder= "username" placeholderTextColor={"gray"} >
      </TextInput>

     
       <Text style={{fontSize:20, color:"rgb(12,66,94)", marginBottom:height*.01}}>
        E-Mail
        </Text>
    <TextInput keyboardType="email-address"
     style={{height:height*.06, borderWidth:1, borderColor:"black", borderRadius: 15, marginBottom:height*.03, padding:10}} 
     placeholder= "e-mail" placeholderTextColor={"gray"} onChangeText={text => setEmail(text)} value={email}>
     </TextInput>


    <Text style={{fontSize:20, color:"rgb(12,66,94)", marginBottom:height*.01}}>Password</Text>
    <TextInput secureTextEntry={!passwordVisible}
     style={{height:height*.06, borderWidth:1, borderColor:"black", borderRadius: 15, marginBottom:height*.01, padding:10}}
      placeholder= "password" placeholderTextColor={"gray"}  value={password} onChangeText={text => setPassword(text)}>

      </TextInput>

      <TouchableOpacity onPress={() => {

            setPasswordVisible(!passwordVisible)

          }} style={{bottom:height*.055, left:width*.83}}>
          <Text  style={{color:"black"}}>{passwordVisible ? <Feather name="eye" size={24} color="black" /> : <Feather name="eye-off" size={24} color="black" />}</Text>
          </TouchableOpacity>

          <View style={{ 
               flex: 1,
               alignItems: "center",
               flexDirection:"row",
               alignSelf:'center', 
               marginTop:height*.03
              
               }}>
            <Text style={{marginRight:5, fontSize:16,}}>Already have an account? back to</Text>
            <TouchableOpacity>
            <Text onPress={()=> router.back("./login")} style={{fontSize:16, color:"rgb(12,66,94)"}}>Log-in</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleSignUp} style={{backgroundColor:"rgb(12,66,94)", borderRadius:50, marginTop:40}}>
            <Text style={{padding:15, textAlign:"center", color:"white", fontSize:20}}>
              Sign up
            </Text>
           </TouchableOpacity>

    </SafeAreaView>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  line: {
    borderBottomColor:"lightgray",
    borderBottomWidth:1,
    height:1,
    backgroundColor:"lightgray",
    width:'100%',
    marginVertical:10
  }
})