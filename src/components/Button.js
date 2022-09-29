import React from "react";
import { View, StyleSheet } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import StyledText from "./StyledText";
import theme from '../theme'

export default function Button(props){
    let text = props.text

    return (
        <View>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Cities')}>
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
        borderRadius: 5,
        marginTop: 10
    }
})