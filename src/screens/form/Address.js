import { Text, View } from 'react-native';
import { useState } from 'react';
import { StylesForm } from '../css';
import { hasName } from '../../context/validForm'

import { ModalError } from '../../components/Modal';
import { ButtonNext } from '../../components/Button';

import { StateBox } from '../../components/FastList';
import { TextCustom, TextCEP } from '../../components/TextInput';

export const AddressForm = props => {
    const setCep = (value) => {
        CallBack('cep', value)
    }
    const setAddress = (value) => {
        CallBack('address', value)
    }
    const setNumber = (value) => {
        CallBack('number', value)
    }
    const setComplement = (value) => {
        CallBack('complement', value)
    }
    const setNeighborhood = (value) => {
        CallBack('neighborhood', value)
    }
    const setState = (value) => {
        CallBack('state', value)
    }
    const setCity = (value) => {
        CallBack('city', value)
    }
    const CallBack = (item, value) => {
        var clone = Object.assign({}, form);
        clone[item] = value
        SetForm(clone)
        hasCompletedTheMandatory()
    }
    const [form, SetForm] = useState({
        cep: '',
        address: '',
        number: '',
        complement: '',
        neighborhood: '',
        state: '',
        city: ''
    })
    const [msgError, setMsgError] = useState('');
    const [buttonDisable, setButtonDisable] = useState(true);
    const hasCompletedTheMandatory = () => {
        setButtonDisable((form.cep && form.address) ? false : true)
    }
    const submit = () => {
        if (!hasName(form.address)) {
            setMsgError('Preencha o Logradouro corretamente');
            return false
        }
        next(props.completeForm, form)
    }
    const next = (completeForm) => {
        completeForm.address = form
        props.next(completeForm)
    }
    return (
        <View style={StylesForm.container}>
            <ModalError
                setMsgError={setMsgError}
                msgError={msgError}
            />
            <TextCEP
                callBack={(value) => {
                    CallBack('cep', value)
                }}
                item={form.cep}
                maxLength={9}
                placeholder="CEP *"
                keyboardType="phone-pad"
            />
            <TextCustom
                callBack={setAddress}
                item={form.address}
                maxLength={100}
                placeholder="Logradouro *"
            />
            <TextCustom
                callBack={setNumber}
                item={form.number}
                maxLength={100}
                placeholder="Número"
            />
            <TextCustom
                callBack={setComplement}
                item={form.complement}
                maxLength={100}
                placeholder="Complemento"
            />
            <TextCustom
                callBack={setNeighborhood}
                item={form.neighborhood}
                maxLength={100}
                placeholder="Bairro"
            />
            <StateBox
                callBack={setState}
                item={form.state}
                placeholder="Estado"
            />
            <TextCustom
                callBack={setCity}
                item={form.city}
                maxLength={150}
                placeholder="Cidade"
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