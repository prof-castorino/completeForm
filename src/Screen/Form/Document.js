import { Text, View } from 'react-native';
import { useState, useCallback } from 'react';
import { StylesForm } from './css';
import { hasCPF } from '../../Context/Util/ValidForm'
import { DocumentProps } from '../../Context/Interface'
import { ModalError } from '../../Components/Modal';
import { ButtonNext } from '../../Components/Button';
import { FeatureFlagCustom } from '../../Components/FeatureFlag';
import { TextCustom, TextCPF } from '../../Components/TextInput';


export const DocumentForm = props => {
    const [form, SetForm] = useState(DocumentProps)
    const [msgError, setMsgError] = useState('');
    const [buttonDisable, setButtonDisable] = useState(true);
    const CallBack = useCallback((item, value) => {
        var clone = Object.assign({}, form);
        clone[item] = value
        SetForm(clone)
        hasCompletedTheMandatory()
    }, [form]);
    const hasCompletedTheMandatory = () => {
        if (form.foreigner) {
            setButtonDisable((form.passport) ? false : true)
        } else {
            setButtonDisable((form.cpf && form.rg) ? false : true)
        }
    }
    const submit = () => {
        if (form.cpf) {
            if (!hasCPF(form.cpf)) {
                setMsgError('Preencha o cpf corretamente');
                return false
            }
        }
        props.CallBack(form)
    }
    return (
        <View style={StylesForm.container}>
            <ModalError setMsgError={setMsgError} msgError={msgError} />
            <TextCustom
                CallBack={CallBack}
                item={form.rg}
                name='rg'
                maxLength={15}
                placeholder={(!form.foreigner) ? "RG *" : "RG"}
                keyboardType="phone-pad"
            />
            <TextCPF
                CallBack={CallBack}
                item={form.cpf}
                name='cpf'
                maxLength={14}
                placeholder={(!form.foreigner) ? "CPF *" : "CPF"}
                keyboardType="phone-pad"
            />
            <TextCustom
                CallBack={CallBack}
                item={form.passport}
                name='passport'
                maxLength={100}
                placeholder={(!form.foreigner) ? "Passaporte" : "Passaporte *"}
            />
            <FeatureFlagCustom
                CallBack={CallBack}
                name='foreigner'
                item={form.foreigner}
                placeholder={"Estrangeiro"}
            />
            <View style={StylesForm.viewText}>
                <Text style={StylesForm.label}>(*) Preencha todos os campos obrigatório</Text>
            </View>
            <ButtonNext
                onPress={submit}
                title="Continuar"
                disabled={buttonDisable}
            />
        </View>
    );
}