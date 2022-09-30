import React from "react";
import { View, StyleSheet, Text } from "react-native";
import theme from '../theme'
import StyledText from '../components/StyledText'
import { TextInput } from "react-native-gesture-handler";
import Button from "../components/Button";

export default function NewCity(){
    return (
        <View style={styles.container}>
            <StyledText fontSize='title' fontWeight='bold' align='center'>New City</StyledText>
            <TextInput
            style={styles.input}
            placeholder='City' />
            <TextInput
            style={styles.input}
            placeholder='Country' />
            <TextInput
            style={styles.input}
            placeholder='Population' />
            <TextInput
            style={styles.input}
            placeholder='Photo' />
            <TextInput
            style={styles.input}
            placeholder='Founded' />
            <Text style={styles.submit}>CREATE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background,
        height: '100%',
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 40
    },
    input: {
        width: '100%',
        backgroundColor: theme.colors.textPrimary,
        borderRadius: 24,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginTop: 10
    },
    submit: {
        backgroundColor: theme.colors.primary,
        color: 'white',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        marginTop: 14,
        fontWeight: "bold",
    }
})