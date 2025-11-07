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
} from "react-native";
import  { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import nigerianHotels from "./components/hotelDetails";
import SearchResults from './components/searchResults'
import { router } from "expo-router";



export default function SearchScreen (){
     const [input,setInput] = useState('')
       const { width, height } = Dimensions.get("screen");
    return(
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
               <MaterialIcons style={{marginStart:20}} onPress={()=>{router.back('./home')}} name="home" size={30} color="rgb(12,66,94)" />
        <View style={styles.searchinputcontainer}>
          <Fontisto
            style={{ marginLeft: width * 0.05 }}
            name="search"
            size={24}
            color="black"
          />
          <TextInput
          value={input} onChangeText={(text) => setInput(text)}
            placeholder="Search"
            placeholderTextColor={"gray"}
            style={{ fontSize: 20, paddingLeft: width * 0.03 }}
          />
        </View>
        <SearchResults data={nigerianHotels} input={input} setInput={setInput} />
        
        </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  header: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  searchinputcontainer: {
    height: 50,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "lightgray",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  
});
