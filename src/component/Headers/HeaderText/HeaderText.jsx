import { Text } from "react-native-paper"

const HeaderText = ({ children, headerColor = '#FFFFFF' }) => {

    return (
        <Text style={{ fontSize: 16, fontWeight: "bold", color: headerColor, lineHeight: 24, fontWeight: 600 }}>
            {children}
        </Text>
    )
}

export default HeaderText