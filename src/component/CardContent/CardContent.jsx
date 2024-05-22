import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native"
import { Button } from 'react-native-paper';


const CardContent = ({ title, subtitle, buttonText, titleColor = '#FFFFFF' }) => {
    const navigation = useNavigation()

    const handlePress = () => {
        if (title === 'Fullbody Workout') {
            navigation.navigate('Fullbody Workout', { screen: 'Fullbody Workout' })
        } else if(title === 'Lowerbody Workout') {
            navigation.navigate('Lowerbody Workout')
        }
    }

    return (
        <>
            <Text style={{ lineHeight: 21, fontSize: 14, fontWeight: 'medium', color: titleColor }}>{title}</Text>
            <Text style={{ lineHeight: 18, fontSize: 12, fontWeight: 'regular', color: '#EB8F63' }}>{subtitle}</Text>
            <TouchableOpacity onPress={handlePress}>

                <Button
                    mode="contained"
                    theme={{ colors: { primary: '#FFFFFF' } }}
                    labelStyle={{ color: '#EB8F63' }}
                >
                    {buttonText}
                </Button>
            </TouchableOpacity>

        </>
    )
}

export default CardContent