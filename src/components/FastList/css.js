import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        minHeight: 40,

        padding: 2,
        borderColor: '#46332D',
        color: '#988D8D'
    },
    inputItem: {
        maxHeight: 40,
        flexDirection: 'row'
    },
    fastList: {
        flex: 1,
        maxHeight: 200,
    },
    item: {
        width: '100%',
        padding: 20,
        fontSize: 32,
        backgroundColor: '#ffffff',
    },
    displayNone: {
        display: 'none'
    },
    inputDisabled: {
        backgroundColor: '#D9D9D9'
    },
    inputActived: {
        backgroundColor: '#ffffff'
    },
    text: {
        width: '85%',
        padding: 10
    },
    icon: {
        width: '15%',
    },
});
