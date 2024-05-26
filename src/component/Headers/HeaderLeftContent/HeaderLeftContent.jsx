import { TouchableOpacity } from "react-native";
import HeaderText from "../HeaderText/HeaderText";
import { useNavigation } from "@react-navigation/native";

const HeaderLeftContent = ({ headerTitle, svgIcon, headerColor }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (headerTitle === "Workout Progress") {
      navigation.navigate("Workout Tracker", { screen: "Workout Tracker" });
    }
  };

  return (
    <>
      {svgIcon}

      <TouchableOpacity onPress={handlePress}>
        <HeaderText headerColor={headerColor}>{headerTitle}</HeaderText>
      </TouchableOpacity>
    </>
  );
};

export default HeaderLeftContent;
