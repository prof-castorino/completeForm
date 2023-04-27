import { Text, View } from 'react-native';
import { useState } from 'react';
import { StylesForm } from '../css';
import { hasName } from '../../Context/Util/ValidForm'

import { ModalError } from '../../Components/Modal';
import { ButtonNext } from '../../Components/Button';

import { StateBox } from '../../Components/FastList';
import { TextCustom, TextCEP } from '../../Components/TextInput';
import { FindCep } from '../../Context/Util/Address';

export const AddressForm = props => {
    const SendByCep = (data) => {
        var clone = Object.assign({}, form);
        clone.cep = data.cep
        clone.bairro = data.bairro
        clone.estado = data.uf
        clone.logradouro = data.logradouro
        clone.cidade = data.localidade
        SetForm(clone)
        hasCompletedTheMandatory()
    }
    const setCep = (value) => {
        if (value.length == 9) {
            var data = FindCep(value)
            if (data) {
                return SendByCep(data)
            }
        }
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
        props.next(form)
    }
    return (
        <View style={StylesForm.container}>
            <ModalError
                setMsgError={setMsgError}
                msgError={msgError}
            />
            <TextCEP
                callBack={setCep}
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