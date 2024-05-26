import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

const DisplayCompareHeader = ({ left, right, marginTop = 0, flexDirection="row" }) => {

  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: marginTop, marginBottom: 20, height:60 }}>
      <View style={{flexDirection: flexDirection}}>
        {left}
      </View>

      <TouchableOpacity>
        {right && right}
      </TouchableOpacity>
    </View>
  )
}

export default DisplayCompareHeader