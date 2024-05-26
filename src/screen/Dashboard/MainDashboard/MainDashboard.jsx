import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  DrawerLayoutAndroid,
} from "react-native";
import React, { useState, useRef } from "react";
import BannerPie from "assets/bannerPie.svg";
import HeartGraph from "assets/heartGraph.svg";
import { Button, IconButton, Drawer } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import Layout from "src/component/Layouts/Layout/Layout";
import SleepGraph from "assets/sleepGraph.svg";
import CaloriesPie from "assets/caloriesPie.svg";
import ConnectingDots from "assets/connectingDots.svg";
import ProgressBar from "../../../component/ProgressBar";
import graph from "assets/Graph.png";
import WorkoutPic from "assets/workoutPic.svg";
import WorkoutProceedButton from "assets/workoutProceedButton.svg";
import LowerBodyWorkout from "assets/lowerBodyWorkout.svg";
import AbsWorkout from "assets/absWorkout.svg";
import LongCard from "src/component/Cards/LongCard/LongCard";
import DisplayHeader from "src/component/Headers/DisplayHeader/DisplayHeader";
import StatusCard from "src/component/StatusCard/StatusCard";
import NotificationPage from "../NotificationPage/NotificationPage";
import UpperbodyWorkoutModal from "src/component/Modal/UpperbodyWorkoutModal";
import HeaderLeftContent from "src/component/Headers/HeaderLeftContent/HeaderLeftContent";
import HeaderButton from "src/component/Headers/HeaderButton/HeaderButton";
import TooltipView from "src/component/TooltipView/TooltipView";

