import { Text, View } from "react-native";

const Step = ({ number, circleSvg, lineSvg, title, description }) => {
  return (
    <View style={{ flexDirection: "row", marginBottom: -15 }}>
      <Text style={{ color: "#C58BF2", lineHeight: 21, fontSize: 14 }}>
        {number}
      </Text>
      <View style={{ flexDirection: "column" }}>
        {/* Circle svg*/}
        {circleSvg}
        {/* Line svg */}
        {lineSvg}
      </View>

      <View style={{ flexDirection: "column", width: 283 }}>
        <Text
          style={{
            lineHeight: 21,
            fontSize: 14,
            fontWeight: "regular",
            color: "#FFFFFF",
            marginBottom: 8,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            lineHeight: 18,
            fontWeight: "regular",
            fontSize: 12,
            color: "#D9D9D9",
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};

export default Step;
