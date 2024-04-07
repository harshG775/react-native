import {View, Text} from "react-native";
import React from "react";

export default function Navbar() {
    return (
        <View className="
            bg-neutral-800/100 absolute w-full bottom-0 
            flex flex-row justify-evenly items-center bg-red-500
            h-12
            ">
            <Text className="font-semibold text-lg">Home</Text>
            <Text className="font-semibold text-lg">Link</Text>
            <Text className="font-semibold text-lg">Search</Text>
            <Text className="font-semibold text-lg">Link</Text>
            <Text className="font-semibold text-lg">User</Text>
        </View>
    );
}
