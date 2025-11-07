import { HeaderShownContext } from "@react-navigation/elements";
import { Stack } from "expo-router";
import firebase from "firebase/compat/app";
import { useEffect } from "react";
import { useState } from "react"


export default function AuthLayout() {
  return <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen options={{headerShown:false}} name="login" />
       <Stack.Screen options={{headerShown:false}} name="signup" />
       <Stack.Screen name="forgotpassword" />
       <Stack.Screen name="firebase" />
  </Stack>;
}