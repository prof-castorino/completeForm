import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Modal, Text, View } from 'react-native';
import { Styles } from './css';
import { ButtonClosed, ButtonNext } from '../Button';
export const ModalCustom = (props) => {
    const callBack = () => {
        props.setModalVisible(!props.modalVisible)
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
        >
            <View style={Styles.centeredView}>
                <View style={Styles.modalView}>
                    <Text style={Styles.modalText}>Cadastro foi preenchido com sucesso</Text>
                    <ButtonNext
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
