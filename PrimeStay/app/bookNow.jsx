import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Pressable,
  TextInput,
} from "react-native";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fontisto, AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bookedPlaces } from "./SavedReducer";
import StackNavigator from "./StackNavigator";

export default function BookNow() {
  const { width, height } = Dimensions.get("screen");
  const params = useLocalSearchParams();
  const hotel = JSON.parse(params.hotel);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const navigation = useNavigation()

 
  const [rooms, setRooms] = useState(1);
  const [nights, setNights] = useState(1);

  const total = hotel.price * nights * rooms;
    
    const dispatch = useDispatch()
    const ConfirmBooking = () =>{

      if (!checkInDate || !checkOutDate) {
      alert("Please enter check-in and check-out dates");
      return ;
    }

      const bookingData = {
    hotel: hotel,
    checkInDate: checkInDate,
    checkOutDate: checkOutDate,
    rooms: rooms,
    nights: nights,
    totalPrice: total,
    bookingDate: new Date().toISOString(),
    bookingId: Date.now().toString(),
  };


      dispatch(bookedPlaces(bookingData))
      router.replace('./StackNavigator')
    }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white",}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrow-left" size={24} color="rgb(12,66,94)" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Book Hotel</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.formContainer}>
          {/* Destination */}
          <Pressable style={styles.inputBox}>
            <Text style={styles.label}>Destination</Text>
            <Text style={styles.value}>{hotel.name}</Text>
            <Text style={styles.subValue}>{hotel.location.city}</Text>
          </Pressable>

          {/* Check-in Date */}
          <Pressable style={styles.inputBox}>
            <Fontisto name="date" size={20} color="rgb(12,66,94)" />
            <View style={{ marginLeft: 15, flex: 1 }}>
               <Text style={{fontWeight:"bold"}}>Check-in</Text>
              <TextInput
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#333",
                  padding: 0,
                  paddingTop: 5,
                }}
                placeholder="DD/MM/YYYY"
                 placeholderTextColor="gray"
                value={checkInDate}
                onChangeText={setCheckInDate}
              ></TextInput>
            </View>
          </Pressable>

          {/* Check-out Date */}
          <Pressable style={styles.inputBox}>
            <Fontisto name="date" size={20} color="rgb(12,66,94)" />
            <View style={{ marginLeft: 15, flex: 1 }}>
              <Text style={{fontWeight:"bold"}}>Check-out</Text>
              <TextInput
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#333",
                  padding: 0,
                  paddingTop: 5,
                }}
                placeholder="DD/MM/YYYY"
                 placeholderTextColor="gray"
                value={checkOutDate}
                onChangeText={setCheckOutDate}
              ></TextInput>
            </View>
          </Pressable>

          {/* Nights */}
          <View style={styles.inputBox}>
            <Text style={styles.label}>Number of Nights</Text>
            <View style={styles.counter}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setNights(Math.max(1, nights - 1))}
              >
                <AntDesign name="minus" size={18} color="white" />
              </TouchableOpacity>
              <Text style={styles.number}>{nights}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setNights(nights + 1)}
              >
                <AntDesign name="plus" size={18} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Rooms */}
          <View style={styles.inputBox}>
            <Text style={styles.label}>Number of Rooms</Text>
            <View style={styles.counter}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setRooms(Math.max(1, rooms - 1))}
              >
                <AntDesign name="minus" size={18} color="white" />
              </TouchableOpacity>
              <Text style={styles.number}>{rooms}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setRooms(rooms + 1)}
              >
                <AntDesign name="plus" size={18} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Total Price */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total Price</Text>
          <Text style={styles.totalAmount}>₦{total.toLocaleString()}</Text>
          <Text style={styles.breakdown}></Text>
        </View>

        {/* Booking Button */}
        <TouchableOpacity
          style={styles.bookButton}
        onPress={ConfirmBooking}
        >
            {/* ctrl alt f */}
          <Text style={styles.bookButtonText}>Confirm Booking</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgb(12,66,94)",
  },
  formContainer: {
    padding: 20,
  },
  inputBox: {
    padding: 15,
    borderWidth: 2,
    borderColor: "rgb(12,66,94)",
    borderRadius: 10,
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  subValue: {
    fontSize: 14,
    color: "gray",
    marginTop: 3,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
    marginTop: 10,
  },
  button: {
    backgroundColor: "rgb(12,66,94)",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontSize: 22,
    fontWeight: "bold",
    minWidth: 40,
    textAlign: "center",
  },
  totalContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    alignItems: "center",
  },
  totalLabel: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  totalAmount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "rgb(12,66,94)",
    marginBottom: 5,
  },
  breakdown: {
    fontSize: 14,
    color: "gray",
  },
  bookButton: {
    backgroundColor: "rgb(12,66,94)",
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 18,
    borderRadius: 10,
    alignItems: "center",
  },
  bookButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
