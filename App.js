import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import SignUpSetup from "./src/screen/SignUp/SignUpSetup";
import AnimatedCarusel from "./src/component/AnimatedCarusel";
import HeaderNavigation from "./src/component/HeaderNavigation";
import NotificationPage from "./src/screen/Dashboard/NotificationPage";
import Login from "./src/screen/Login/Login";
import SignUp from "./src/screen/SignUp/SignUp";
import OnboardingFirstPage from "./src/screen/OnBoardingScreen/OnboardingFirstPage";
import OnboardingPage from "./src/screen/OnBoardingScreen/OnboardingPage";
import MainDashboard from "./src/screen/Dashboard/MainDashboard";



const images = [
  'https://64.media.tumblr.com/ZK0HIaCaHp0f6siybSHYGr0uo1_500.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOxmEEq5lv0RCkLxNFECZbBYnA3ZBtOlrTTg&s',
  'https://64.media.tumblr.com/ZK0HIaCaHp0f6siybSHYGr0uo1_500.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOxmEEq5lv0RCkLxNFECZbBYnA3ZBtOlrTTg&s',
  
]; 

export default function App() {
  return (
    <>
    {/* <SignUpSetup/> */}

    {/* <AnimatedCarusel/> */}

    {/* <HeaderNavigation /> */}

    {/* <NotificationPage/> */}
    {/* <Login /> */}
    {/* <SignUp/> */}
    {/* <OnboardingFirstPage/> */}
    {/* <OnboardingPage/> */}
    <MainDashboard />

      

    </>
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
