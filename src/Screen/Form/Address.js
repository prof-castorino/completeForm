import { Text, View } from 'react-native';
import { useState, useCallback } from 'react';
import { StylesForm } from './css';
import { hasName } from '../../Context/Util/ValidForm'
import { FindCep } from '../../Context/Integration/Address';
import { AddressProps } from '../../Context/Interface'
import { ModalError } from '../../Components/Modal';
import { ButtonNext } from '../../Components/Button';
import { StateBox, CityBox } from '../../Components/FastList';
import { TextCustom, TextCEP } from '../../Components/TextInput';

export const AddressForm = props => {
    const [form, SetForm] = useState(AddressProps)
    const [msgError, setMsgError] = useState('');
    const [buttonDisable, setButtonDisable] = useState(true);

    const CallBack = useCallback((item, value) => {
        var clone = Object.assign({}, form);
        clone[item] = value
        SetForm(clone)
        hasCompletedTheMandatory()
    }, [form]);
    const setByCEP = (cep, data) => {
        var clone = Object.assign({}, form);
        clone.cep = cep
        if (data) {
            clone.address = data.logradouro
            clone.neighborhood = data.bairro
            clone.state = data.uf
            clone.city = data.localidade
        }
        SetForm(clone)
        hasCompletedTheMandatory()
    }

    const onChangaCEP = (item, value) => {
        if (value.length == 9) {
            FindCep(setByCEP, value)
            return true
        }
        CallBack(item, value)
    }

    const hasCompletedTheMandatory = () => {
        setButtonDisable((form.cep && form.address) ? false : true)
    }
    const submit = () => {
        if (!hasName(form.address)) {
            setMsgError('Preencha o Logradouro corretamente');
            return false
        }
        props.CallBack(form)
    }
    return (
        <View style={StylesForm.container}>
            <ModalError setMsgError={setMsgError} msgError={msgError} />
            <TextCEP
                CallBack={onChangaCEP}
                item={form.cep}
                maxLength={9}
                name='cep'
                placeholder="CEP *"
                keyboardType="phone-pad"
            />
            <TextCustom
                CallBack={CallBack}
                item={form.address}
                maxLength={100}
                name='address'
                placeholder="Logradouro *"
                disabled={form.SendByCep}
            />
            <TextCustom
                CallBack={CallBack}
                item={form.number}
                maxLength={100}
                name='number'
                placeholder="Número"
            />
            <TextCustom
                CallBack={CallBack}
                item={form.complement}
                maxLength={100}
                name='complement'
                placeholder="Complemento"
            />
            <TextCustom
                CallBack={CallBack}
                item={form.neighborhood}
                maxLength={100}
                name='neighborhood'
                placeholder="Bairro"
            />
            <StateBox
                CallBack={CallBack}
                item={form.state}
                name='state'
                placeholder="Estado"
                disabled={form.SendByCep}
            />
            <CityBox
                CallBack={CallBack}
                item={form.city}
                state={form.state}
                name='city'
                placeholder="Cidade"
                disabled={form.SendByCep}
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