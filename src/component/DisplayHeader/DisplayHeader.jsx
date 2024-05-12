import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

const DisplayHeader = ({ left, right }) => {

  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10, marginBottom: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold", color: '#FFFFFF', lineHeight: 24, fontWeight: 600 }}>{left}</Text>

      <TouchableOpacity>
        {right && right}
      </TouchableOpacity>
    </View>
  )
}

export default DisplayHeader