const MainDashboard = ({ navigation }) => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const [active, setActive] = React.useState("");

  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = () => (
    <View style={{ flex: 1 }}>
      <Text style={{ color: "red" }}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );

  const handleWorkoutNavigate = () => {
    navigation.navigate("WorkoutTracker");
  };
  return (
    <Layout>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ color: "#EB8F63", fontSize: 12, lineHeight: 18 }}>
              Welcome Back,
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 20,
                fontWeight: "bold",
                lineHeight: 30,
              }}
            >
              Ankit
            </Text>
          </View>

          <View
            style={{
              marginTop: -10,
              backgroundColor: "#050505",
              borderRadius: 10,
            }}
          >
            <IconButton
              icon="bell-outline"
              iconColor="#fff"
              size={25}
              onPress={() =>
                navigation.navigate("Notification", { screen: "Notification" })
              }
            />
          </View>
        </View>
      </View>

      <LinearGradient
        colors={["#EB8F63", "#EB8F63"]}
        style={{ borderRadius: 20 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0 }}
      >
        <View style={styles.BodyMassIndex}>
          <View style={styles.left}>
            <View>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                BMI (Body Mass Index)
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 17,
                  marginTop: 3,
                  marginBottom: 10,
                }}
              >
                You have a normal weight
              </Text>
            </View>
            <View style={{ width: "60%" }}>
              <TouchableOpacity>
                <LinearGradient
                  colors={["#EEA4CE", "#C58BF2"]} // You can adjust the colors as needed
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ borderRadius: 50 }} // Adjust border radius as needed
                >
                  <Button
                    mode="contained"
                    theme={{ colors: { primary: "transparent" } }} // Set primary color to transparent
                    style={{ borderRadius: 14 }}
                  >
                    View more
                  </Button>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.innerBody1}>
            <BannerPie width={230} height={230} style={{ marginTop: 35 }} />
          </View>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={["#855138", "#855138"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          marginTop: 20,
          width: "100%",
          paddingHorizontal: 20,
          borderRadius: 20,
          // justifyContent: "space-between",
        }}
      >
        <DisplayHeader
          left={<HeaderLeftContent headerTitle={"Today Target"} />}
          marginTop={20}
        />
      </LinearGradient>

      <View styles={{ flexdirection: "column" }}>
        <DisplayHeader
          left={<HeaderLeftContent headerTitle={"Activity Status"} />}
        />

        <View style={[styles.BodyMassIndex3]}>
          <View style={styles.innerBody4}>
            <Text style={{ color: "#ffffff", fontSize: 16 }}> Heart Rate </Text>
            <Text style={{ color: "#EB8F63", fontSize: 16 }}> 78 BPM </Text>
          </View>
          <View style={{ position: "relative" }}>
            <HeartGraph width={"100%"} height={60} />
            <View style={{ position: "absolute" }}>
              <TooltipView text={"3mins ago"} />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 15,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            width: "45%",
            backgroundColor: "#fff",
            borderRadius: 20,
            padding: 30,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <ProgressBar
              rotationDegree="-90deg"
              width={325}
              height={20}
              flexValue={1}
              volume={"50%"}
              marginRight={30}
            />
            <View>
              <View>
                <Text
                  style={{
                    color: "#1D242A",
                    lineHeight: 18,
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                >
                  Water Intake
                </Text>
                <Text
                  style={{
                    color: "#EB8F63",
                    lineHeight: 21,
                    fontWeight: 600,
                    fontSize: 14,
                    marginTop: 10,
                  }}
                >
                  4 Liters
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    marginTop: 10,
                    color: "#EB8F63",
                    lineHeight: 15,
                    fontSize: 10,
                    letterSpacing: 0,
                  }}
                >
                  Real time updates
                </Text>
                <View
                  style={{
                    marginTop: 20,
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <View>
                    {/* <Image source={connectingDots}  /> */}
                    <ConnectingDots />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "#EB8F63",
                        lineHeight: 12,
                        fontSize: 8,
                        fontWeight: 400,
                      }}
                    >
                      6am - 8am
                    </Text>
                    <Text
                      style={{
                        color: "#C58BF2",
                        lineHeight: 12,
                        fontSize: 8,
                        fontWeight: 500,
                      }}
                    >
                      600ml
                    </Text>

                    <Text
                      style={{
                        color: "#EB8F63",
                        lineHeight: 12,
                        fontSize: 8,
                        marginTop: 15,
                        fontWeight: 400,
                      }}
                    >
                      9am - 11am
                    </Text>
                    <Text
                      style={{
                        color: "#C58BF2",
                        lineHeight: 12,
                        fontSize: 8,
                        fontWeight: 500,
                      }}
                    >
                      500ml
                    </Text>

                    <Text
                      style={{
                        color: "#EB8F63",
                        lineHeight: 12,
                        fontSize: 8,
                        marginTop: 16,
                        fontWeight: 400,
                      }}
                    >
                      11am - 2pm
                    </Text>
                    <Text
                      style={{
                        color: "#C58BF2",
                        lineHeight: 12,
                        fontSize: 8,
                        fontWeight: 500,
                      }}
                    >
                      1000ml
                    </Text>

                    <Text
                      style={{
                        color: "#EB8F63",
                        lineHeight: 12,
                        fontSize: 8,
                        marginTop: 16,
                        fontWeight: 400,
                      }}
                    >
                      2pm - 4pm
                    </Text>
                    <Text
                      style={{
                        color: "#C58BF2",
                        lineHeight: 12,
                        fontSize: 8,
                        fontWeight: 500,
                      }}
                    >
                      700ml
                    </Text>

                    <Text
                      style={{
                        color: "#EB8F63",
                        lineHeight: 12,
                        fontSize: 8,
                        marginTop: 16,
                        fontWeight: 400,
                      }}
                    >
                      4pm - now
                    </Text>
                    <Text
                      style={{
                        color: "#C58BF2",
                        lineHeight: 12,
                        fontSize: 8,
                        fontWeight: 500,
                      }}
                    >
                      900ml
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: 23,
          }}
        >
          <StatusCard
            img={
              <SleepGraph
                width={"100%"}
                height={78}
                style={{ marginTop: 25 }}
              />
            }
            title={"Sleep"}
            subtitle={"8h 20m"}
          />
          <View style={{ marginTop: 10, marginBottom: 10 }} />
          <StatusCard
            img={
              <CaloriesPie
                width={"100%"}
                height={120}
                style={{ marginTop: 10 }}
              />
            }
            title={"Calories"}
            subtitle={"760 kCal"}
          />
        </View>
      </View>

      <View style={{ flexDirection: "column", marginBottom: 25 }}>
        <DisplayHeader
          left={<HeaderLeftContent headerTitle={"Workout Progress"} />}
          right={<HeaderButton>Weekly</HeaderButton>}
        />

        <View>
          <ImageBackground
            source={graph}
            style={{ height: 172, alignItems: "center" }}
          >
            <UpperbodyWorkoutModal />
          </ImageBackground>
        </View>
      </View>

      <View>
        <DisplayHeader
          left={<HeaderLeftContent headerTitle={"Latest Workout"} />}
          right={
            <HeaderButton
              style={{ color: "#EB8F63" }}
              onPress={handleWorkoutNavigate}
            >
              See more
            </HeaderButton>
          }
        />

        <View
          style={{ flexDirection: "column", alignContent: "space-between" }}
        >
          <LongCard
            avatar={<WorkoutPic width={50} height={50} />}
            backgroundColor={"#FFFFFF"}
            title={"Fullbody Workout"}
            subtitle={"180 Calories Burn | 20minutes"}
            progressBar={
              <ProgressBar
                rotationDegree="0deg"
                width={191}
                height={10}
                marginTop={4}
                volume={"28%"}
              />
            }
            rightIcon={<WorkoutProceedButton width={40} height={40} />}
          />

          <LongCard
            avatar={<LowerBodyWorkout width={50} height={50} />}
            backgroundColor={"#FFFFFF"}
            title={"Lowerbody Workout"}
            subtitle={"200 Calories Burn | 30minutes"}
            progressBar={
              <ProgressBar
                rotationDegree="0deg"
                width={191}
                height={10}
                marginTop={4}
                volume={"48%"}
              />
            }
            rightIcon={<WorkoutProceedButton width={40} height={40} />}
          />

          <LongCard
            avatar={<AbsWorkout width={50} height={50} />}
            backgroundColor={"#FFFFFF"}
            title={"Ab Workout"}
            subtitle={"180 Calories Burn | 20minutes"}
            progressBar={
              <ProgressBar
                rotationDegree="0deg"
                width={191}
                height={10}
                marginTop={4}
                volume={"28%"}
              />
            }
            rightIcon={<WorkoutProceedButton width={40} height={40} />}
          />
        </View>
      </View>
    </Layout>
  );
};

export default MainDashboard;

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    marginTop: 20,
    marginBottom: 20,
  },
  BodyMassIndex: {
    width: "100%",
    height: 180,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  BodyMassIndex3: {
    height: 180,
    backgroundColor: "#855138",
    borderRadius: 20,
    flexDirection: "column",
  },
  left: {
    width: "50%",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    marginLeft: 20,
    alignContent: "space-between",
    gap: 10,
  },
  innerBody4: {
    flexDirection: "column",
    width: "100%",
    height: "30%",
    marginLeft: 20,
    marginTop: 35,
    gap: 10,
  },
  innerBody1: {
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    resizeMode: "cover", // or 'stretch', 'contain', 'repeat' as per your requirement
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

// { fontWeight: '100' }, // Thin
// { fontWeight: '200' }, // Ultra Light
// { fontWeight: '300' }, // Light
// { fontWeight: '400' }, // Regular
// { fontWeight: '500' }, // Medium
// { fontWeight: '600' }, // Semibold
// { fontWeight: '700' }, // Bold
// { fontWeight: '800' }, // Heavy
// { fontWeight: '900' }, // Black
