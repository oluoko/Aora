import { ScrollView, View, Image, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";

import { useState } from "react";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigation = useNavigation();
  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert(
        "Error",
        "All fields are required. Please fill in all fields"
      );
    }
    // if (!form.username) {
    //   Alert.alert(
    //     "Error",
    //     "Username is required. Please fill in all the fields"
    //   );
    // } else if (!form.email) {
    //   Alert.alert("Error", "Email is required. Please fill in all the fields");
    // } else if (!form.password) {
    //   Alert.alert(
    //     "Error",
    //     "Password is required. Please fill in all the fields"
    //   );
    // } else if (!form.email && !form.password && !form.username) {
    //   Alert.alert(
    //     "Error",
    //     "All fields are required. Please fill in all fields"
    //   );
    // }

    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username);
      // set it to global state...
      console.log("User Created Successfuly");
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="h-full bg-[#161622]">
      <ScrollView>
        <View className="w-full justify-center px-4 my-6 min-h-[83vh]">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
            style={{ width: 115, height: 35 }}
          />
          <Text className="text-2xl mt-7 text-white text-semibold">
            Sign Up to Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Register"
            handlePress={submit}
            containerStyles="mt-7"
            textStyles="text-xl"
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-medium">
              Already have an account?
            </Text>
            <Link href="/sign-in" className="text-lg font-black text-[#ff8e01]">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
