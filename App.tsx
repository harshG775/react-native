/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

type CardProps = {
    bg: string;
    children?: React.ReactNode;
};

function Card(props: CardProps) {
    const { bg, children } = props;
    return (
        <View className={`items-center justify-center w-32 h-32 rounded-md m-2 ${bg}`}>
            <Text className="text-white">{children}</Text>
        </View>
    );
}

export default function App() {
    return (
        <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Text className="text-3xl">FlatCard</Text>
                <ScrollView
                        horizontal={true}
                        contentInsetAdjustmentBehavior="automatic"
                        className="bg-neutral-700 "
                    >
                    <Card bg="bg-red-600">Text</Card>
                    <Card bg="bg-blue-600">Text</Card>
                    <Card bg="bg-green-600">Text</Card>
                    <Card bg="bg-orange-600">Text</Card>
                </ScrollView>
                <View>
                    <Image
                        className="w-full h-60"
                        source={{
                            uri: "https://c4.wallpaperflare.com/wallpaper/974/565/254/windows-11-windows-10-minimalism-hd-wallpaper-preview.jpg",
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
// export default function App() {

//     return (
//         <SafeAreaView className="h-full pb-12">
//             <ScrollView
//                 contentInsetAdjustmentBehavior="automatic"
//                 className="h-full"
//                 >
//                 <Home />
//                 <Home />
//                 <Home />
//                 <Home />
//                 <Home />
//                 <Home />
//                 <Home />
//                 <Home />
//                 <Home />
//                 <Home />
//                 <Home />
//                 <Home />
//                 <Home />
//                 <Home />
//                 <Home />
//                 <Home />
//             </ScrollView>
//             <Navbar />
//         </SafeAreaView>
//     );
// }
