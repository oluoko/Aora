import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl font-pblack">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" className="text-blue-400">
        Go To Profile
      </Link>
    </View>
  );
}
