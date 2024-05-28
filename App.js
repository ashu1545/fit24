import React, { useState, useContext } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider, AppContext } from "./src/context_api/AppContext";
import OnboardingFirstPage from "./src/screen/OnBoardingScreen/OnboardingFirstPage";
import AnimatedCarusel from "./src/component/AnimatedCarusel";
import OnboardingPage from "./src/screen/OnBoardingScreen/OnboardingPage";
import Login from "./src/screen/Login/Login";
import SignUp from "./src/screen/SignUp/SignUp";
import HomefirstScreen from "./src/screen/Home/HomefirstScreen";
import MainDashboard from "./src/screen/Dashboard/MainDashboard/MainDashboard";
import SignUpSetup from "./src/screen/SignUp/SignUpSetup";
import DashboardNavigation from "./src/screen/Dashboard/DashboardNavigation/DashboardNavigation";
import NotificationPage from "src/screen/Dashboard/NotificationPage/NotificationPage";
import BackNavigation from "assets/backNavs.svg"
import DetailNav from "assets/detailNavs.svg"
import WorkoutTracker from "src/screen/WorkoutTracker/WorkOutTracker";
import FullbodyWorkout from "src/screen/WorkoutTracker/Workouts/FullbodyWorkout/FullbodyWorkout";
import JumpingJack from "src/screen/WorkoutTracker/Workouts/FullbodyWorkout/JumpingJack/JumpingJack";
import Congratulation from "src/screen/Congratulation/Congratulation";
import WorkoutSchedule from "src/component/WorkoutSchedule/WorkoutSchedule";
import AddSchedule from "src/screen/AddSchedule/AddSchedule";
<<<<<<< HEAD
import MealPlanner from './src/screen/mealplanner/First_page_mealplanner';
import BreakFast from "src/screen/mealplanner/Second_page_brakfast";
import ThirdMealPlanner from "src/screen/mealplanner/Third_page_mealplanner";
import MealSchedule from "src/screen/mealplanner/Fourth_page_mealSchedule";
=======
import Result from "src/screen/Progress/Result";
import Campare from "src/screen/Progress/Campare";

>>>>>>> 58829d842cbc8d220a2087ced6f7800cda782a1b

export default function App() {
  // const navigation = useNavigation()

  const Stack = createStackNavigator();
  // const handlePrev = () => {
  //   navigation.goBack()
  // }
  return (
    <AppProvider>
      <NavigationContainer style={{ backgroundColor: '#000000' }}>
        <Stack.Navigator
          initialRouteName="App"
          screenOptions={({ navigation, route }) => ({
            headerStyle: {
              backgroundColor: route.name === "WorkoutTracker" ? '#EB8F63' : '#1B1B1B',
              elevation: 0
            },
            headerTitle: (props) => {
              return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackNavigation width={32} height={32} />
                  </TouchableOpacity>
                  <Text style={{ color: '#fff', lineHeight: 24, fontSize: 16, fontWeight: "bold" }}>{props.children}</Text>
                  <TouchableOpacity>
                    <DetailNav />
                  </TouchableOpacity>
                </View>
              )
            }
          })}
        >
          <Stack.Screen name="MainScreen" component={OnboardingFirstPage} options={{ headerShown: false }} />
          <Stack.Screen name="OnBoardingScreen" component={OnboardingPage} options={{ headerShown: false }} />
          <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignUpScreen" component={SignUp} options={{ headerShown: false }} />


          <Stack.Screen name="LoginFirstScreen" component={HomefirstScreen} options={{ headerShown: false }} />
          <Stack.Screen name="DashboardScreen" component={DashboardNavigation} options={{ headerShown: false }} />
          <Stack.Screen name="Notification" component={NotificationPage} options={{ headerShown: true, headerLeft: null }} />
          <Stack.Screen name="Workout Tracker" component={WorkoutTracker} options={{ headerShown: true, headerLeft: null }} />
          <Stack.Screen name="Fullbody Workout" component={FullbodyWorkout} options={{ headerShown: true, headerLeft: null }} />
          <Stack.Screen name="Jumping Jack" component={JumpingJack} options={{ headerShown: true, headerLeft: null }} />
          <Stack.Screen name="Congratulation" component={Congratulation} options={{ headerShown: true, headerLeft: null }} />
          <Stack.Screen name="Workout Schedule" component={WorkoutSchedule} options={{ headerShown: true, headerLeft: null }} />
          <Stack.Screen name="Add Schedule" component={AddSchedule} options={{ headerShown: true, headerLeft: null }} />
<<<<<<< HEAD
         <Stack.Screen name="MealPlanner" component={MealPlanner} options={{headerShown:false}}/>
          <Stack.Screen name="BreakFast" component={BreakFast} options={{headerShown:false}}/>
          <Stack.Screen name="ThirdMealPlanner" component={ThirdMealPlanner} options={{headerShown:false}}/>
          <Stack.Screen name="MealSchedule" component={MealSchedule} options={{headerShown:false}}/>
          {/* <Stack.Screen name="SignUpSetup" component={SignUpSetup} options={{ headerShown: false }} />
          <Stack.Screen name="SignUpSetting" component={AnimatedCarusel} options={{ headerShown: false }} /> */}
=======
          <Stack.Screen name="Compare" component={Campare} options={{ headerShown: true, headerLeft: null }} />
          <Stack.Screen name="Result" component={Result} options={{ headerShown: true, headerLeft: null }} />



          <Stack.Screen name="SignUpSetup" component={SignUpSetup} options={{ headerShown: false }} />
          <Stack.Screen name="SignUpSetting" component={AnimatedCarusel} options={{ headerShown: false }} />
>>>>>>> 58829d842cbc8d220a2087ced6f7800cda782a1b
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
