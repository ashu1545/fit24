import { LinearGradient } from "expo-linear-gradient"
import { Text } from "react-native"



const ScheduleCard = ({ children, style, left, right, textColor = "#fff" }) => {

    return (
        <LinearGradient
            colors={[left, right]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[{ padding: 12 }, style]}
        >
            <Text style={{ color: textColor, lineHeight: 18, fontSize: 12, fontWeight: 'regular' }}>
                {children}
            </Text>
        </LinearGradient>
    )
}

export default ScheduleCard