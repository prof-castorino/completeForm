import React, { useState, useEffect } from 'react';
import { enumState, enumCity } from '../../Context/Integration/Address';
import { Styles } from './css'
import { FlatList, SafeAreaView, View, Text } from 'react-native';
import { ItemSelect, ButtonSelect } from '../Button';
export const StateBox = (props) => {
    const [item, setItem] = useState([])
    useEffect(() => { enumState(setItem) })
    return (<FlatListCustom {...props} data={item} />)
}
export const CityBox = (props) => {
    const [item, setItem] = useState([])
    useEffect(() => { enumCity(setItem, props.state) })
    return (<FlatListCustom {...props} data={item} />)
}

const FlatListCustom = (props) => {
    const [visible, setVisible] = useState(false)
    const State = () => { setVisible(!visible) }
    return (
        <View style={Styles.container}>
            <View style={Styles.inputItem}>
                <Text style={[Styles.text,
                (props.disabled) ?
                    Styles.inputDisabled
                    : Styles.inputActived
                ]}>
                    {(props.item) ? props.item : props.placeholder}
                </Text>
                <View style={Styles.icon}>
                    <ButtonSelect onPress={State} />
                </View>
            </View>
            <View style={[(visible) ? Styles.display : Styles.displayNone]}>
                <List State={State} {...props} data={props.data} />
            </View>
        </View>
    )
}

const List = (props) => {
    const CallBack = (value) => {
        props.CallBack(props.name, value)
        props.State()
    }
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === props.item ? '#3898DE' : 'white';
        const color = item.id === props.item ? 'white' : '#988D8D';
        return (
            <ItemSelect
                item={item}
                onPress={() => CallBack(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };

    return (
        <SafeAreaView style={Styles.fastList}>
            <FlatList
                style={Styles.item}
                data={props.data}
                name={props.name}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={props.item}
            />
        </SafeAreaView>
    );
};

