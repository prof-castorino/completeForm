import { Text, View } from 'react-native';
import { useState, useCallback } from 'react';
import { StylesForm } from './css';
import { ContactProps } from '../../Context/Interface'
import * as valid from '../../Context/Util/ValidForm'
import { ModalError } from '../../Components/Modal';
import { ButtonNext } from '../../Components/Button';
import { DatePickerCustom } from '../../Components/DatePicker';
import { TextCustom, TextPhone } from '../../Components/TextInput';


export const ContactForm = props => {
    const [form, SetForm] = useState(ContactProps)
    const [msgError, setMsgError] = useState('');
    const [buttonDisable, setButtonDisable] = useState(true);
    const CallBack = useCallback((item, value) => {
        var clone = Object.assign({}, form);
        clone[item] = value
        SetForm(clone)
        hasCompletedTheMandatory()
    }, [form]);
    const hasCompletedTheMandatory = () => {
        setButtonDisable((form.name && form.email && form.age && form.phone) ? false : true)
    }
    const submit = () => {
        if (!valid.hasName(form.name)) {
            setMsgError('Preencha o nome corretamente');
            return false
        }
        if (!valid.hasEmail(form.email)) {
            setMsgError('Preencha o email corretamente');
            return false
        }
        if (!valid.hasPhone(form.phone)) {
            setMsgError('Preencha o telefone corretamente');
            return false
        }
        next(form)
    }
    const next = (form) => {
        var clone = Object.assign({}, form);
        clone.age = clone.age.toString()
        props.CallBack(clone)
    }
    return (
        <View style={StylesForm.container}>
            <ModalError setMsgError={setMsgError} msgError={msgError} />
            <TextCustom
                CallBack={CallBack}
                item={form.name}
                name='name'
                maxLength={100}
                placeholder="Nome completo *"
            />
            <TextCustom
                CallBack={CallBack}
                item={form.email}
                name='email'
                maxLength={100}
                placeholder="E-mail *"
                keyboardType="email-address"
            />
            <TextPhone
                CallBack={CallBack}
                item={form.phone}
                name='phone'
                maxLength={15}
                placeholder="Telefone *"
                keyboardType="phone-pad"
            />
            <DatePickerCustom
                placeholder="Data de nascimento *"
                CallBack={CallBack}
                name='age'
                date={form.age}
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