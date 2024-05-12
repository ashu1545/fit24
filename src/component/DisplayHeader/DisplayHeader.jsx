import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

const DisplayHeader = ({ left, right, marginTop = 30 }) => {

  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: marginTop, marginBottom: 20 }}>
      <View style={{flexDirection: 'row'}}>
        {left}
      </View>

      <TouchableOpacity>
        {right && right}
      </TouchableOpacity>
    </View>
  )
}

export default DisplayHeader