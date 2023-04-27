import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { AddressForm } from "./form/Address"
import { AffiliationForm } from "./form/Affiliation"
import { ContactForm } from "./form/Contact"
import { DocumentForm } from "./form/Document"
import { TermsForm } from "./form/Terms"

const Stack = createNativeStackNavigator()

export const FormScreen = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen name="Contact" component={ScreenContact} options={{ title: "Dados de contato" }} />
                <Stack.Screen name="Document" component={ScreenDocuments} options={{ title: "Documentos" }} />
                <Stack.Screen name="Affiliation" component={ScreenAffiliation} options={{ title: "Filiação" }} />
                <Stack.Screen name="Address" component={ScreenAddress} options={{ title: "Endereço" }} />
                <Stack.Screen name="Terms" component={ScreenTerms} options={{ title: "Termos" }} />
            </Stack.Navigator>
        </NavigationContainer>)
}


const ScreenContact = ({ navigation }) => {
    var completeForm = {
        contact: '',
        documents: '',
        affiliation: '',
        address: '',
        terms: ''
    }
    const Next = (completeForm) => {
        navigation.navigate('Document', completeForm)
    }
    return (<ContactForm next={Next} completeForm={completeForm} />)
}

const ScreenDocuments = ({ navigation, route }) => {
    const Next = (completeForm) => {
        navigation.navigate('Affiliation', completeForm)
    }
    return (<DocumentForm completeForm={route.params} next={Next} />)
}
const ScreenAffiliation = ({ navigation, route }) => {
    const Next = (completeForm) => {
        navigation.navigate('Address', completeForm)
    }
    return (<AffiliationForm completeForm={route.params} next={Next} />)
}
const ScreenAddress = ({ navigation, route }) => {
    const Next = (completeForm) => {
        navigation.navigate('Terms', completeForm)
    }
    return (<AddressForm completeForm={route.params} next={Next} />)
}
const ScreenTerms = ({ navigation, route }) => {
    const Next = (completeForm) => {
        console.log(completeForm)
    }
    return (<TermsForm completeForm={route.params} next={Next} />)
}