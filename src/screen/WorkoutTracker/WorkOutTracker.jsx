import WorkoutTrackerGraph from "assets/workoutTrackerGraph.svg"
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Dimensions, Switch } from 'react-native'
import UpperbodyWorkoutModal from "src/component/Modal/UpperbodyWorkoutModal"
import BottomSheet, { BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet"
import { useRef } from "react"
import LayoutForBottomSheet from "src/component/Layouts/LayoutForBottomSheet/LayoutForBottomSheet"
import LayoutWithoutScrollView from "src/component/Layouts/LayoutWithoutScrollView/LayoutWithoutScrollView"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import DisplayHeader from "src/component/DisplayHeader/DisplayHeader"
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import LongCard from "src/component/LongCard/LongCard"
import Skipping from "assets/skipping.svg"
import WeightLifting from "assets/weightLifting.svg"

const windowHeight = Dimensions.get('window').height;

const WorkoutTracker = () => {
    const sheetRef = useRef(null)
    const snapPoints = ["20"]

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
                            left={<Text style={{ fontSize: 16, fontWeight: "bold", color: '#FFFFFF', lineHeight: 24, fontWeight: 600 }}>Daily Workout Schedule</Text>}
                            marginTop={10}
                            right={<Button
                                mode="contained" theme={{ colors: { primary: '#EB8F63' } }}
                                style={{ justifyContent: 'center' }}
                                contentStyle={{ flexDirection: 'row-reverse' }}
                            >
                                Check
                            </Button>}

                        />
                    </LinearGradient>

                    <DisplayHeader
                        left={
                            <Text style={{ fontSize: 16, fontWeight: "bold", color: '#FFFFFF', lineHeight: 24, fontWeight: 600 }}>
                                Upcoming Workout
                            </Text>
                        }
                        right={<Text style={{ color: '#ffffff' }}>See more</Text>}
                    />

                    <LongCard
                        avatar={<Skipping />}
                        title={'Fullbody Workout'}
                        backgroundColor={'#EB8F63'}
                        rightIcon={<Switch />}
                    />
                    <LongCard
                        avatar={<WeightLifting />}
                        title={'Upperbody Workout'}
                        backgroundColor={'#EB8F63'}
                        rightIcon={<Switch />}
                    />

                    <DisplayHeader
                        left={<Text style={{ fontSize: 16, fontWeight: "bold", color: '#FFFFFF', lineHeight: 24, fontWeight: 600 }}>
                            What Do You Wantto Train
                        </Text>}
                    />

                    <LongCard 

                    />
                </LayoutForBottomSheet>

            </GestureHandlerRootView>

        </>



    )
}

export default WorkoutTracker