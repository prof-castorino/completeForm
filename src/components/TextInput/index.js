import { View, TextInput } from 'react-native';
import { maskPhone, maskDate } from '../../context/mask'
import { StyleTextInput } from './css'

export const TextCustom = (props) => {
    const CallBack = (e) => {
        props.callBack(e)
        props.onBlur()
    }
    return (
        <TextInputCustom {...props} CallBack={CallBack} />
    );
}

export const TextDate = (props) => {
    const CallBack = (e) => {
        props.callBack(maskDate(props.item, e))
        props.onBlur()
    }
    return (
        <TextInputCustom {...props} CallBack={CallBack} />
    );
}

export const TextPhone = (props) => {
    const CallBack = (e) => {
        props.callBack(maskPhone(props.item, e))
        props.onBlur()
    }
    return (
        <TextInputCustom {...props} CallBack={CallBack} />
    );
}

const TextInputCustom = (props) => {
    return (
        <View style={StyleTextInput.container}>
            <TextInput
                style={[StyleTextInput.input,
                (props.disabled) ?
                    StyleTextInput.inputDisabled
                    : StyleTextInput.inputActived
                ]}
                onBlur={() => { props.onBlur() }}
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

