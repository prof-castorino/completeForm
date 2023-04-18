import { Text, View } from 'react-native';
import { useState } from 'react';
import { StylesForm } from './css';
import { ModalError } from '../components/Modal';
import { TextCustom, TextPhone } from '../components/TextInput';
import { hasLegalAge, hasName, hasEmail, hasPhone } from '../context/validForm'
import { ButtonNext } from '../components/Button';
import { DatePickerCustom } from '../components/DatePicker';

export const ContactForm = () => {
    const setNome = (value) => {
        var clone = Object.assign({}, contactForm);
        clone.name = value
        SetContactForm(clone)
    }
    const setEmail = (value) => {
        var clone = Object.assign({}, contactForm);
        clone.email = value
        SetContactForm(clone)
    }
    const setAge = (value) => {
        var clone = Object.assign({}, contactForm);
        clone.age = value
        SetContactForm(clone)
    }
    const setPhone = (value) => {
        var clone = Object.assign({}, contactForm);
        clone.phone = value
        SetContactForm(clone)
    }
    const [contactForm, SetContactForm] = useState({
        name: '',
        email: '',
        age: new Date(),
        phone: ''
    })
    const [msgError, setMsgError] = useState('');
    const [buttonDisable, setButtonDisable] = useState(true);
    const itsFilled = () => {
        setButtonDisable((contactForm.name && contactForm.email && contactForm.age && contactForm.phone) ? false : true)
    }
    const validForm = () => {
        if (!hasName(contactForm.name)) {
            setMsgError('Preencha o nome corretamente');
            return false
        }
        if (!hasEmail(contactForm.email)) {
            setMsgError('Preencha o email corretamente');
            return false
        }
        if (!hasPhone(contactForm.phone)) {
            setMsgError('Preencha o telefone corretamente');
            return false
        }
        if (!hasLegalAge(contactForm.age)) {
            setMsgError('Você precisa ter entre 18 a 130 anos');
            return false
        }
        setMsgError('')
        return true
    }
    return (
        <View style={StylesForm.container}>
            <View style={StylesForm.viewText}>
                <Text style={StylesForm.title}>Dados de contato</Text>
            </View>
            <ModalError
                setMsgError={setMsgError}
                msgError={msgError}
            />
            <TextCustom
                onBlur={itsFilled}
                callBack={setNome}
                item={contactForm.name}
                maxLength={100}
                placeholder="Nome completo *"
            />
            <TextCustom
                onBlur={itsFilled}
                callBack={setEmail}
                item={contactForm.email}
                maxLength={100}
                placeholder="E-mail *"
                keyboardType="email-address"
            />
            <TextPhone
                onBlur={itsFilled}
                callBack={setPhone}
                item={contactForm.phone}
                maxLength={15}
                placeholder="Telefone *"
                keyboardType="phone-pad"
            />
            <DatePickerCustom
                placeholder="Data de nascimento *"
                setDate={setAge}
                date={contactForm.age}
            />
            <View style={StylesForm.viewText}>
                <Text style={StylesForm.label}>(*) Preencha todos os campos obrigatório</Text>
            </View>
            <ButtonNext
                onPress={validForm}
                title="Cadastrar"
                disabled={buttonDisable}
            />
        </View>
    );
}