import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className=" text-gray-100 font-medium text-xl">{title}</Text>

      <View
        style={{
          borderWidth: 1,
          borderColor: "#7b7b8b",
          backgroundColor: "#1a1a1f",
          borderRadius: 13,
          height: 50,
          flex: 1,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <TextInput
          className="flex-1 text-white font-black text-base "
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyehide} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
