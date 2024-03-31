import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Banner } from "./components/Banner";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Banner />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
