import { View, TextInput } from 'react-native';
import * as mask from '../../Context/Util/Mask'
import { Styles } from './css'

export const TextCustom = (props) => {
    const onChange = (e) => {
        props.CallBack(props.name, e)
    }
    return (
        <TextInputCustom {...props} onChange={onChange} />
    );
}

export const TextDate = (props) => {
    const onChange = (e) => {
        props.CallBack(props.name, mask.Date(props.item, e))
    }
    return (
        <TextInputCustom {...props} onChange={onChange} />
    );
}
export const TextPhone = (props) => {
    const onChange = (e) => {
        props.CallBack(props.name, mask.Phone(props.item, e))
    }
    return (
        <TextInputCustom {...props} onChange={onChange} />
    );
}
export const TextCPF = (props) => {
    const onChange = (e) => {
        props.CallBack(props.name, mask.CPF(props.item, e))
    }
    return (
        <TextInputCustom {...props} onChange={onChange} />
    );
}
export const TextCEP = (props) => {
    const onChange = (e) => {
        props.CallBack(props.name, mask.CEP(props.item, e))
    }
    return (
        <TextInputCustom {...props} onChange={onChange} />
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
                onChangeText={props.onChange}
                value={props.item}
                name={props.name}
                maxLength={props.maxLength}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                disableFullscreenUI={props.disabled}
            />
        </View>
    );
}

