import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeights.normal,
        fontFamily: theme.fonts.main
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    heading: {
        fontSize: theme.fontSizes.title
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    textAlignCenter: {
        textAlign: 'center',
    },
    textItalic: {
        fontStyle: 'italic',
    }
})

export default function StyledText ({children, color, textStyle, fontSize, fontWeight, align, style, ...restOfProps}) {

    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontSize === 'title' && styles.heading,
        fontWeight === 'bold' && styles.bold,
        align === 'center' && styles.textAlignCenter,
        textStyle === 'italic' && styles.textItalic,
        style
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}