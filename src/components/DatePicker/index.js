import { Text, View } from "react-native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { ButtonDate } from "../Button";
import { Styles } from "./css";
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
        <View style={Styles.container}>
            <Text style={[Styles.input, Styles.inputDisabled]}>
                {props.date.getDate()}/{props.date.getMonth() + 1}/{props.date.getFullYear()}
            </Text>
            <View style={Styles.icon}>
                <ButtonDate onPress={showme} />
            </View>
        </View>
    )
}