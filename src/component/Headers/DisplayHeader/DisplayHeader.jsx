import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ArrowIcon from "assets/arrowIcon.svg";

const DisplayHeader = ({
  left,
  right,
  marginTop = 30,
  flexDirection = "row",
  marginBottom = 20,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
    >
      <View style={{ flexDirection: flexDirection }}>{left}</View>

      <TouchableOpacity>{right || <ArrowIcon />}</TouchableOpacity>
    </View>
  );
};

export default DisplayHeader;
