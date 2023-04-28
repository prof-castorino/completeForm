import { Text, View } from 'react-native';
import { useState, useCallback } from 'react';
import { StylesForm } from './css';
import { hasName } from '../../Context/Util/ValidForm'
import { AffiliationProps } from '../../Context/Interface'
import { ModalError } from '../../Components/Modal';
import { ButtonNext } from '../../Components/Button';
import { TextCustom } from '../../Components/TextInput';
import { FeatureFlagCustom } from '../../Components/FeatureFlag';

export const AffiliationForm = props => {
    const [form, SetForm] = useState(AffiliationProps)
    const [msgError, setMsgError] = useState('');
    const [buttonDisable, setButtonDisable] = useState(true);
    const CallBack = useCallback((item, value) => {
        var clone = Object.assign({}, form);
        clone[item] = value
        SetForm(clone)
        hasCompletedTheMandatory()
    }, [form]);

    const hasCompletedTheMandatory = () => {
        if (form.noAffiliation) {
            setButtonDisable((form.mother) ? false : true)
        } else {
            setButtonDisable(false)
        }
    }
    const submit = () => {
        if (!form.noAffiliation) {
            if (!hasName(form.mother)) {
                setMsgError('Preencha o nome do mãe corretamente');
                return false
            }
        }
        if (form.mother) {
            if (!hasName(form.mother)) {
                setMsgError('Preencha o nome do mãe corretamente');
                return false
            }
        }
        if (form.father) {
            if (!hasName(form.father)) {
                setMsgError('Preencha o nome do pai corretamente');
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
                item={form.mother}
                maxLength={100}
                name='mother'
                disabled={form.noAffiliation}
                placeholder={(!form.noAffiliation) ? "Mãe *" : "Mãe"}
            />
            <TextCustom
                CallBack={CallBack}
                item={form.father}
                maxLength={100}
                name='father'
                disabled={form.noAffiliation}
                placeholder="Pai"
            />
            <FeatureFlagCustom
                CallBack={CallBack}
                item={form.noAffiliation}
                name='noAffiliation'
                placeholder={"Sem filiação"}
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