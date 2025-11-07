import { Stack, useRouter } from "expo-router";
import Splash from "./splash"
import React, { useEffect, useState } from "react";
import {useFonts} from "expo-font"
import { Provider } from 'react-redux'
import store from './store'
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isAppFirstLaunched, setIsAppfirstLaunched] = useState(null)
  const [splash, setSplash] = useState(true)
  const router = useRouter()
  
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    'Poppins-Bold': require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    'Poppins-Black': require("../assets/fonts/Poppins/Poppins-Black.ttf"),
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false)
    }, 5000)
    
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const appData = await AsyncStorage.getItem("isAppFirstLaunched")
        if (appData == null) {
          setIsAppfirstLaunched(true);
          await AsyncStorage.setItem("isAppFirstLaunched", "false")
        } else {
          setIsAppfirstLaunched(false)
        }
      } catch (error) {
        console.error("Error checking first launch:", error)
        setIsAppfirstLaunched(false);
      }
    };
    checkFirstLaunch()
  }, [])

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  useEffect(() => {
    if (!splash && fontsLoaded && isAppFirstLaunched !== null) {
      if (isAppFirstLaunched) {
        router.replace("/Onboarding")
      } else {
        router.replace("/login")
      }
    }
  }, [splash, fontsLoaded, isAppFirstLaunched])

  if (fontError) {
    console.error("Font loading error:", fontError)
  }

  if (splash || !fontsLoaded || isAppFirstLaunched === null) {
    return <Splash />
  }
  return(
       <Provider store={store}>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen options={{headerShown: false}} name="login" />
        <Stack.Screen options={{headerShown: false}} name="splash" />
        <Stack.Screen name="home" />
        <Stack.Screen name="(auth)"/>
        <Stack.Screen name="StackNavigator" />
        <Stack.Screen name="searchScreen" />
        <Stack.Screen name="CardDetails" />
        <Stack.Screen name="bookNow" />
        {isAppFirstLaunched && <Stack.Screen name="Onboarding" />}
      </Stack>
    </Provider>

  
   )
}
