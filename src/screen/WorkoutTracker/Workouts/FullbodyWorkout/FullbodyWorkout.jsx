import { GestureHandlerRootView } from "react-native-gesture-handler";
import LayoutWithoutScrollView from "src/component/Layouts/LayoutWithoutScrollView/LayoutWithoutScrollView";
import LayoutForBottomSheet from "src/component/Layouts/LayoutForBottomSheet/LayoutForBottomSheet";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Switch,
  FlatList,
  ScrollView,
} from "react-native";
import JumpingJack from "assets/jumpingJack.svg";
import DisplayHeader from "src/component/Headers/DisplayHeader/DisplayHeader";
import CardContent from "src/component/CardContent/CardContent";
import LoveIcon from "assets/loveIcon.svg";
import CalendarIcon from "assets/calendarIcon.svg";
import HeaderText from "src/component/Headers/HeaderText/HeaderText";
import HeaderLeftContent from "src/component/Headers/HeaderLeftContent/HeaderLeftContent";
import ArrowIcon from "assets/arrowIcon.svg";
import { LinearGradient } from "expo-linear-gradient";
import LongCard from "src/component/Cards/LongCard/LongCard";
import ExerciseProceedButton from "assets/exerciseProceedButton.svg";
import { Button, IconButton } from "react-native-paper";
import WarmUpPic from "assets/warmUpPic.svg";
import ArmRaisesPic from "assets/armRaisesPic.svg";
import JumpingJackPic from "assets/jumpingJackPic.svg";
import RestAndDrink from "assets/restAndDrinkPic.svg";
import SkippingPic from "assets/skippingPic.svg";
import SquatPic from "assets/squatPic.svg";
import InclinedPushupsPic from "assets/inclinedPushupsPic.svg";
import PushUpsPic from "assets/pushUpsPic.svg";
import CobraStretchPic from "assets/cobraStretchPic.svg";
import ImageHolder from "src/component/Cards/ImageHolder/ImageHolder";
import Barbell from "assets/barbell.svg";
import SkippingRope from "assets/skippingRope.svg";
import WaterBottle from "assets/waterBottle.svg";
import { useNavigation } from "@react-navigation/native";
// import WarmUpPic from "assets/warmUpPic.svg"

