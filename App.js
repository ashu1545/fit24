import React, { useState, useContext } from "react"
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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
import MealPlanner from './src/screen/mealplanner/First_page_mealplanner';
import BreakFast from "src/screen/mealplanner/Second_page_brakfast";
import ThirdMealPlanner from "src/screen/mealplanner/Third_page_mealplanner";
import MealSchedule from "src/screen/mealplanner/Fourth_page_mealSchedule";


export default function App() {
  
  const Stack = createStackNavigator();
  return (
    <NavigationContainer  style={{ backgroundColor: '#000000' }}>
      <AppProvider>
        <Stack.Navigator>
          {/* <Stack.Screen name="MainScreen" component={OnboardingFirstPage} options={{ headerShown: false }} />
          <Stack.Screen name="OnBoardingScreen" component={OnboardingPage} options={{ headerShown: false }} />
          <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignUpScreen" component={SignUp} options={{ headerShown: false }} />


          <Stack.Screen name="LoginFirstScreen" component={HomefirstScreen} options={{ headerShown: false }} /> */}
          {/* <Stack.Screen name="DashboardScreen" component={DashboardNavigation} options={{ headerShown: false }} /> */}
          {/* <Stack.Screen name="MealPlanner" component={MealPlanner} options={{headerShown:false}}/> */}
          {/* <Stack.Screen name="BreakFast" component={BreakFast} options={{headerShown:false}}/> */}
          <Stack.Screen name="ThirdMealPlanner" component={ThirdMealPlanner} options={{headerShown:false}}/>
          {/* <Stack.Screen name="MealSchedule" component={MealSchedule} options={{headerShown:false}}/> */}

          {/* <Stack.Screen name="SignUpSetup" component={SignUpSetup} options={{ headerShown: false }} />
          <Stack.Screen name="SignUpSetting" component={AnimatedCarusel} options={{ headerShown: false }} /> */}
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
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
