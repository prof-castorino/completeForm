import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        width: '100%',
        margin: 10,
    },
    disabled: {
        backgroundColor: '#D9D9D9',
        borderWidth: 2,
        borderColor: '#988D8D',
        borderRadius: 10,
        padding: 15,
    },
    error: {
        backgroundColor: '#DE3838',
        borderWidth: 2,
        borderColor: '#988D8D',
        borderRadius: 10,
        padding: 10,
    },
    next: {
        backgroundColor: '#3898DE',
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
});