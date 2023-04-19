import { StyleSheet } from 'react-native';

export const Style = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    featureFlag: {
        width: '20%',
        borderRadius: 50,
        margin: 10
    },
    label: {
        width: '80%',
    },
    activeFlag: {
        backgroundColor: '#3DE439',
        paddingLeft: 40
    },
    inactiveFlag: {
        backgroundColor: '#988D8D'
    },
    activeIcon: {
        textAlign: 'right',
    },
    inactiveIcon: {
        textAlign: 'left',
    }
});
