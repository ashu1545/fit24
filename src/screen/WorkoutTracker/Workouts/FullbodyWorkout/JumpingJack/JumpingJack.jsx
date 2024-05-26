import JumpingJackVideo from "assets/jumpingJackVideo.svg";
import { Text, View } from "react-native";
import DisplayHeader from "src/component/Headers/DisplayHeader/DisplayHeader";
import HeaderText from "src/component/Headers/HeaderText/HeaderText";
import Layout from "src/component/Layouts/Layout/Layout";
import Step from "src/component/Step/Step";
import Circle from "assets/circle.svg";
import Line from "assets/line.svg";
import CustomRepetitions from "src/component/CustomRepetitions/CustomRepetitions";
import FireImage from "assets/fireImage";
import { Button } from "react-native-paper";

const JumpingJack = ({ navigation }) => {
  return (
    <Layout>
      <JumpingJackVideo style={{ marginTop: 40 }} />

      <View>
        <Text
          style={{
            color: "#FFFFFF",
            marginBottom: 5,
            lineHeight: 24,
            fontSize: 16,
            fontWeight: "semibold",
          }}
        >
          Jumping Jack
        </Text>
        <Text
          style={{
            color: "#D9D9D9",
            fontSize: 12,
            lineHeight: 18,
            fontWeight: "regular",
          }}
        >
          Easy | 390 Calories Burn
        </Text>
      </View>

      <View>
        <Text
          style={{
            color: "#FFFFFF",
            marginBottom: 5,
            lineHeight: 24,
            fontSize: 16,
            fontWeight: "semibold",
            marginTop: 30,
          }}
        >
          Descriptions
        </Text>
        <Text
          style={{
            color: "#D9D9D9",
            fontSize: 12,
            lineHeight: 18,
            fontWeight: "mixed",
          }}
        >
          A jumping jack, also known as a star jump and called a side-straddle
          hop in the US military, is a physical jumping exercise performed by
          jumping to a position with the legs spread wide{" "}
          <Text style={{ color: "#EB8F63" }}>Read More...</Text>
        </Text>
      </View>

      <DisplayHeader
        left={<HeaderText>How To Do It</HeaderText>}
        right={
          <Text style={{ color: "#D9D9D9", fontSize: 12, lineHeight: 18 }}>
            4 Steps
          </Text>
        }
      />

      <Step
        number={"01"}
        circleSvg={<Circle style={{ marginHorizontal: 10 }} />}
        lineSvg={<Line style={{ marginHorizontal: 20, marginTop: -13 }} />}
        title={"Spread Your Arms"}
        description={
          "To make the gestures feel more relaxed, stretch your arms as you start this movement. No bending of hands."
        }
      />
      <Step
        number={"02"}
        circleSvg={<Circle style={{ marginHorizontal: 11 }} />}
        lineSvg={<Line style={{ marginHorizontal: 21, marginTop: -11 }} />}
        title={"Rest at The Toe"}
        description={
          "The basis of this movement is jumping. Now, what needs to be considered is that you have to use the tips of your feet"
        }
      />
      <Step
        number={"03"}
        circleSvg={<Circle style={{ marginHorizontal: 11 }} />}
        lineSvg={<Line style={{ marginHorizontal: 21, marginTop: -11 }} />}
        title={"Adjust Foot Movement"}
        description={
          "Jumping Jack is not just an ordinary jump. But, you also have to pay close attention to leg movements."
        }
      />
      <Step
        number={"04"}
        circleSvg={<Circle style={{ marginHorizontal: 11 }} />}
        title={"Clapping Both Hands"}
        description={
          "This cannot be taken lightly. You see, without realizing it, the clapping of your hands helps you to keep your rhythm while doing the Jumping Jack"
        }
      />

      <Text
        style={{
          marginTop: 40,
          color: "#FFFFFF",
          lineHeight: 24,
          fontSize: 16,
          fontWeight: "semibold",
          marginBottom: 20,
        }}
      >
        Custom Repetitions
      </Text>

      <CustomRepetitions
        fireImage={<FireImage style={{ marginRight: 6 }} />}
        caloriesBurn={"450 Calories Burn"}
        number={29}
        color={"#D9D9D9"}
        paddingLeft={35}
        marginRight={260}
      />
      <View
        style={{ width: "100%", height: 0.4, backgroundColor: "#DDDADA" }}
      />

      <CustomRepetitions
        fireImage={<FireImage style={{ marginRight: 6 }} />}
        caloriesBurn={"450 Calories Burn"}
        number={30}
        paddingLeft={25}
        times={"times"}
        horizontalLine={
          <View
            style={{ width: "100%", height: 0.4, backgroundColor: "#DDDADA" }}
          />
        }
      />

      <CustomRepetitions
        fireImage={<FireImage style={{ marginRight: 6 }} />}
        caloriesBurn={"450 Calories Burn"}
        number={31}
        paddingLeft={35}
        horizontalLine={
          <View
            style={{ width: "100%", height: 0.4, backgroundColor: "#DDDADA" }}
          />
        }
      />

      <Button
        mode="contained"
        theme={{ colors: { primary: "#EB8F63" } }}
        contentStyle={{
          paddingVertical: 15,
          fontSize: 16,
          lineHeight: 24,
          fontWeight: "bold",
        }}
        style={{ borderRadius: 50, marginVertical: 30 }}
        onPress={() => navigation.navigate("Congratulation")}
      >
        Save
      </Button>
    </Layout>
  );
};

export default JumpingJack;
