import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { Home } from "./src/screens/Home";
import { Login } from "./src/screens/Login";
import { Signup } from "./src/screens/Signup";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();


export default function App() {
  return (
    <SafeAreaView>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={Signup} />
          <Stack.Screen name="LogIn" component={Login} />
        </Stack.Navigator>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}
