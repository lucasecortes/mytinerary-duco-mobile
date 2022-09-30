import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import theme from '../theme'
import StyledText from '../components/StyledText'
import { TextInput } from "react-native-gesture-handler";

export default function SignUp(){
    return (
        <View style={styles.container}>
          <Image resizeMode="contain" style={styles.img} source={{uri:'https://my-tinerary-duco.herokuapp.com/img/Logo-nav.png'}}></Image>
          <View style={styles.signUp}>
            <StyledText fontSize='body' align='center'>Sign up to see and create itineraries with your friends</StyledText>
            <TextInput
            style={styles.input}
            placeholder='Name' />
            <TextInput
            style={styles.input}
            placeholder='LastName' />
            <TextInput
            style={styles.input}
            placeholder='Email' />
            <TextInput
            style={styles.input}
            placeholder='Country' />
            <TextInput
            style={styles.input}
            placeholder='Password' />
            <TextInput
            style={styles.input}
            placeholder='Photo' />
            <StyledText fontSize='body' align='center'>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</StyledText>
            <Text style={styles.submit}>SIGN UP</Text>
          </View>
          <View>
            <StyledText fontSize='body' align='center'>Have an account? Log in</StyledText>
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
    signUp: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      borderRadius: 20,
      padding: 10,
      borderColor: theme.colors.primary,
      borderWidth: 1,
      maxHeight: 500,
      marginBottom: 10,
    },
    img: {
      width: 290,
      height: 150,
    }
})
