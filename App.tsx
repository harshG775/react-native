/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Home from "@src/screen/home/Screen";
import React from "react";
import {SafeAreaView, ScrollView, Text} from "react-native";

export default function App() {
    
    return (
        <SafeAreaView>
            <ScrollView 
                contentInsetAdjustmentBehavior="automatic"
                className="h-full "
                >
                <Home />
                <Home />
                <Home />
                <Home />
            </ScrollView>
        </SafeAreaView>
    );
}