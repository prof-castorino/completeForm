import { Text, View } from 'react-native';
import { useState } from 'react';
import { StylesForm } from '../css';

import { hasLegalAge, hasName, hasEmail, hasPhone } from '../../Context/Util/ValidForm'

import { ModalError } from '../../Components/Modal';
import { ButtonNext } from '../../Components/Button';
import { DatePickerCustom } from '../../Components/DatePicker';
import { TextCustom, TextPhone } from '../../Components/TextInput';


export const ContactForm = props => {
    const setName = (value) => {
        CallBack('name', value)
    }
    const setEmail = (value) => {
        CallBack('email', value)
    }
    const setAge = (value) => {
        CallBack('age', value)
    }
    const setPhone = (value) => {
        CallBack('phone', value)
    }
    const CallBack = (item, value) => {
        var clone = Object.assign({}, form);
        clone[item] = value
        SetForm(clone)
        hasCompletedTheMandatory()
    }
    const [form, SetForm] = useState({
        name: '',
        email: '',
        age: new Date(),
        phone: ''
    })
    const [msgError, setMsgError] = useState('');
    const [buttonDisable, setButtonDisable] = useState(true);
    const hasCompletedTheMandatory = () => {
        setButtonDisable((form.name && form.email && form.age && form.phone) ? false : true)
    }
    const submit = () => {
        if (!hasName(form.name)) {
            setMsgError('Preencha o nome corretamente');
            return false
        }
        if (!hasEmail(form.email)) {
            setMsgError('Preencha o email corretamente');
            return false
        }
        if (!hasPhone(form.phone)) {
            setMsgError('Preencha o telefone corretamente');
            return false
        }
        if (!hasLegalAge(form.age)) {
            setMsgError('Você precisa ter entre 18 a 130 anos');
            return false
        }

        next(props.completeForm, form)
    }
    const next = (completeForm) => {
        var clone = Object.assign({}, form);
        clone.age = clone.age.toString()
        completeForm.contact = clone
        props.next(completeForm)
    }
    return (
        <View style={StylesForm.container}>
            <ModalError
                setMsgError={setMsgError}
                msgError={msgError}
            />
            <TextCustom
                callBack={setName}
                item={form.name}
                maxLength={100}
                placeholder="Nome completo *"
            />
            <TextCustom
                callBack={setEmail}
                item={form.email}
                maxLength={100}
                placeholder="E-mail *"
                keyboardType="email-address"
            />
            <TextPhone
                callBack={setPhone}
                item={form.phone}
                maxLength={15}
                placeholder="Telefone *"
                keyboardType="phone-pad"
            />
            <DatePickerCustom
                placeholder="Data de nascimento *"
                setDate={setAge}
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