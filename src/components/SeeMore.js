import React from "react";
import { View, StyleSheet } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import StyledText from "./StyledText";
import theme from '../theme'
import { useNavigation } from "@react-navigation/native";

export default function Button(props){
    let text = props.text
    let navigation = useNavigation()

    return (
        <View>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Sign In')}>
                <StyledText fontWeight='bold' color='primary'>{text}</StyledText>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 12,
        paddingHorizontal: 28,
        backgroundColor: theme.colors.background,
        opacity: 0.8,
        borderRadius: 5,
        marginTop: 10
    }
})