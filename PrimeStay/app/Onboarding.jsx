import React from "react";
import {
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const { width, height } = Dimensions.get("screen");

const COLORS = { primary: "rgb(12,66,94)" };

const slides = [
  {
    id: "1",
    title: "Welcome to PrimeStay",
    description: "Comfort in stay like no other",
    image : require("../assets/images/Onboarding1.png"),
  },
  {
    id: "2",
    title: "Easy booking",
    description: "Book room and pay from the comfort of your home",
    image: require("../assets/images/Onboarding2.png"),
  },
  {
    id: "3",
    title: "Comfort",
    description: "You get to pick out a place best suited for you!",
    image: require("../assets/images/Onboarding3.png"),
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item.image}
        style={{ height: "75%", width, resizeMode: "contain" }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};
const Onboarding = ({ navigation }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
    const ref = React.useRef(null)
  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}>
           {slides.map((_,index)=>( 
            <View key={index} style={[styles.indicator, currentSlideIndex == index && {backgroundColor:COLORS.primary, width:25}]} />
            ))}
        </View>
        <View style={{marginBottom:20}}>
          {
            currentSlideIndex == slides.length - 1 ?  <View style={{height:50}}>
             <TouchableOpacity onPress={()=>router.replace("./login")} style={[styles.btn,]}>
                <Text style={{color:"white", fontWeight:"bold", fontSize:15}}>GET STARTED</Text>
            </TouchableOpacity>
          </View> :
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={skip} style={[styles.btn,{backgroundColor:"transparent", borderWidth:2, borderBlockColor:COLORS.primary,}]}>
                <Text style={{color:COLORS.primary,fontWeight:"bold", fontSize:15}}>SKIP</Text>
            </TouchableOpacity>
            <View style={{width:15}}></View>
             <TouchableOpacity onPress={goNextSlide} style={[styles.btn,]}>
                <Text style={{color:"white", fontWeight:"bold", fontSize:15}}>NEXT</Text>
            </TouchableOpacity>
        </View>
          }
         
       
      </View>
      </View>
    );
  };
  const updateCurrentSlideIndex = e =>{
    const contentOffsetX = e.nativeEvent.contentOffset.x
    const currentIndex = Math.round(contentOffsetX/width)
    setCurrentSlideIndex(currentIndex)
  }
  const goNextSlide =() => {
    const nextSlideIndex = currentSlideIndex + 1
    if (nextSlideIndex != slides.length){
        const offset = nextSlideIndex*width
    ref?.current?.scrollToOffset({offset})
    setCurrentSlideIndex(nextSlideIndex)
    
    }
  }

  const skip = () =>{
    const lastSlideIndex = slides.length -1 
    const offset = lastSlideIndex*width
     ref?.current?.scrollToOffset({offset})
         setCurrentSlideIndex(lastSlideIndex)
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      ref={ref}
      onMomentumScrollEnd={updateCurrentSlideIndex}
        data={slides}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => <Slide item={item} />}
        pagingEnabled
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"rgb(12,66,94)"
  },
  title: {
    color: COLORS.primary,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    marginTop: 10,
    maxWidth: "70%",
    color: COLORS.primary,
    textAlign: "center",
    lineHeight: 23,
  },
  indicator:{
    height:2.5,
    width:10,
    backgroundColor:"grey",
    marginHorizontal:3,
    borderRadius:2
  },
 btn :{
     flex:1,
  height:50,
  borderRadius:5,
  backgroundColor:COLORS.primary,
  justifyContent:"center",
  alignItems:"center"
 }
});

export default Onboarding;
