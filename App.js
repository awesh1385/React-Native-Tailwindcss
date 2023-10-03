import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <TouchableOpacity className="p-3  bg-orange-500 rounded-xl ">
        <Text className="text-white text-3xl font-bold">Hello World</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}
