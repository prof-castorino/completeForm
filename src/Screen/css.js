import { StyleSheet } from "react-native";

export const StylesForm = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 10,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        color: '#000000',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold'
    },
    label: {
        marginTop: 40,
        color: '#988D8D',
        textAlign: 'left',
        fontSize: 12
    },
    viewText: {
        width: '100%',
        textAlign: 'left'
    }
});