import WorkoutTrackerGraph from "assets/workoutTrackerGraph.svg"
import { Text, View, Dimensions, Switch, FlatList } from 'react-native'
import { Snackbar } from 'react-native-paper';
import UpperbodyWorkoutModal from "src/component/Modal/UpperbodyWorkoutModal"
import { useRef, useState } from "react"
import LayoutForBottomSheet from "src/component/Layouts/LayoutForBottomSheet/LayoutForBottomSheet"
import LayoutWithoutScrollView from "src/component/Layouts/LayoutWithoutScrollView/LayoutWithoutScrollView"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import DisplayHeader from "src/component/Headers/DisplayHeader/DisplayHeader"
import { LinearGradient } from 'expo-linear-gradient';
import LongCard from "src/component/Cards/LongCard/LongCard"
import Skipping from "assets/skipping.svg"
import WeightLifting from "assets/weightLifting.svg"
import ViewMoreCard from "src/component/Cards/ViewMoreCard/ViewMoreCard"
import SkippingLG from "assets/skippingLg.svg"
import WeightLiftingLG from "assets/weightLiftingLG.svg"
import AB_ExerciseLG from "assets/abExerciseLG.svg"
import CardContent from "src/component/CardContent/CardContent"
import HeaderText from "src/component/Headers/HeaderText/HeaderText"
import HeaderButton from "src/component/Headers/HeaderButton/HeaderButton"

const windowHeight = Dimensions.get('window').height;

const WorkoutTracker = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const sheetRef = useRef(null)
  const snapPoints = ["20"]

  const upcomingWorkoutData = [
    {
      id: 1,
      avatar: <Skipping />,
      title: 'Fullbody Workout',
      backgroundColor: '#EB8F63',
      rightIcon: <Switch />
    },
    {
      id: 2,
      avatar: <WeightLifting />,
      title: 'Upperbody Workout',
      backgroundColor: '#EB8F63',
      rightIcon: <Switch />
    },
  ]

  const FullbodyWorkout = () => {
    navigation.navigate("Fullbody Workout")
  }

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const renderWorkoutData = ({ item }) => (
    <LongCard
      avatar={item.avatar}
      title={item.title}
      backgroundColor={item.backgroundColor}
      rightIcon={item.rightIcon}
      onToggleSnackBar={onToggleSnackBar}
    />
  )

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <LayoutWithoutScrollView backgroundColor={'#EB8F63'} >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
            <View style={{ position: 'relative' }}>
              <WorkoutTrackerGraph />
              <View style={{ position: 'absolute', marginLeft: 90, marginTop: -20 }}>
                <UpperbodyWorkoutModal style={{ position: 'absolute', top: 1, }} />
              </View>
            </View>
          </View>
        </LayoutWithoutScrollView>

        <LayoutForBottomSheet backgroundColor="#1B1B1B">
          <LinearGradient
            colors={['#855138', '#855138']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              marginTop: 20,
              width: "100%",
              padding: 10,
              borderRadius: 20,
              justifyContent: "space-between",
            }}
          >
            <DisplayHeader
              left={<HeaderText>Daily Workout Schedule</HeaderText>}
              marginTop={10}
              right={<HeaderButton onPress={() => navigation.navigate("Workout Schedule")}>Check</HeaderButton>}
            />
          </LinearGradient>

          <DisplayHeader
            left={<HeaderText>Upcoming Workout</HeaderText>}
            right={<Text style={{ color: '#ffffff' }}>See more</Text>}
          />

          <FlatList
            data={upcomingWorkoutData}
            renderItem={renderWorkoutData}
            keyExtractor={(item) => item.id}
          />

          <DisplayHeader
            left={<HeaderText>What Do You Want to Train</HeaderText>}
          />

          <ViewMoreCard
            left={<CardContent title={'Fullbody Workout'} subtitle={'11 Exercises | 32mins'} buttonText={'View More'} handlePress={FullbodyWorkout} />}
            rightAvatar={<SkippingLG style={{ marginLeft: 9 }} />}
          />
          <ViewMoreCard
            left={<CardContent title={'Lowerbody Workout'} subtitle={'12 Exercises | 40mins'} buttonText={'View More'} handlePress={onToggleSnackBar} />}
            rightAvatar={<WeightLiftingLG style={{ marginLeft: 9 }} />}
          />
          <ViewMoreCard
            left={<CardContent title={'AB Workout'} subtitle={'14 Exercises | 20mins'} buttonText={'View More'} handlePress={onToggleSnackBar} />}
            rightAvatar={<AB_ExerciseLG style={{ marginLeft: -12, marginTop: 12 }} />}
          />
          <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            >
            working in Progress Coming Soon.
          </Snackbar>
        </LayoutForBottomSheet>

      </GestureHandlerRootView>
    </>
  )
}

export default WorkoutTracker