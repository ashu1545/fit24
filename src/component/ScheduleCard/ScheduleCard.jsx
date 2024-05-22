import { LinearGradient } from "expo-linear-gradient"
import { Text, TouchableOpacity } from "react-native"



const ScheduleCard = ({ children, style, left, right, textColor = "#fff", showModal }) => {
    return (
        <LinearGradient
            colors={[left, right]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[{ padding: 12 }, style]}
        >
            <TouchableOpacity onPress={showModal}>
                <Text style={{ color: textColor, lineHeight: 18, fontSize: 12, fontWeight: 'regular' }}>
                    {children}
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default ScheduleCard