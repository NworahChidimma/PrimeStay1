import {View,ScrollView,StyleSheet,Text,Image,FlatList,TextInput,TouchableOpacity,Dimensions,Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";
import nigerianHotels from "./components/hotelDetails";
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { savedPlaces } from "./SavedReducer";
import { useSelector } from "react-redux";


const Card = ({ hotel, index, isLiked, onToggleLike, }) => {
  // const isLiked = likedHotels[hotel.id] || false;
    
  
  return (
    <TouchableOpacity activeOpacity={1} 
    onPress={() => router.push({
        pathname: '/CardDetails',
        params: { 
      hotel: JSON.stringify(hotel)
    }
      })}
     >
    <View style={styles.card}>
      <View style={{ ...styles.cardOverlay, opacity: 0 }} />
      <View style={styles.priceTag}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          ₦{hotel.price}
        </Text>
      </View>
      <Image source={{ uri: hotel.image }} style={styles.cardImage} />
      <View style={styles.cardDetails}>
        <View
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              {hotel.name}
            </Text>
            <Text style={{ fontSize: 13, color: "gray" }}>
              {hotel.location.address}
            </Text>
          </View>

          <TouchableOpacity 
            onPress={onToggleLike}
            activeOpacity={0.7}
            style={{ padding: 5 }}
          >
            <MaterialIcons 
              name={isLiked ? "favorite" : "favorite-border"}
              size={24} 
              color={isLiked ? "red" : "rgb(12,66,94)"} 
            />
          </TouchableOpacity>
        </View>
        
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "rgb(12,66,94)", fontSize: 13 }}>
              Rating: {hotel.rating}
            </Text>
          </View>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default function Home({}) {
  const { width, height } = Dimensions.get("screen");
  const [likedHotels, setLikedHotels] = useState({});
  const navigation = useNavigation();
  const dispatch = useDispatch()
const savedHotels = useSelector((state) => state.booking.saved || []);
  
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "PrimeStay",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "rgb(12,66,94)",
        height: 100,
        borderRadius: 25,
      },
    });
  }, []);

  // const toggleLike = (hotelId) => {
  //   console.log("Toggle function called for:", hotelId);
  //   setLikedHotels(prev => {
      
  //     const newState = {
  //       ...prev,
  //       [hotelId]: !prev[hotelId]
  //     };
  //     console.log("New liked state:", newState);
  //     return newState;
  //   });
  // };


    const  isHotelSaved = (hotelId) => {
    if (!savedHotels || !Array.isArray(savedHotels)) return false;
    return savedHotels.some(h => h.id === hotelId);
  };

    const handleToggleSave = (hotel) => {
    console.log("Toggling save for:", hotel.name);
    dispatch(savedPlaces(hotel));
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={{ paddingBottom: 15 }}>
          <Text style={{ fontSize: 27, fontWeight: "bold" }}>
            Find your hotel
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 27,
                fontWeight: "bold",
                marginRight: width * 0.015,
              }}
            >
              in
            </Text>
            <Text
              style={{
                fontSize: 27,
                fontWeight: "bold",
                color: "rgb(12,66,94)",
              }}
            >
              Nigeria
            </Text>
          </View>
        </View>
        {/* <MaterialIcons
          name="notifications-none"
          size={30}
          color="rgb(12,66,94)"
        /> */}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchinputcontainer}>
          <Fontisto
            style={{ marginLeft: width * 0.05 }}
            name="search"
            size={24}
            color="black"
          />
          <TextInput
            onPress={() => {
              router.push("./searchScreen");
            }}
            placeholder="Search"
            placeholderTextColor={"gray"}
            style={{ fontSize: 20, paddingLeft: width * 0.03 }}
          />
        </View>

        <View>
          <FlatList
            horizontal
            data={nigerianHotels}
            contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20 }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <Card 
                hotel={item} 
                index={index}
              isLiked={isHotelSaved(item.id)}
                onToggleLike={() => handleToggleSave(item)}
              
              />
            )}
          />
        </View>

        <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:width*.06}}>
        <View style={{backgroundColor:"rgb(12,66,94)", alignSelf:"center", marginBottom:height*.4, height:height*.15}}>
          <Text style={{color:"white", fontSize:20, padding:16, marginTop:height*.03}}>Book with ease</Text>
        </View>

         <View style={{ borderWidth:2, borderColor:"rgb(12,66,94)", alignSelf:"center", marginBottom:height*.4, height:height*.15}}>
          <Text style={{color:"rgb(12,66,94)", fontSize:20, padding:16, marginTop:height*.02, maxWidth:width*.4}}>Discover luxury hotels</Text>
        </View>
        </View>
        


      </ScrollView>
    </SafeAreaView>
  );
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
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  card: {
    height: 280,
    width: 280,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: "white",
  },
  cardImage: {
    height: 230,
    width: "100%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  priceTag: {
    height: 60,
    width: 80,
    backgroundColor: "rgb(16,66,84)",
    position: "absolute",
    zIndex: 1,
    right: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: "center",
    alignItems: "center",
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
  cardOverlay: {
    height: 280,
    backgroundColor: "white",
    position: "absolute",
    zIndex: -1,
    width: 280,
    borderRadius: 15,
  },
});
