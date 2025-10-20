import { useEffect } from "react"
import {ImageBackground, Text, View, Image, Dimensions } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from "expo-router"
import LogIn from "./auth/login"


export default function Splash() {  

     setTimeout( () =>{
        router.navigate('./login')
     }, 3000)

     const {width, height} = Dimensions.get('screen') 
     const localImage = require('../assets/images/background.jpg') 
     
return(
    <SafeAreaView style={{justifyContent:"center", flex:1, alignItems:"center",}}>
           <ImageBackground style={{flex:1, width:width, height:height}}
           source={localImage}>

           <Image
           style={{width:width*.5, height:height*.5, alignSelf:"center", marginTop:height*.2}}
            source={require("../assets/images/PrimeStay-logo.png")}></Image>

            <Text
             style={{fontSize:40, marginBottom:12, alignSelf:'center', fontFamily:"regular", color:"rgb(12, 66, 94)"}}>
                PrimeStay
                </Text>
            <Text style={{color:'rgb(12, 66, 94)', alignSelf:"center", fontWeight:"500"}}>Comfort in air and stay</Text>
            </ImageBackground>
    </SafeAreaView>
)
}