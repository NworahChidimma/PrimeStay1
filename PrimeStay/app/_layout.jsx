import { HeaderShownContext } from "@react-navigation/elements";
import { Stack } from "expo-router";
import Splash from "./splash"
import { useEffect, useState } from "react";
import {useFonts} from "expo-font"
import StackNavigator from "./StackNavigator";
import { Provider } from 'react-redux'
import store from './store'






export default function RootLayout() {
  
    const [splash, setSplash] = useState(true)
    const [loaded, error] = useFonts({
      regular: require("../assets/fonts/Poppins/Poppins-Black.ttf")
    })

    useEffect( () =>{
      setTimeout( () => {
        setSplash(false)
      }, 5000)
    })

  if(splash || !loaded){
    return (
      <Splash/>
    )

  }
    

  return(
    <Provider store={store}>
   <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen options={{headerShown:false}} name="login" />
       <Stack.Screen options={{headerShown:false}} name="splash" />
       <Stack.Screen name="home" />
       <Stack.Screen name="auth"/>
       <Stack.Screen name="StackNavigator" />
       <Stack.Screen name="searchScreen" />
       <Stack.Screen name="CardDetails" />
       <Stack.Screen name="bookNow" />
  </Stack>
  </Provider>
  
   )
}
