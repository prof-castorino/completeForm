import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Modal, Text, View } from 'react-native';
import { Styles } from './css';
import { ButtonClosed, ButtonSuccess } from '../Button';
export const ModalCustom = (props) => {
    const callBack = () => {
        props.setMsg('')
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={(props.msg) ? true : false}
        >
            <View style={Styles.centeredView}>
                <View style={Styles.modalViewSucess}>
                    <View>
                        <Ionicons name='document-text-outline' size={175} color='#ffffff' />
                    </View>
                    <Text style={Styles.modalTextSuccess}>Cadastro foi preenchido com sucesso</Text>
                    <ButtonSuccess
                        onPress={callBack}
                        title='OK'
                    />
                </View>
            </View>
        </Modal>
    );
};
export const ModalError = (props) => {
    const callBack = () => {
        props.setMsgError('')
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={(props.msgError) ? true : false}
        >
            <View style={Styles.centeredView}>
                <View style={Styles.modalView}>
                    <View>
                        <Ionicons name='close-circle-outline' size={175} color='#DE3838' />
                    </View>
                    <Text style={Styles.modalText}>{props.msgError}</Text>
                    <ButtonClosed
                        onPress={callBack}
                        title='Entendi'
                    />
                </View>
            </View>
        </Modal>
    );
};
