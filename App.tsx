/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Navbar from "@src/components/partials/Navbar";
import Home from "@src/screen/home/Screen";
import React from "react";
import {SafeAreaView, ScrollView, Text} from "react-native";

export default function App() {
    
    return (
        <SafeAreaView className="h-full pb-12">
            <ScrollView 
                contentInsetAdjustmentBehavior="automatic"
                className="h-full"
                >
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
            </ScrollView>
            <Navbar />
        </SafeAreaView>
    );
}