import { Text, View } from 'react-native';
import { useState, useCallback } from 'react';
import { StylesForm } from './css';
import { TermProps } from '../../Context/Interface'
import { ModalCustom } from '../../Components/Modal';
import { ButtonNext } from '../../Components/Button';
import { FeatureFlagCustom } from '../../Components/FeatureFlag';

export const TermsForm = props => {
    const [form, SetForm] = useState(TermProps)
    const [msg, setMsg] = useState('');
    const [buttonDisable, setButtonDisable] = useState(true);
    const CallBack = useCallback((item, value) => {
        var clone = Object.assign({}, form);
        clone[item] = value
        SetForm(clone)
        hasCompletedTheMandatory()
    }, [form]);
    const hasCompletedTheMandatory = (value) => {
        setButtonDisable(!value)
    }
    const Submit = () => {
        setMsg('Dados enviados com sucesso, agora iremos analisa-los e logo entraremos em contato.')
        props.CallBack(form)
    }
    return (
        <View style={StylesForm.container}>
            <ModalCustom setMsg={setMsg} msg={msg} />
            <FeatureFlagCustom
                CallBack={CallBack}
                item={form.newsletter}
                name='newsletter'
                placeholder={"Aceito receber informações por email"}
            />
            <FeatureFlagCustom
                CallBack={CallBack}
                item={form.accept}
                name='accept'
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