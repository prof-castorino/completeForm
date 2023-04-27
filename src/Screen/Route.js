import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { store } from '../Context/Redux'
import { increment } from '../Context/Redux/Store/form';
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

const ScreenContact = ({ navigation }) => {
    const dispatch = useDispatch()
    const Next = (form) => {
        dispatch(increment({ step: 'Contact', form }))
        navigation.navigate('Document')
    }
    return (<ContactForm next={Next} />)
}

const ScreenDocuments = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const Next = (form) => {
        dispatch(increment({ step: 'Document', form }))
        navigation.navigate('Affiliation')
    }
    return (<DocumentForm next={Next} />)
}
const ScreenAffiliation = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const Next = (form) => {
        dispatch(increment({ step: 'Affiliation', form }))
        navigation.navigate('Address', form)
    }
    return (<AffiliationForm next={Next} />)
}
const ScreenAddress = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const Next = (form) => {
        dispatch(increment({ step: 'Address', form }))
        navigation.navigate('Terms', form)
    }
    return (<AddressForm next={Next} />)
}
const ScreenTerms = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const Next = (form) => {
        dispatch(increment({ step: 'Terms', form }))
        console.log(form)
    }
    return (<TermsForm next={Next} />)
}