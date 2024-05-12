import { View, Text } from "react-native"

const MiniCard = ({ pic, title, subtitle }) => {

    return (
        <View style={{ backgroundColor: '#fff', borderRadius: 20, flexDirection: 'row', padding: 20, justifyContent: 'space-between', width: '45%' }}>
            {pic}
            <View>
                <Text style={{ color: '#EB8F63', lineHeight: 21, fontSize: 14 }}>{title}</Text>
                <Text style={{ color: '#EB8F63', lineHeight: 20, fontSize: 12 }}>{subtitle}</Text>
            </View>
        </View>
    )
}

export default MiniCard