const FullbodyWorkout = () => {
  const navigation = useNavigation();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LayoutWithoutScrollView backgroundColor={"#EB8F63"}>
        {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>

        </View> */}
        <View
          style={{
            width: 92,
            height: 92,
            borderRadius: 50,
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <JumpingJack />
        </View>
      </LayoutWithoutScrollView>

      <LayoutForBottomSheet>
        <DisplayHeader
          flexDirection={"column"}
          left={
            <>
              {/* Fullbody Workout
            11 Exercises | 32mins | 320 Calories Burn */}
              <Text style={{ color: "#DDDADA" }}>Fullbody Workout</Text>
              <Text style={{ color: "#EB8F63" }}>
                11 Exercises | 32mins | 320 Calories Burn
              </Text>
            </>
          }
          right={<LoveIcon />}
        />

        <View
          style={{
            backgroundColor: "#F1DDD3",
            borderRadius: 20,
            paddingHorizontal: 10,
          }}
        >
          <DisplayHeader
            left={
              <HeaderLeftContent
                headerTitle={"Schedule Workout"}
                headerColor={"#EB8F63"}
                svgIcon={<CalendarIcon style={{ marginRight: 10 }} />}
              />
            }
            marginTop={20}
            right={
              <TouchableOpacity
                onPress={() => navigation.navigate("Workout Schedule")}
                style={{ flexDirection: "row" }}
              >
                <Text style={{ color: "#EB8F63", marginRight: 9 }}>
                  5/27, 09:00 AM
                </Text>
                <ArrowIcon />
              </TouchableOpacity>
            }
          />
        </View>

        <LinearGradient
          colors={["#F9E9F2", "#FBD1E9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ borderRadius: 20, paddingHorizontal: 10, marginTop: 15 }}
        >
          <DisplayHeader
            left={
              <HeaderLeftContent
                headerTitle={"Difficulty"}
                headerColor={"#EB8F63"}
                svgIcon={<CalendarIcon style={{ marginRight: 10 }} />}
              />
            }
            marginTop={20}
            right={
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "#EB8F63", marginRight: 9 }}>
                  Beginner
                </Text>
                <ArrowIcon />
              </View>
            }
          />
        </LinearGradient>

        <DisplayHeader
          left={<HeaderText headerColor="#DDDADA">You’ll Need</HeaderText>}
          right={<Text style={{ color: "#EB8F63" }}>5 Items</Text>}
        />
        {/* Horizontal ScrollView start */}
        <ScrollView horizontal={true} style={{ flex: 1 }}>
          <ImageHolder image={<Barbell />} imageName={"Barbell"} />
          <ImageHolder image={<SkippingRope />} imageName={"Skipping Rope"} />
          <ImageHolder image={<WaterBottle />} imageName={"Bottle 1 Liters"} />
        </ScrollView>

        {/* Horizontal ScrollView end */}

        <DisplayHeader
          left={<HeaderText headerColor="#DDDADA">You’ll Need</HeaderText>}
          right={<Text style={{ color: "#EB8F63" }}>5 Items</Text>}
        />

        <DisplayHeader
          left={<HeaderText headerColor="#DDDADA">Exercises</HeaderText>}
          right={<Text style={{ color: "#EB8F63" }}>3 sets</Text>}
        />

        <Text style={{ color: "#DDDADA" }}>Set 1</Text>

        <LongCard
          avatar={<WarmUpPic width={50} height={50} />}
          backgroundColor={"#FFFFFF"}
          title={"Warm up"}
          subtitleColor={"#EB8F63"}
          subtitle={"180 Calories Burn | 20minutes"}
          rightIcon={<ExerciseProceedButton width={40} height={40} />}
        />
        <LongCard
          avatar={<JumpingJackPic width={50} height={50} />}
          backgroundColor={"#FFFFFF"}
          title={"Jumping Jack"}
          subtitleColor={"#EB8F63"}
          subtitle={"12x"}
          rightIcon={<ExerciseProceedButton width={40} height={40} />}
        />
        <LongCard
          avatar={<SkippingPic width={50} height={50} />}
          backgroundColor={"#FFFFFF"}
          title={"Skipping"}
          subtitleColor={"#EB8F63"}
          subtitle={"15x"}
          rightIcon={<ExerciseProceedButton width={40} height={40} />}
        />
        <LongCard
          avatar={<SquatPic width={50} height={50} />}
          backgroundColor={"#FFFFFF"}
          title={"Squats"}
          subtitleColor={"#EB8F63"}
          subtitle={"20x"}
          rightIcon={<ExerciseProceedButton width={40} height={40} />}
        />
        <LongCard
          avatar={<ArmRaisesPic width={50} height={50} />}
          backgroundColor={"#FFFFFF"}
          title={"Arm Raises"}
          subtitleColor={"#EB8F63"}
          subtitle={"00:53"}
          rightIcon={<ExerciseProceedButton width={40} height={40} />}
        />
        <LongCard
          avatar={<RestAndDrink width={50} height={50} />}
          backgroundColor={"#FFFFFF"}
          title={"Rest and Drink"}
          subtitleColor={"#EB8F63"}
          subtitle={"02:00"}
          rightIcon={<ExerciseProceedButton width={40} height={40} />}
        />

        <Text style={{ color: "#DDDADA" }}>Set 2</Text>

        <LongCard
          avatar={<InclinedPushupsPic width={50} height={50} />}
          backgroundColor={"#FFFFFF"}
          title={"Incline Push-ups"}
          subtitleColor={"#EB8F63"}
          subtitle={"02:00"}
          rightIcon={<ExerciseProceedButton width={40} height={40} />}
        />
        <LongCard
          avatar={<PushUpsPic width={50} height={50} />}
          backgroundColor={"#FFFFFF"}
          title={"Push-Ups"}
          subtitleColor={"#EB8F63"}
          subtitle={"02:00"}
          rightIcon={<ExerciseProceedButton width={40} height={40} />}
        />
        <LongCard
          avatar={<CobraStretchPic width={50} height={50} />}
          backgroundColor={"#FFFFFF"}
          title={"Cobra Stretch"}
          subtitleColor={"#EB8F63"}
          subtitle={"20x"}
          rightIcon={<ExerciseProceedButton width={40} height={40} />}
        />

        <Button
          mode="contained"
          theme={{ colors: { primary: "#EB8F63" } }}
          contentStyle={{ paddingVertical: 15, fontSize: 16, lineHeight: 24 }}
          style={{ borderRadius: 50, marginBottom: 30 }}
          onPress={() => navigation.navigate("JumpingJack")}
        >
          Start Workout
        </Button>
      </LayoutForBottomSheet>
    </GestureHandlerRootView>
  );
};

export default FullbodyWorkout;
