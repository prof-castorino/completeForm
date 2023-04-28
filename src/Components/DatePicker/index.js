import { Text, View } from "react-native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { ButtonDate } from "../Button";
import { Styles } from "./css";
export const DatePickerCustom = (props) => {
    const onChange = (event, value) => {
        props.CallBack(props.name, value)
    }
    var now = new Date()
    var n = new Date(now.getFullYear() - 18, now.getMonth(), now.getDate())
    const showme = () => {
        DateTimePickerAndroid.open({
            value: props.date,
            onChange,
            mode: props.currentMode,
            format: 'dd/mm/yyyy',
            maximumDate: new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()),
            minimumDate: new Date(new Date().getFullYear() - 130, new Date().getMonth(), new Date().getDate()),
            positiveButton: { label: "selecionar", textColor: "green" },
            negativeButton: { label: "cancelar", textColor: "red" },
            is24Hour: true,
        })
    }
    return (
        <View style={Styles.container}>
            <Text style={[Styles.input, Styles.inputDisabled]}>
                {props.date.getDate()}/{props.date.getMonth() + 1}/{props.date.getFullYear()}
            </Text>
            <View style={Styles.icon}>
                <ButtonDate name={props.name} onPress={showme} />
            </View>
        </View>
    )
}