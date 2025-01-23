import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-[#ff8e01] rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
      style={{
        backgroundColor: "#ff8e01",
        borderRadius: 17,
        minHeight: 62,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className={`${textStyles} text-primary font-black`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
