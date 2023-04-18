import { Text, View, Button } from "react-native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { ButtonDate } from "../Button";
import { StyleTextInput } from "./css";
export const DatePickerCustom = (props) => {
    const onChange = (event, value) => {
        props.setDate(value)
    }
    const showme = () => {
        DateTimePickerAndroid.open({
            value: props.date,
            onChange,
            mode: props.currentMode,
            is24Hour: true,
        })
    }
    return (
        <View style={StyleTextInput.container}>
            <Text style={[StyleTextInput.input, StyleTextInput.inputDisabled]}>
                {props.date.getDay()}/{props.date.getMonth()}/{props.date.getFullYear()}
            </Text>
            <View style={StyleTextInput.icon}>
                <ButtonDate onPress={showme} />
            </View>
        </View>
    )
}