import { Text, View } from 'react-native';
import { useState } from 'react';
import { StylesForm } from '../css';
import { hasCPF } from '../../context/validForm'

import { ModalError } from '../../components/Modal';
import { ButtonNext } from '../../components/Button';

import { FeatureFlagCustom } from '../../components/FeatureFlag';
import { TextCustom, TextCPF } from '../../components/TextInput';


export const DocumentForm = props => {
    const setRG = (value) => {
        CallBack('rg', value)
    }
    const setCPF = (value) => {
        CallBack('cpf', value)
    }
    const setPassport = (value) => {
        CallBack('passport', value)
    }
    const setForeigner = (value) => {
        CallBack('foreigner', value)
    }
    const CallBack = (item, value) => {
        var clone = Object.assign({}, form);
        clone[item] = value
        SetForm(clone)
        hasCompletedTheMandatory()
    }
    const [form, SetForm] = useState({
        rg: '',
        cpf: '',
        passport: '',
        foreigner: false,
    })
    const [msgError, setMsgError] = useState('');
    const [buttonDisable, setButtonDisable] = useState(true);
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
        next(props.completeForm, form)
    }
    const next = (completeForm) => {
        completeForm.documents = form
        props.next(completeForm)
    }
    return (
        <View style={StylesForm.container}>
            <ModalError
                setMsgError={setMsgError}
                msgError={msgError}
            />
            <TextCustom
                callBack={setRG}
                item={form.rg}
                maxLength={15}
                placeholder={(!form.foreigner) ? "RG *" : "RG"}
                keyboardType="phone-pad"
            />
            <TextCPF
                callBack={setCPF}
                item={form.cpf}
                maxLength={14}
                placeholder={(!form.foreigner) ? "CPF *" : "CPF"}
                keyboardType="phone-pad"
            />
            <TextCustom
                callBack={setPassport}
                item={form.passport}
                maxLength={100}
                placeholder={(!form.foreigner) ? "Passaporte" : "Passaporte *"}
            />

            <FeatureFlagCustom
                callBack={setForeigner}
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