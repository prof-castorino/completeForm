import Ionicons from 'react-native-vector-icons/Ionicons';
import { Pressable, View, Text } from 'react-native'
import { Styles } from './css';

export const ButtonNext = (props) => {
    return (
        <ButtonCuston {...props} style={Styles.next} />
    )
}

export const ButtonClosed = (props) => {
    return (
        <ButtonCuston {...props} style={Styles.error} />
    )
}

const ButtonCuston = (props) => {
    return (
        <View style={Styles.container}>
            <Pressable
                style={(props.disabled) ? Styles.disabled : props.style}
                onPress={props.onPress}
                disabled={props.disabled}>
                <Text style={[Styles.text, (props.disabled) ? Styles.textDisabled : Styles.textNext]}>{props.title}</Text>
            </Pressable>
        </View>
    )
}


export const ButtonDate = (props) => {
    return (
        <ButtonCustomIcon {...props} icon="calendar-outline" size={40} color='gray' />
    )
}

const ButtonCustomIcon = (props) => {
    return (<View >
        <Pressable onPress={props.onPress} >
            <Ionicons name={props.icon} size={props.size} color={props.color} />
        </Pressable>
    </View>)
}