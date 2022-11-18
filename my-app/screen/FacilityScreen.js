import React from "react";
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Select, Center, CheckIcon, Box, Heading } from "native-base";
import { colorScheme } from "../static/color";

const FacilityScreen = () => {
    const [service, setService] = React.useState("");
    return (
        <Center mt="250">
            <Heading mb="5" color={colorScheme.primary}>
                Choose Your Facility
            </Heading>
            <Box maxW="300">
                <Select
                    selectedValue={service}
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    placeholder="Choose Service"
                    _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={(itemValue) => setService(itemValue)}
                >
                    <Select.Item label="Facility A" value="FacA" />
                    <Select.Item label="Facility B" value="FacB" />
                    <Select.Item label="Facility C" value="FacC" />
                    <Select.Item label="Facility D" value="FacD" />
                    <Select.Item label="Facility E" value="FacE" />
                </Select>
            </Box>
            <TouchableOpacity
                style={styles.button}
                onPress={() => console.log("Hello")}
            >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </Center>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        height: 40,
        width: 100,
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
        borderRadius: 3,
    },

    buttonText: {
        color: "white",
        fontSize: 16,
    },
});

export default FacilityScreen;
