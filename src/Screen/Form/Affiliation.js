import { Text, View } from 'react-native';
import { useState } from 'react';
import { StylesForm } from '../css';
import { hasName } from '../../Context/Util/ValidForm'

import { ModalError } from '../../Components/Modal';
import { ButtonNext } from '../../Components/Button';
import { TextCustom } from '../../Components/TextInput';
import { FeatureFlagCustom } from '../../Components/FeatureFlag';

export const AffiliationForm = props => {
    const setMother = (value) => {
        CallBack('mother', value)
    }
    const setFather = (value) => {
        CallBack('father', value)
    }
    const setNoAffiliation = (value) => {
        CallBack('noAffiliation', value)
    }
    const CallBack = (item, value) => {
        var clone = Object.assign({}, form);
        clone[item] = value
        SetForm(clone)
        hasCompletedTheMandatory()
    }
    const [form, SetForm] = useState({
        mother: '',
        father: '',
        noAffiliation: false,
    })
    const [msgError, setMsgError] = useState('');
    const [buttonDisable, setButtonDisable] = useState(true);
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
        props.next(form)
    }
    return (
        <View style={StylesForm.container}>
            <ModalError
                setMsgError={setMsgError}
                msgError={msgError}
            />
            <TextCustom
                onBlur={hasCompletedTheMandatory}
                callBack={setMother}
                item={form.mother}
                maxLength={100}
                disabled={form.noAffiliation}
                placeholder={(!form.noAffiliation) ? "Mãe *" : "Mãe"}
            />
            <TextCustom
                onBlur={hasCompletedTheMandatory}
                callBack={setFather}
                item={form.father}
                maxLength={100}
                disabled={form.noAffiliation}
                placeholder="Pai"
            />
            <FeatureFlagCustom
                onBlur={hasCompletedTheMandatory}
                callBack={setNoAffiliation}
                item={form.noAffiliation}
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