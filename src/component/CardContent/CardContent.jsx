import { Text } from "react-native"
import { Button } from 'react-native-paper';


const CardContent = ({ title, subtitle, buttonText, titleColor = '#FFFFFF' }) => {

    return (
        <>
            <Text style={{ lineHeight: 21, fontSize: 14, fontWeight: 'medium', color: titleColor }}>{title}</Text>
            <Text style={{ lineHeight: 18, fontSize: 12, fontWeight: 'regular', color: '#EB8F63' }}>{subtitle}</Text>
            <Button
                mode="contained"
                theme={{ colors: { primary: '#FFFFFF' } }}
                labelStyle={{ color: '#EB8F63' }}
            >
                {buttonText}
            </Button>
        </>
    )
}

export default CardContent