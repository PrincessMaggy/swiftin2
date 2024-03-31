import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Home />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
