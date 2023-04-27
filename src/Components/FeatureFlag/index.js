import { View, Text } from 'react-native';
import { Style } from './css'
import { ButtonIcon } from '../Button';

export const FeatureFlagCustom = (props) => {
    const CallBack = () => {
        props.callBack(!props.item)
    }
    return (
        <View style={Style.container}>
            <View style={[Style.featureFlag, (props.item) ? Style.activeFlag : Style.inactiveFlag]}>
                <View style={(props.item) ? Style.activeIcon : Style.inactiveIcon}>
                    <ButtonIcon
                        icon='baseball-outline'
                        onPress={CallBack} />
                </View>
            </View>
            <Text style={Style.label}>{props.placeholder}</Text>
        </View>
    );
}