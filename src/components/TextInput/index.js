import { View, TextInput } from 'react-native';
import { maskPhone, maskDate, maskCEP, maskCPF } from '../../context/mask'
import { Styles } from './css'

export const TextCustom = (props) => {
    return (
        <TextInputCustom {...props} CallBack={props.callBack} />
    );
}

export const TextDate = (props) => {
    const CallBack = (e) => {
        props.callBack(maskDate(props.item, e))
    }
    return (
        <TextInputCustom {...props} CallBack={CallBack} />
    );
}

export const TextPhone = (props) => {
    const CallBack = (e) => {
        props.callBack(maskPhone(props.item, e))
    }
    return (
        <TextInputCustom {...props} CallBack={CallBack} />
    );
}
export const TextCPF = (props) => {
    const CallBack = (e) => {
        props.callBack(maskCPF(props.item, e))
    }
    return (
        <TextInputCustom {...props} CallBack={CallBack} />
    );
}
export const TextCEP = (props) => {
    const CallBack = (e) => {
        props.callBack(maskCEP(props.item, e))
    }
    return (
        <TextInputCustom {...props} CallBack={CallBack} />
    );
}

const TextInputCustom = (props) => {
    return (
        <View style={Styles.container}>
            <TextInput
                style={[Styles.input,
                (props.disabled) ?
                    Styles.inputDisabled
                    : Styles.inputActived
                ]}
                onChangeText={props.CallBack}
                value={props.item}
                maxLength={props.maxLength}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                disableFullscreenUI={props.disabled}
            />
        </View>
    );
}

