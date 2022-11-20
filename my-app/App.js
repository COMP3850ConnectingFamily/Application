import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import PhoneNumber from "./screen/PhoneNumber";
import Otp from "./screen/Otp";
import FacilityScreen from "./screen/FacilityScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="PhoneNumber"
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
                    <Stack.Screen name="Otp" component={Otp} />
                    <Stack.Screen
                        name="FacilityScreen"
                        component={FacilityScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
