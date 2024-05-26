import {
  NavigationContainer,
  useNavigation,
  Link,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainDashboard from "screen/Dashboard/MainDashboard/MainDashboard";
import ActivityTracker from "screen/Dashboard/ActivityTracker/ActivityTracker";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeIcon from "assets/home.svg";
import HomeActiveIcon from "assets/homeActive.svg";
import ActivityIcon from "assets/activity.svg";
import BackNavigation from "assets/backNavs.svg";
import DetailNav from "assets/detailNavs.svg";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import NotificationPage from "src/screen/Dashboard/NotificationPage/NotificationPage";
import Profile from "src/component/Profile/Profile";
import ProfileIcon from "assets/profile.svg";
import ProgressIcon from "assets/progressIcon.svg";
import ProgressActiveIcon from "assets/progressActiveIcon.svg";
import ProfileActiveIcon from "assets/profileActive.svg";
import NotificationIcon from "assets/notificationIcon.svg";
import { IconButton } from "react-native-paper";
import ProgressPhoto from "src/screen/Progress/ProgressPhoto";
import WorkoutTracker from "src/screen/WorkoutTracker/WorkOutTracker";
import FullbodyWorkout from "src/screen/WorkoutTracker/Workouts/FullbodyWorkout/FullbodyWorkout";
import JumpingJack from "src/screen/WorkoutTracker/Workouts/FullbodyWorkout/JumpingJack/JumpingJack";
import Congratulation from "src/screen/Congratulation/Congratulation";
import WorkoutSchedule from "src/component/WorkoutSchedule/WorkoutSchedule";
import Compare from "src/screen/Progress/Campare";
import Result from "src/screen/Progress/Result";
import Photo from "src/screen/Progress/Photo";
import Statistics from "src/screen/Progress/Statistics";
import AddSchedule from "src/screen/AddSchedule/AddSchedule";

const DashboardNavigation = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  // console.log('navigation', navigation);

  const handlePrev = () => {
    // navigation.navigate("MainDashboard")
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName="MainDashboard"
        screenOptions={({ navigation, route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconComponent;
            if (route.name === "MainDashboard") {
              iconComponent = focused ? <HomeActiveIcon /> : <HomeIcon />;
            } else if (route.name === "Activity Tracker") {
              iconComponent = <ActivityIcon />;
            } else if (route.name === "Profile") {
              iconComponent = focused ? <ProfileActiveIcon /> : <ProfileIcon />;
            }
            // else if (route.name === "Notification") {
            //   iconComponent = <NotificationIcon />
            // }
            else if (route.name === "ProgressTracker") {
              iconComponent = focused ? (
                <ProgressActiveIcon />
              ) : (
                <ProgressIcon />
              );
            }
            return iconComponent;
          },
          tabBarStyle: [
            {
              backgroundColor: "#1B1B1B",
              flexDirection: "row",
              justifyContent: "flex-start",
            },
          ],
          tabBarLabelStyle: {
            display: "none",
          },
          headerStyle: {
            backgroundColor:
              route.name === "WorkoutTracker" ? "#EB8F63" : "#1B1B1B",
            elevation: 0,
          },
          headerTitle: (props) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <BackNavigation width={32} height={32} />
                </TouchableOpacity>
                <Text
                  style={{
                    color: "#fff",
                    lineHeight: 24,
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {props.children}
                </Text>
                <TouchableOpacity>
                  <DetailNav />
                </TouchableOpacity>
              </View>
            );
          },
        })}
      >
        <Tab.Screen
          name="MainDashboard"
          component={MainDashboard}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Activity Tracker"
          component={ActivityTracker}
          options={{ headerShown: true }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: true }}
        />

        {/* <Tab.Screen name="Compare" component={Compare} options={{ headerShown: true }} />  */}
        {/* <Tab.Screen name="Result" component={Result} options={{ headerShown: true }} /> */}

        {/* <Tab.Screen name="ProgressTracker" component={ProgressPhoto} options={{headerShown:true}} /> */}
      </Tab.Navigator>
    </>
  );
};

export default DashboardNavigation;
