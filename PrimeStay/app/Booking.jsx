import React, { useState, useEffect } from "react";
import {View,Text,FlatList,StyleSheet,Image,Dimensions,TouchableOpacity,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { useLocalSearchParams } from "expo-router";
import { removeBooking } from './SavedReducer'


const BookingScreen = () => {
  const { width, height } = Dimensions.get("screen");
  const bookings = useSelector((state) => state.booking.booking);
  const dispatch = useDispatch();
  const params = useLocalSearchParams();
  console.log(bookings);

  if (bookings.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Bookings</Text>
        </View>

        <View style={{alignItems:"center",marginTop:width/2}}>
          <Text style={{fontSize:17, fontWeight:"bold"}}>No Bookings Yet</Text>
          <Text style={{fontSize:17, fontWeight:"bold"}}>Book your first hotel and it will appear here!</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Bookings ({bookings.length})</Text>
      </View>

      <FlatList
        data={bookings}
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
                  source={{ uri: item.hotel.image }}
                />
              
                <Text style={{fontSize: 12, fontWeight: "bold", marginStart: 10,marginTop:height*.01}}>{item.hotel.name}</Text>
               
               </View>
               
                <View
                  style={{
                    padding: 4,
                    flexDirection: "row",
                    justifyContent : "space-between",
                  }}
                >
                  
                  <View style={{marginStart:7}}>
                    <Text style={{fontSize:14, fontWeight:"bold"}}>CheckIn: {item.checkInDate}</Text>
                    <Text style={{fontSize:14, fontWeight:"bold"}}>CheckOut: {item.checkOutDate}</Text>
                    <Text style={{fontSize:14, fontWeight:"bold"}}>Rooms: {item.rooms}</Text>
                    <Text style={{fontSize:14, fontWeight:"bold"}}>Total: ₦{item.totalPrice}</Text>


                    <TouchableOpacity
                     onPress={() => dispatch(removeBooking(index))}
                     style={{backgroundColor:"rgb(12,66,94)", marginBottom:height*.01, width:width*.2, marginTop:height*.05, marginStart:width*.25}}>
                      <Text style={{color:"white", padding:3, textAlign:"center"}}>Cancel</Text>
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
    </SafeAreaView>
  );
};

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
    height: 150,
    width: "100%",
    elevation: 15,
    marginRight: 20,
    backgroundColor: "white",
    marginBottom: 30,
  },
});

export default BookingScreen;
