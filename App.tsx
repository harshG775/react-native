/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Home from "@src/screens/home/Screen";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

export default function App() {
    return (
        <SafeAreaView className="h-full">
            <ScrollView
                contentInsetAdjustmentBehavior="automatic" 
                className="h-full bg-stone-900"
                >
                <Home />
            </ScrollView>
            
        </SafeAreaView>
    );
}
