import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { auth } from "./firebase";
import LogIn from "./auth/login";
export default function Profile() {
  const { width, height } = Dimensions.get("screen");
  const navigation = useNavigation()
  const handleSignOut =() =>{
    auth
    .signOut()
    .then(() =>{
        router.push('/auth/login')
    })
    .catch(error =>alert(error.message))

  }
  return (
    <SafeAreaView>
      <View
        style={{
          width: width * 0.5,
          height: height * 0.3,
          backgroundColor: "white",
          alignItems: "center",
          alignSelf: "center",
          borderRadius: "50%",
          borderWidth: 5,
          borderColor: "rgb(12,66,94)",
        }}
      >
        <Text
          style={{
            fontSize: 100,
            marginTop: height * 0.05,
            color: "rgb(12,66,94)",
          }}
        >
          {auth.currentUser?.email[0]}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: height * 0.05,
          marginStart: width * 0.03,
        }}
      >
        <Text style={{ fontSize: 20 }}>Email: </Text>
        <Text style={{ fontSize: 20 }}>{auth.currentUser?.email}</Text>
      </View>
      <TouchableOpacity
      onPress={handleSignOut}
        style={{
          width: 300,
          height: 70,
          marginTop: height * 0.3,
          backgroundColor: "rgb(12,66,94)",
          alignSelf:"center",
          borderRadius:5
        }}
      >
        <Text
          style={{
            padding: 19,
            textAlign: "center",
            color: "white",
            fontSize: 20,
          }}
        >
          Sign out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
