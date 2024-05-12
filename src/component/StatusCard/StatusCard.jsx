import { View, Text } from "react-native"

const StatusCard = ({ img, title, subtitle }) => {

    return (
        <View style={{ backgroundColor: '#fff', borderRadius: 20, paddingHorizontal: 20, paddingTop: 20 }}>
            <Text style={{ color: '#DDDADA', lineHeight: 18, fontSize: 12, marginBottom: 8, fontWeight: 500 }}>
                {title}
            </Text>
            <Text style={{ color: '#EB8F63', lineHeight: 21, fontWeight: 'semibold' }}>{subtitle}</Text>
            {img}
        </View>
    )
}

export default StatusCard