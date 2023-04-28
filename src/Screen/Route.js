import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { store } from '../Context/Redux'
import { incrementForm } from '../Context/Redux/Store';
import { Provider, useDispatch } from 'react-redux'

import { AddressForm } from "./Form/Address"
import { AffiliationForm } from "./Form/Affiliation"
import { ContactForm } from "./Form/Contact"
import { DocumentForm } from "./Form/Document"
import { TermsForm } from "./Form/Terms"

const Stack = createNativeStackNavigator()

export const FormScreen = () => {

    return (
        <Provider store={store}>
            <NavigationContainer >
                <Stack.Navigator>
                    <Stack.Screen name="Contact" component={ScreenContact} options={{ title: "Dados de contato" }} />
                    <Stack.Screen name="Document" component={ScreenDocuments} options={{ title: "Documentos" }} />
                    <Stack.Screen name="Affiliation" component={ScreenAffiliation} options={{ title: "Filiação" }} />
                    <Stack.Screen name="Address" component={ScreenAddress} options={{ title: "Endereço" }} />
                    <Stack.Screen name="Terms" component={ScreenTerms} options={{ title: "Termos" }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>)
}

const Next = (action) => {
    console.log(action.origin)
    action.dispatch(
        incrementForm({
            step: action.origin,
            item: action.payload
        })
    )
    if (action.destination) {
        action.navigation.navigate(action.destination)
    }

}
const ScreenContact = ({ navigation }) => {
    const dispatch = useDispatch()
    const CallBack = payload => Next({
        dispatch,
        navigation,
        payload,
        origin: 'Contact',
        destination: 'Document'
    })
    return (<ContactForm CallBack={CallBack} />)
}

const ScreenDocuments = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const CallBack = payload => Next({
        dispatch,
        navigation,
        payload,
        origin: 'Document',
        destination: 'Affiliation'
    })
    return (<DocumentForm CallBack={CallBack} />)
}
const ScreenAffiliation = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const CallBack = payload => Next({
        dispatch,
        navigation,
        payload,
        origin: 'Affiliation',
        destination: 'Address'
    })
    return (<AffiliationForm CallBack={CallBack} />)
}
const ScreenAddress = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const CallBack = payload => Next({
        dispatch,
        navigation,
        payload,
        origin: 'Address',
        destination: 'Terms'
    })
    return (<AddressForm CallBack={CallBack} />)
}
const ScreenTerms = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const CallBack = payload => Next({
        dispatch,
        navigation,
        payload,
        origin: 'Terms',
        destination: null
    })
    return (<TermsForm CallBack={CallBack} />)
}