import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    Pressable,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { Styles } from './css';


export const ItemSelect = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[Styles.item, { backgroundColor }]}>
        <Text style={[Styles.title, { color: textColor }]}>{item.title}</Text>
    </TouchableOpacity>
);


export const ButtonSuccess = (props) => {
    return (
        <ButtonCuston {...props} style={Styles.success} />
    )
}

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
                style={[Styles.btn, (props.disabled) ? Styles.disabled : props.style]}
                onPress={props.onPress}
                disabled={props.disabled}>
                <Text style={[Styles.text, (props.disabled) ? Styles.textDisabled : Styles.textNext]}>{props.title}</Text>
            </Pressable>
        </View>
    )
}

export const ButtonSelect = (props) => {
    return (
        <ButtonCustomIcon {...props} icon="caret-down-outline" size={40} color='#46332D' />
    )
}
export const ButtonDate = (props) => {
    return (
        <ButtonCustomIcon {...props} icon="calendar-outline" size={40} color='#46332D' />
    )
}

export const ButtonIcon = (props) => {
    return (
        <ButtonCustomIcon {...props} icon={props.icon} size={40} color='#ffffff' />
    )
}

const ButtonCustomIcon = (props) => {
    return (<View >
        <Pressable onPress={props.onPress} >
            <Ionicons name={props.icon} size={props.size} color={props.color} />
        </Pressable>
    </View>)
}