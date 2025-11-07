import {View,ScrollView,StyleSheet,Text,TouchableOpacity, Dimensions,ImageBackground, StatusBar,} from "react-native";
import { router, useLocalSearchParams } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from 'react-redux';
import { savedPlaces } from './SavedReducer'; 


export default function CardDetails (){
     const params = useLocalSearchParams()
  const hotel = JSON.parse(params.hotel)
  const {width,height} = Dimensions.get('screen')
  
   const dispatch = useDispatch()
  const savedHotels = useSelector((state) => state.booking.saved || [])

    const isSaved = savedHotels.some(h => h.id === hotel.id)

      const handleToggleSave = () => {
    dispatch(savedPlaces(hotel))
  }
  
  return (
     <ScrollView 
     showsVerticalScrollIndicator={false}
     style={{backgroundColor:"white", paddingBottom:20}}>
      <StatusBar barStyle='light-content' translucent backgroundColor='rgba(0,0,0,0)' />

      <ImageBackground  source={{ uri: hotel.image }} style={styles.headerImage}>
        <View style={styles.header}>
          <AntDesign onPress={() =>{router.back('./home')}} name="arrow-left" size={30} color="white" />
           <TouchableOpacity onPress={handleToggleSave}>
            <MaterialCommunityIcons 
              name={isSaved ? "heart" : "heart-outline"} 
              size={30} 
              color={isSaved ? "red" : "white"} 
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>


      <View style={{marginTop:height*.01, paddingHorizontal:width*.04}}>
        <Text style={{fontSize:25,fontWeight:"bold"}}>{hotel.name}</Text>
        <Text style={{fontSize:15,fontWeight:"400", marginTop:5,color:"gray"}}>{hotel.location.address}</Text>
      </View>


      <View style={{marginTop:height*.01, flexDirection:"row", justifyContent:"space-between", marginHorizontal:width*.04}}>
        <Text style={{fontSize:17}}>Rating: {hotel.rating}</Text>
        <Text style={{fontSize:17}}>{hotel.reviewCount} reviews</Text>
      </View>

      <View style={{marginHorizontal:width*.04,marginTop:height*.02}}>
        <Text style={{fontSize:16,color:"gray"}}>
          {hotel.name} is one of Nigeria's many fine hotels located at {hotel.location.address}, {hotel.location.city} which provides you with {hotel.amenities[0]}, {hotel.amenities[1]}, {hotel.amenities[2]}, {hotel.amenities[3]},
           {hotel.amenities[4]}, {hotel.amenities[5]}, and many more at an affordable price.
        </Text>
      </View>

      <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:height*.02}}>
        <Text style={{fontSize:20, fontWeight:"bold",marginTop:height*.015,marginStart:width*.04}}>Price per night</Text>
        <Text
         style={{fontSize:20,
          backgroundColor:"rgb(12, 66, 94)",
          color:"white",
          height:height*.07,
          width:width*.5,
          borderTopLeftRadius:50,
          borderBottomLeftRadius:50,
          textAlign:"center",
          paddingTop:height*.015
          }}>
            ₦{hotel.price}
            </Text>
      </View>

    <SafeAreaView style={{flex: 1,backgroundColor: 'white',}}>
      <TouchableOpacity onPress={() => router.push({
              pathname: '/bookNow',
              params: { 
            hotel: JSON.stringify(hotel)
          }
            })}
       style={{alignItems:"center", marginTop:height*.03}}>
          <Text style ={{backgroundColor:"rgb(12, 66, 94)", fontSize:20,
          color:"white",
          height:height*.07,
          width:width*.8, 
          textAlign:"center",
          borderRadius:10,
          paddingTop:height*.015}}>Book Now</Text>
      </TouchableOpacity>
      </SafeAreaView>
     </ScrollView>
     
  );
};



 

const styles = StyleSheet.create({
  headerImage :{
    height :400,
    borderBottomRightRadius:40,
    borderBottomLeftRadius:40,
    overflow:"hidden"
  },
  header:{
    marginTop:50,
    flexDirection:"row",
    alignItems:"center",
    marginHorizontal:20,
    justifyContent:"space-between"
  },
});