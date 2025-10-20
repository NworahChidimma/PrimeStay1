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
import Octicons from '@expo/vector-icons/Octicons';
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useDispatch, useSelector } from "react-redux";
import { removeSaved, savedPlaces } from "./SavedReducer";

export default function Saved(){
const savedHotels = useSelector((state) => state.booking.saved || []);
console.log(savedHotels)
const {width,height} = Dimensions.get("screen")
const dispatch = useDispatch()


if (savedHotels.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Saved</Text>
        </View>

        <View style={{alignItems:"center",marginTop:width/2}}>
          <Text style={{fontSize:17, fontWeight:"bold"}}>No Saved Hotels yet</Text>
        </View>
      </SafeAreaView>
    );
  }



return(
   <ScrollView>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Saved</Text>
    </View>
    

   <FlatList
          data={savedHotels}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ padding: 15 }}
          renderItem={({ item, index }) => (
            <View>
              <View style={styles.card}>
                <View style={{flexDirection:"row"}}>
                  <View>
                  <Image
                    style={{
                      width: width*.3,
                      height: 100,
                      marginLeft: 10,
                      marginTop: 10,
                    }}
                    source={{ uri:item.image }}
                  />
                  
                  <Text style={{fontSize: 12, fontWeight: "bold", marginStart: 10,marginTop:height*.01, maxWidth:width*.3}}>{item.name}</Text>
                 
                 </View>
                 
                  <View
                    style={{
                      padding: 4,
                      
                      justifyContent: "space-between",
                      flex:1
                    }}
                  >
                    
                    <View style={{marginStart:7, marginTop:height*.02}}>


                                         <Text style={{fontSize:14, fontWeight:"bold", flexWrap:"wrap",width:"80%"}}>Address: {item.location.address}</Text>
                                         <Text style={{fontSize:14, fontWeight:"bold"}}>City: {item.location.city}</Text>
                                         <Text style={{fontSize:14, fontWeight:"bold"}}>Review count: {item.reviewCount}</Text>
                                         <Text style={{fontSize:14, fontWeight:"bold"}}>Price: ₦{item.price}</Text>
                                     
                  

  
                      <TouchableOpacity
                       onPress={() => dispatch(removeSaved(index))}
                       style={{maxWidth:width*.06, marginTop:height*.01,marginBottom:height*.01}}>
                         <Octicons name="heart-fill" size={24} color="red" />
                      </TouchableOpacity>
  
                      {/* <TouchableOpacity style={{backgroundColor:"rgb(12,66,94)",}}>
                        <Text style={{color:"white", padding:3, textAlign:"center"}}>Make Payment</Text>
                      </TouchableOpacity> */}
  
  
                    </View>
  
            
                  </View>
                </View>
              </View>
            </View>
          )}
        />

   </ScrollView>
)
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  header: {
    height: 90,
    borderBottomWidth: 1,
    borderBlockColor: "rgb(12,66,94)",
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
  bookingImage: {},
  card: {
    minheight: 150,
    width: "100%",
    elevation: 15,
    marginRight: 20,
    backgroundColor: "white",
    marginBottom: 30,
  },
});



