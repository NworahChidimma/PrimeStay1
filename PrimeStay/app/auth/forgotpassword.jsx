import { useEffect } from "react"
import {ImageBackground, Text, View, Image, Dimensions, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from "expo-router"

export default function ForgotPassword() {
    return(
        <ScrollView >
            <SafeAreaView>
                <Text>This is the forgotten password screen</Text>
            </SafeAreaView>
        </ScrollView>
    )

}