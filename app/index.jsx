import { Image, ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";

export default function Index() {
  return (
    <SafeAreaView className="bg-[#161622] h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center h-full px-4">
          <Image
            source={images.logo}
            style={{ width: 130, height: 80 }}
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            style={{ width: 300, height: 250 }}
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-2xl text-white font-bold text-center">
              Discover Endless Creative Possibilities with{" "}
              <Text className="text-[#ff8e01] text-[30px]">Aora</Text>
            </Text>
            <Image
              source={images.path}
              style={{ width: 120, height: 15 }}
              className="absolute -bottom-2 right-2"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm text-gray-100 mt-7 text-center">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
