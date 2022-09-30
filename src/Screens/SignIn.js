import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import theme from '../theme'
import StyledText from '../components/StyledText'
import { TextInput } from "react-native-gesture-handler";

export default function SignIn(){
    return (
        <View style={styles.container}>
          <Image resizeMode="contain" style={styles.img} source={{uri:'https://my-tinerary-duco.herokuapp.com/img/Logo-nav.png'}}></Image>
          <View style={styles.signIn}>
            <StyledText fontSize='body' align='center'>Log in to your account</StyledText>
            <TextInput
            style={styles.input}
            placeholder='Email' />
            <TextInput
            style={styles.input}
            placeholder='Password' />
            <Text style={styles.submit}>LOG IN</Text>
          </View>
          <View style={styles.signUp}>
            <StyledText fontSize='body' align='center'>Do you want an account? Sign Up</StyledText>
          </View>
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
        paddingHorizontal: 80
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
    },
    signIn: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      borderRadius: 20,
      padding: 10,
      borderColor: theme.colors.primary,
      borderWidth: 1,
      maxHeight: 220,
      marginBottom: 10,
    },
    img: {
      width: 290,
      height: 150,
    }
})