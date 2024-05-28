import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BannerPie from "../../../assets/Banner-Pie.png";
import Heart from "../../../assets/Heart-Rate-Graph.png";
import { Button, IconButton } from "react-native-paper";
import WorkOut_Graph from "../../../assets/WorkOut_Graph.png";
const MainDashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ color: "#ADA4A5" }}>Welcome Back,</Text>
              <Text
                style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
              >
                Ankit
              </Text>
            </View>

            <View style={{ marginTop: -10 }}>
              <IconButton
                icon="bell-outline"
                iconColor="black"
                size={25}
                onPress={() => console.log("Pressed")}
              />
            </View>
          </View>
        </View>
        <View style={styles.BodyMassIndex}>
          <View style={styles.innerBody}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
              BMI ( Body Mass Index )
            </Text>
            <Text style={{ color: "white" }}>You have a normal Weight</Text>
            <View></View>
            <Button
              mode="contained"
              theme={{ colors: { primary: "#C58BF2" } }}
              style={{ justifyContent: "center" }}
            >
              View more
            </Button>
          </View>
          <View style={styles.innerBody1}>
            <Image
              source={BannerPie}
              alt="banner_Image"
              style={styles.bannerImage}
            />
          </View>
        </View>

        <View style={styles.BodyMassIndex2}>
          <View style={styles.innerBody}>
            <TouchableOpacity
              onPress={() => navigation.navigate("DashboardNotification")}
            >
              <Text style={{ color: "black", fontSize: 14 }}>Today Target</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.innerBody1}>
            <Button
              mode="contained"
              theme={{ colors: { primary: "#92A3FD" } }}
              style={{ justifyContent: "center" }}
            >
              Check
            </Button>
          </View>
        </View>

        <View styles={{ flexdirection: "column" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("DashboardActivityTracker")}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Activity Status
            </Text>
          </TouchableOpacity>

          <View style={[styles.BodyMassIndex3, { marginTop: 10 }]}>
            <View style={styles.innerBody4}>
              <Text style={{ color: "black", fontSize: 16 }}> Heart Rate </Text>
              <Text style={{ color: "#92A3FD", fontSize: 16 }}> 78 BPM </Text>
            </View>
            <View style={styles.innerBody5}>
              <Image
                source={Heart}
                alt="heart_image"
                style={{ width: 400, height: 60 }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Workout Progress
          </Text>
          <Button
            icon="chevron-down"
            mode="contained"
            theme={{ colors: { primary: "#92A3FD" } }}
            style={{ justifyContent: "center" }}
            contentStyle={{ flexDirection: "row-reverse" }}
          >
            Weekly
          </Button>
        </View>

        <View
          style={styles.ImageContainer}
          onPress={() => navigation.navigate("WorkOutTracker")}
        >
          <ImageBackground
            source={WorkOut_Graph}
            style={styles.background}
          ></ImageBackground>
        </View>
        <View></View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 20,
    marginBottom: 80,
  },
  header: {
    flexDirection: "column",
    marginTop: 20,
    marginBottom: 20,
  },
  BodyMassIndex: {
    width: "100%",
    height: 180,
    backgroundColor: "#92A3FD",
    borderRadius: 20,
    flexDirection: "row",
    // justifyContent:"center",
    alignItems: "center",
  },
  BodyMassIndex2: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    height: 80,
    backgroundColor: "#CFD6FD",
    borderRadius: 20,
    flexDirection: "row",
    // justifyContent:"center",
    alignItems: "center",
  },

  BodyMassIndex3: {
    // marginTop:20,
    width: "100%",
    height: 180,
    backgroundColor: "#CFD6FD",
    borderRadius: 20,
    flexDirection: "column",
    // justifyContent:"center",
    // alignItems: "center"
  },
  innerBody: {
    flexDirection: "column",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    //alignItems:"center",
    marginLeft: 20,
    gap: 10,
  },
  innerBody4: {
    flexDirection: "column",
    width: "100%",
    height: "30%",
    // justifyContent: "center",
    //alignItems:"center",
    marginLeft: 20,
    marginTop: 35,
    gap: 10,
  },
  innerBody5: {
    width: "100%",
    height: "70%",
  },
  innerBody1: {
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerImage: {
    marginTop: 15,
    width: 200,
    height: 200,
  },
  ImageContainer: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    //flex: 1,
    resizeMode: "cover", // or 'stretch', 'contain', 'repeat' as per your requirement
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
