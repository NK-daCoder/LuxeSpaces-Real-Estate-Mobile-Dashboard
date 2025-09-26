import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css"
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
 
export default function App() {
  return (
    <SafeAreaView>
      <View className="flex-1 items-center justify-center bg-white border border-red-500">
        <Text className="text-xl font-bold text-blue-500">
          Welcome to Nativewind!
        </Text>
      </View>
      <StatusBar className="bg-stone-500"/>
    </SafeAreaView>
  );
}