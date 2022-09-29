import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import theme from "../theme";

export default function Input(){
    return (
        <TextInput style={styles.input}
        placeholder="Search"/>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: theme.colors.textPrimary,
        borderRadius: 24,
        paddingVertical: 8,
        paddingHorizontal: 12,
    }
})