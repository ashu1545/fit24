import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";

const ViewMoreCard = ({ left, rightAvatar }) => {
  return (
    <View
      style={{
        display: "flex",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#855138",
        padding: 20,
        marginBottom: 20,
      }}
    >
      <View style={{ flexDirection: "column", justifyContent: "space-around" }}>
        <Text>{left}</Text>
      </View>
      <View
        style={{
          width: 92,
          height: 92,
          backgroundColor: "lightgrey",
          borderRadius: 50,
        }}
      >
        {rightAvatar}
      </View>
    </View>
  );
};

export default ViewMoreCard;
