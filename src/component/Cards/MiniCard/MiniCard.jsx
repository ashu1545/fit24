import { View, Text } from "react-native";

const MiniCard = ({ pic, title, subtitle, width = "45%" }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 20,
        flexDirection: "row",
        padding: 20,
        justifyContent: pic ? "space-between" : "center",
        width: width,
      }}
    >
      {pic}
      <View>
        <Text style={{ color: "#EB8F63", lineHeight: 21, fontSize: 14 }}>
          {title}
        </Text>
        <Text style={{ color: "#EB8F63", lineHeight: 20, fontSize: 12 }}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default MiniCard;
