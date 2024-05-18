import { View, Text } from "react-native"

const CustomRepetitions = ({ fireImage, caloriesBurn, number, times, color = '#EB8F63', paddingLeft, marginRight, horizontalLine }) => {

    return (
        <>
            {horizontalLine}
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: paddingLeft, marginRight: marginRight }}>
                <View style={{ flexDirection: 'row' }}>
                    {fireImage}
                    <Text style={{ color: color, lineHeight: 15, fontSize: 10, fontWeight: "regular", marginRight: 10 }}>{caloriesBurn}</Text>
                </View>
                <Text style={{ color: color, lineHeight: 36, fontSize: 24, fontWeight: 'medium', marginRight: 10 }}>{number}</Text>
                <Text style={{ color: color, lineHeight: 24, fontSize: 16, fontWeight: 'regular' }}>{times}</Text>
            </View>
        </>
    )
}

export default CustomRepetitions