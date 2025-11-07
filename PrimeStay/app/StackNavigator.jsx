import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Saved from './Saved'
import Profile from './Profile'
import Booking from './Booking'
import Home from "./home";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import React from "react";
import { useState, createContext,useContext } from "react";



export default function StackNavigator(){

    


      const Tab  = createBottomTabNavigator();
      const Stack = createNativeStackNavigator();
    
      function BottomTabs() {
        return (
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: "Home",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                  focused ? (
                    <MaterialIcons name="home" size={24} color="rgb(12,66,94)" />
                  ) : (
                    <MaterialCommunityIcons
                      name="home-outline"
                      size={24}
                      color="black"
                    />
                  ),
              }}
            />
    
            <Tab.Screen
              name="Saved"
              component={Saved}
              options={{
                tabBarLabel: "Saved",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                  focused ? (
                   <Octicons name="heart-fill" size={24} color="rgb(12,66,94)" />
                  ) : (
                    <MaterialCommunityIcons name="heart-outline" size={24} color="black" />
                  ),
              }}
            />
    
            <Tab.Screen
              name="Bookings"
              component={Booking}
              options={{
                tabBarLabel: "Bookings",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                  focused ? (
                    <MaterialIcons name="notifications" size={24} color="rgb(12,66,94)" />
                  ) : (
                   <MaterialIcons name="notifications-none" size={24} color="black" />
                  ),
              }}
            />
    
             <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarLabel: "Profile",
                headerShown: false,
                tabBarIcon: ({ focused }) =>
                  focused ? (
                   <Ionicons name="person" size={24} color="rgb(16,66,94)" />
                  ) : (
                 <Ionicons name="person-outline" size={24} color="black" />
                  ),
              }}
            />
    

          </Tab.Navigator>

          
        );
      }
    
    return (
       <NavigationIndependentTree>
       <NavigationContainer>
           <Stack.Navigator>
               <Stack.Screen options={{headerShown:false}} name="Main" component={BottomTabs} />
           </Stack.Navigator>
       </NavigationContainer>
       </NavigationIndependentTree>
)}