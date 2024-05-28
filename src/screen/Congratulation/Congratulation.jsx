import Layout from "src/component/Layouts/Layout/Layout";
import PersonCongratulated from "assets/personCongratulated";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Congratulation = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <View
        style={{
          borderRadius: 50,
          alignItems: "center",
          alignSelf: "center",
          marginTop: 70,
          marginBottom: 40,
        }}
      >
        <PersonCongratulated />
      </View>

      <View style={{ alignItems: "center", alignSelf: "center" }}>
        <Text
          style={{
            color: "#FFFFFF",
            paddingHorizontal: 70,
            lineHeight: 30,
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Congratulations, You Have Finished Your Workout and you Reward 10x
          coins
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            marginTop: 20,
            paddingHorizontal: 40,
            marginBottom: 10,
          }}
        >
          Exercises is king and nutrition is queen. Combine the two and you will
          have a kingdom
        </Text>
        <Text style={{ color: "#fff" }}>-Jack Lalanne</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("DashboardScreen")}>
        <Button
          mode="contained"
          theme={{ colors: { primary: "#EB8F63" } }}
          contentStyle={{
            paddingVertical: 15,
            fontSize: 16,
            lineHeight: 24,
            fontWeight: "bold",
          }}
          style={{ borderRadius: 50, marginTop: 180 }}
        >
          Back To Home
        </Button>
      </TouchableOpacity>
    </Layout>
  );
};

export default Congratulation;
