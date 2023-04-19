import { Text, View } from 'react-native';
import { useState } from 'react';
import { StylesForm } from '../css';

import { ModalCustom } from '../../components/Modal';
import { ButtonNext } from '../../components/Button';
import { FeatureFlagCustom } from '../../components/FeatureFlag';

export const TermsForm = props => {
    const setNewsletter = (value) => {
        CallBack('newsletter', value)
    }
    const setAccept = (value) => {
        CallBack('accept', value)
        hasCompletedTheMandatory(value)

    }
    const CallBack = (item, value) => {
        var clone = Object.assign({}, form);
        clone[item] = value
        SetForm(clone)
    }
    const [form, SetForm] = useState({
        accept: false,
        newsletter: false,
    })
    const [msg, setMsg] = useState('');
    const [buttonDisable, setButtonDisable] = useState(true);
    const hasCompletedTheMandatory = (value) => {
        setButtonDisable(!value)
    }
    const Submit = () => {
        setMsg('Dados enviados com sucesso, agora iremos analisa-los e logo entraremos em contato.')
        next(props.completeForm, form)
    }
    const next = (completeForm) => {
        completeForm.terms = form
        props.next(completeForm)
    }
    return (
        <View style={StylesForm.container}>
            <ModalCustom
                setMsg={setMsg}
                msg={msg}
            />
            <FeatureFlagCustom
                callBack={setNewsletter}
                item={form.newsletter}
                placeholder={"Aceito receber informações por email"}
            />
            <FeatureFlagCustom
                callBack={setAccept}
                item={form.accept}
                placeholder={"Declaro que estou ciente dos termos de adesão (*)"}
            />
            <View style={StylesForm.viewText}>
                <Text style={StylesForm.label}>(*) Preencha todos os campos obrigatório</Text>
            </View>
            <ButtonNext
                onPress={Submit}
                title="Cadastrar"
                disabled={buttonDisable}
            />
        </View>
    );
}