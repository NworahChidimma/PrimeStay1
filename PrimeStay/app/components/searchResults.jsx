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
import { router } from "expo-router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";


const SearchResults = ({data, input, setInput,}) => {
    return(
        <View style={{padding:25}}>
            <FlatList
             data={data} 
              keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
             renderItem={({item}) =>{
                const matchesSearch = item.location.city.toLowerCase().includes(input.toLowerCase()) || 
                      item.name.toLowerCase().includes(input.toLowerCase()) ||
                      item.location.address.toLowerCase().includes(input.toLowerCase()) ||
                      item.location.lga.toLowerCase().includes(input.toLowerCase())
            
                    if(input ==="" || !matchesSearch){
                        return null
                    }
                    return <TouchableOpacity activeOpacity={1}  onPress={() => {
                                router.push({
                                    pathname: '/CardDetails',
                                    params: { 
                                        hotel: JSON.stringify(item) 
                                    }
                                });
                            }} >
                        <View style={styles.card}>
                        <View>
                            <Image style={styles.searchImage} source={{uri: item.image}}/>
                        </View>

                       
                        <View style={{padding:4, flexDirection:"row", justifyContent:"space-between"}}>
                        <View>
                            <Text style={{fontWeight:"bold", fontSize:18}}>{item.name}</Text>
                            <Text>{item.location.address}</Text>
                            <Text>LGA: {item.location.lga}</Text>
                        </View>
                        
                        </View>
                       

                        </View>
                    </TouchableOpacity>
                

            }}
            
            />
        </View>
    )
}

export default SearchResults
 const styles = StyleSheet.create({
    searchImage:{
        width: '100%',
        height:150,
        borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    },
     card: {
    height: 250,
    width: 250,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom:30
  },
  cardDetails: {
    height: 100,
    borderRadius: 15,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: "100%",
  },
 })