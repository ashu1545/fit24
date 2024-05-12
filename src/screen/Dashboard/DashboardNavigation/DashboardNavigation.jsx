import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MainDashboard from "screen/Dashboard/MainDashboard/MainDashboard"
import ActivityTracker from "screen/Dashboard/ActivityTracker/ActivityTracker"
import Ionicons from "react-native-vector-icons/Ionicons"
import HomeIcon from "assets/home.svg"
import HomeActiveIcon from "assets/homeActive.svg"
import ActivityIcon from "assets/activity.svg"
import BackNavigation from "assets/backNavs.svg"
import DetailNav from "assets/detailNavs.svg"
import { View, Text, TouchableOpacity } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import NotificationPage from "src/screen/Dashboard/NotificationPage/NotificationPage";


const DashboardNavigation = () => {
    const Tab = createBottomTabNavigator()
    const Stack = createStackNavigator();
    const navigation = useNavigation()

    const handlePrev = () => {
        navigation.navigate('DashboardScreen')
    }

    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName="MainDashboard"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, size, color }) => {
                        let iconComponent;
                        if (route.name === "MainDashboard") {
                            iconComponent = focused ? <HomeActiveIcon /> : <HomeIcon />;
                        } else if (route.name === "Activity Tracker") {
                            iconComponent = <ActivityIcon />
                        }
                        return iconComponent;
                    },
                    tabBarStyle: [
                        {
                            backgroundColor: '#1B1B1B',
                            flexDirection: 'row',
                            justifyContent: 'flex-start'
                        }
                    ],
                    tabBarLabelStyle: {
                        display: 'none'
                    },
                    headerStyle: {
                        backgroundColor: '#1B1B1B'
                    },
                    headerTitle: (props) => {
                        return (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                <TouchableOpacity onPress={handlePrev}>
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
                <Tab.Screen name="MainDashboard" component={MainDashboard} options={{ headerShown: false }} />
                <Tab.Screen name="Activity Tracker" component={ActivityTracker} options={{ headerShown: true }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default DashboardNavigation