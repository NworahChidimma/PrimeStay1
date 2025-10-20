import {Text, View, ScrollView, Image, Dimensions, TextInput, StyleSheet,
   TouchableOpacity, Pressable,
   KeyboardAvoidingView,
   Alert} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 import { useState, useEffect } from "react";
  import Feather from '@expo/vector-icons/Feather';
  import { router, useNavigation } from "expo-router";
  import Home from '../home'
  import StackNavigator from "../StackNavigator";
    import {auth} from '../firebase'
  

export default function LogIn() {
const {width,height}= Dimensions.get("screen")
  const [passwordVisible, setPasswordVisible]= useState(false)
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()
  useEffect(()=> {
   const unsubscribe = auth.onAuthStateChanged(user =>{
      if(user){
        navigation.navigate("StackNavigator")
      }
    })
    return unsubscribe
  },[])


  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email,password)
    .then(userCredentials => {
      const user =userCredentials.user
      console.log('logged in with', user.email)
    })
    .catch(error => Alert.alert("Invalid Credentials"))
  }
   
  return (
    <ScrollView style={{marginHorizontal:15}}>
      <KeyboardAvoidingView>
      <SafeAreaView>
        <Text style={{fontSize:18, fontWeight:"300", textAlign:"center", margin:5}}>Log-in</Text>
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
      <Text style={{fontSize:29, color:"rgb(12,66,94)", marginLeft:5, fontStyle:"italic"}}>PrimeStay</Text>
    </View>

    <Text style={{fontSize:20, color:"rgb(12,66,94)", marginBottom:height*.01}}>E-mail</Text>
    <TextInput
     style={{height:height*.06, borderWidth:1, borderColor:"black", borderRadius: 15, marginBottom:height*.03, padding:10}} 
     placeholder= "email" placeholderTextColor={"gray"} onChangeText={text => setEmail(text)} value={email}
      >
     </TextInput>
     
    <Text style={{fontSize:20, color:"rgb(12,66,94)", marginBottom:height*.01}}>Password</Text>
    <TextInput secureTextEntry={!passwordVisible}
     style={{height:height*.06, borderWidth:1, borderColor:"black", borderRadius: 15, marginBottom:height*.01, padding:10}}
      placeholder= "password" placeholderTextColor={"gray"}  value={password} onChangeText={text => setPassword(text)}  >
      </TextInput>

      <TouchableOpacity onPress={() => {

            setPasswordVisible(!passwordVisible)

          }} style={{bottom:height*.055, left:width*.83}}>
          <Text  style={{color:"black"}}>{passwordVisible ? <Feather name="eye" size={24} color="black" /> : <Feather name="eye-off" size={24} color="black" />}</Text>
          </TouchableOpacity>

      <TouchableOpacity>
            <Text onPress={() => router.push("./forgotpassword")} style={{ color:"#757575", textAlign:"right", fontSize:17, fontWeight:"semibold"}}>
              Forgot password?
            </Text>
          </TouchableOpacity>

          <View style={{ 
               flex: 1,
               alignItems: "center",
               flexDirection:"row",
               alignSelf:'center', 
               marginTop:height*.03
              
               }}>
            <Text style={{marginRight:5, fontSize:16,}}>Don't have an account yet?</Text>
            <TouchableOpacity>
            <Text onPress={()=> router.push("./signup")} style={{fontSize:16, color:"rgb(12,66,94)"}}>Sign-up</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleLogin} style={{backgroundColor:"rgb(12,66,94)", borderRadius:50, marginTop:40}}>
            <Text style={{padding:15, textAlign:"center", color:"white", fontSize:20}}>
              Log in
            </Text>
           </TouchableOpacity>
 
    </SafeAreaView>
    </KeyboardAvoidingView>
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