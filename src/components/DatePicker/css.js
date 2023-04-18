import { StyleSheet } from 'react-native';

export const StyleTextInput = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    input: {
        width: '85%',
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#46332D',
        color: '#988D8D'
    },
    icon: { width: '15%' },
    inputDisabled: {
        backgroundColor: '#D9D9D9'
    },
    inputActived: {
        backgroundColor: '#ffffff'
    }
});
