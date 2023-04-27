import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        width: '100%',
        margin: 10,
    },
    disabled: {
        backgroundColor: '#D9D9D9',
    },
    error: {
        backgroundColor: '#DE3838',
    },
    next: {
        backgroundColor: '#3898DE',
    },
    success: {
        backgroundColor: '#3D4E5F',
    },
    btn: {
        borderWidth: 2,
        borderColor: '#988D8D',
        borderRadius: 10,
        padding: 10,
    },
    textNext: {
        color: '#ffffff',
    },
    textDisabled: { color: '#988D8D' },
    text: {
        textAlign: 'center'
    },

    title: {
        fontSize: 32,
        borderBottomWidth: 1,
        borderColor: '#988D8D',
        padding: 10
    },
});