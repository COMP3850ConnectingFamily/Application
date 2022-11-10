import React, { useState } from "react";
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { colorScheme } from "../static/color.js";

// To run on your local machine, it's proably best to put IP address
// So you can use your phone to interact with the API. But if you dont
// want to use the actual phone and use the emulator instead, no need to
// provide IP address, just "http://localhost" is fine
const yourService = "http://localhost";
const baseURL = `${yourService}:3000`;

const Otp = ({ route, navigation }) => {
    console.log(colorScheme.primary);

    const { phoneNumber } = route.params;

    const checkVerification = (phoneNumber, code) => {
        let url = `${baseURL}/check/${phoneNumber}/${code}`;
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if (res.status == "approved") {
                    navigation.replace("FacilityScreen");
                } else {
                    setInvalidCode(true);
                    alert("Verfication is wrong, please request again!");
                }
            });
    };

    const requestAnotherCode = (phoneNumber) => {
        let url = `${baseURL}/verify/${phoneNumber}`;
        fetch(url, {
            method: "GET",
            header: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                alert(
                    "Can't request verfication code right now. Please try again later!"
                );
                console.log(err);
            });
    };

    return (
        <SafeAreaView style={styles.wrapper}>
            <Text style={styles.prompt}>Enter the code we sent you</Text>
            <Text style={styles.message}>
                Your phone{" "}
                <Text style={{ color: colorScheme.primary }}>
                    {phoneNumber}
                </Text>{" "}
                will be used to protect your account each time you log in.
            </Text>
            <Text
                style={styles.editPhoneNumber}
                onPress={() => navigation.replace("PhoneNumber")}
            >
                Edit Phone Number
            </Text>
            <OTPInputView
                style={{ width: "80%", height: 200 }}
                pinCount={6}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code) => {
                    checkVerification(phoneNumber, code);
                }}
            />
            <Text style={{ fontSize: "16", color: "gray" }}>Can't login?</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => requestAnotherCode(phoneNumber)}
            >
                <Text style={styles.buttonText}>Request another code</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    editPhoneNumber: {
        fontSize: 16,
        marginTop: 10,
        color: colorScheme.primary,
        fontWeight: "bold",
    },

    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    borderStyleBase: {
        width: 30,
        height: 45,
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: "black",
        fontSize: 20,
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    prompt: {
        fontSize: 24,
        paddingHorizontal: 30,
        paddingBottom: 20,
    },

    message: {
        fontSize: 16,
        paddingHorizontal: 30,
    },

    error: {
        color: "red",
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
        fontSize: 14,
    },
});

export default Otp;
