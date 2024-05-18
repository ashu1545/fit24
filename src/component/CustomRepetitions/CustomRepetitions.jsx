import { View, Text } from "react-native"

const CustomRepetitions = ({ fireImage, caloriesBurn, number, times, color = '#EB8F63' }) => {

    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row' }}>
                {fireImage}
                <Text style={{ color: color }}>{caloriesBurn}</Text>
            </View>
            <Text style={{ color: color }}>{number}</Text>
            <Text style={{ color: color }}>{times}</Text>
        </View>
    )
}

export default CustomRepetitions