import React, { useState, useRef } from "react";
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { Image } from "react-native";
import PhoneInput, { isValidNumber } from "react-native-phone-number-input";
import { colorScheme } from "../static/color";

// To run on your local machine, it's proably best to put IP address
// So you can use your phone to interact with the API. But if you dont
// want to use the actual phone and use the emulator instead, no need to
// provide IP address, just "http://localhost" is fine
const yourService = "http://localhost";
const baseURL = `${yourService}:3000`;

const PhoneNumber = ({ navigation }) => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const phoneInput = useRef(null);

    const sendCode = () => {
        if (isValidNumber(formattedValue)) {
            console.log(formattedValue);
            let url = `${baseURL}/verify/${formattedValue}`;
            fetch(url, {
                method: "GET",
                header: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                    navigation.navigate("Otp", { phoneNumber: formattedValue });
                })
                .catch((err) => {
                    console.log("Error");
                    console.log(err);
                });
        } else {
            alert("Please enter a valid phone number");
        }
    };

    return (
        <>
            <View style={styles.container}>
                <SafeAreaView style={styles.wrapper}>
                    <Image
                        source={require("../static/img/Logo.png")}
                        style={{ width: 170, height: 170, marginTop: -200 }}
                    />
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: "bold",
                            color: colorScheme.primary,
                            marginBottom: 50,
                        }}
                    >
                        Medicator
                    </Text>
                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={value}
                        defaultCode="AU"
                        layout="first"
                        onChangeText={(text) => {
                            setValue(text);
                        }}
                        onChangeFormattedText={(text) => {
                            setFormattedValue(text);
                        }}
                        countryPickerProps={{ withAlphaFilter: true }}
                        withShadow
                        autoFocus
                    />
                    <TouchableOpacity style={styles.button} onPress={sendCode}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },

    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    button: {
        marginTop: 20,
        height: 50,
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colorScheme.primary,
        shadowColor: "rgba(0,0,0,0.4)",
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },

    buttonText: {
        color: "white",
        fontSize: 16,
    },

    welcome: {
        padding: 20,
    },

    status: {
        padding: 20,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "flex-start",
        color: "gray",
    },
});

export default PhoneNumber;
