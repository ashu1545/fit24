import { Button } from 'react-native-paper';

const HeaderButton = ({ children, icon,onPress }) => {

    return (
        <Button
            icon={icon}
            mode="contained"
            theme={{ colors: { primary: '#EB8F63' } }}
            style={{ justifyContent: 'center' }}
            contentStyle={{ flexDirection: 'row-reverse' }}
            onPress={onPress}
        >
            {children}
        </Button>
    )
}

export default HeaderButton