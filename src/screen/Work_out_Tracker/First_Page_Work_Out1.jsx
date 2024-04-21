import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, FlatList, Image, Switch, ImageBackground } from 'react-native';
import HeaderNavigation from '../../component/HeaderNavigation';
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Button, IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import WorkOut_graph from "../../../assets/WorkOut_Graph.png";

const windowHeight = Dimensions.get('window').height;

const windowWidth = Dimensions.get('window').width;

const First_Page_Work_Out1 = () => {
    const bottomSheetModalRef = useRef(null);
    console.log(windowWidth, "width")
    const openBottomSheet = () => {
        bottomSheetModalRef.current?.present();
    };

    const closeBottomSheet = () => {
        bottomSheetModalRef.current?.dismiss();
    };

    const uiData = [
        { id: 1, leftImageUrl: require("../../../assets/Not_Exer2.png"), text: "Fullbody Workout", timeText: "Today, 03:00pm", status: "false", color: "#92A3FD", line: true, rightSideButton: { buttonText: "Add", switchStatus: false } },
        { id: 2, leftImageUrl: require("../../../assets/Not_Exer1.png"), text: "Upperbody Workout", timeText: "June 05, 02:00pm", status: "true", color: "#C58BF2", line: false, rightSideButton: { buttonText: "Add", switchStatus: true } }
    ];

    const uiData1 = [
        { id: 1, leftImageUrl: require("../../../assets/Not_Exer2.png"), text: "Fullbody Workout", timeText: "11 Exercises | 32mins", color: "#92A3FD", },
        { id: 2, leftImageUrl: require("../../../assets/Not_Exer2.png"), text: "Lowebody Workout", timeText: "12 Exercises | 40mins", color: "#C58BF2", },
        { id: 3, leftImageUrl: require("../../../assets/Not_Exer2.png"), text: "AB Workout", timeText: "14 Exercises | 20mins", color: "#C58BF2", },

    ];

    const renderItem1 = ({ item }) => (

        <View style={styles.itemContainer1}>
            <LinearGradient
                colors={['#92A3FD', '#9DCEFF',]}
                style={{ borderRadius: 10 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <View style={[styles.itemDataContainer1, { width: "100%", height: 170 }]}>

                    <View style={[styles.textContainer, { gap: 5 }]}>
                        <Text style={[styles.text, { color: "black", fontSize: 14, fontWeight: "bold" }]}>{item.text}</Text>
                        <Text style={[styles.timeText, { color: "gray", fontSize: 14 }]}>{item.timeText}</Text>
                        <View style={{ backgroundColor: "white", borderRadius: 20, width: 100 }}>
                            <Button mode="text" theme={{ colors: { primary: '#92A3FD' } }} style={{ justifyContent: 'center' }}>
                                view more
                            </Button>
                        </View>
                    </View>
                    <View style={[styles.leftImageContainer1, { backgroundColor: "white" }]}>
                        {item.leftImageUrl ? <Image source={item.leftImageUrl} style={styles.leftIcon1} /> : null}
                    </View>


                </View>
            </LinearGradient>
        </View>

    );

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.itemDataContainer}>
                <View style={[styles.leftImageContainer, { backgroundColor: item.color }]}>
                    {item.leftImageUrl ? <Image source={item.leftImageUrl} style={styles.leftIcon} /> : null}
                </View>
                <View style={[styles.textContainer, { flex: 1 }]}>
                    <Text style={[styles.text, { color: "black", fontSize: 14, fontWeight: "bold" }]}>{item.text}</Text>
                    <Text style={[styles.timeText, { color: "gray", fontSize: 14 }]}>{item.timeText}</Text>


                </View>
                <View style={[styles.rightImageContainer, { justifyContent: 'flex-end' }]}>
                    {item.rightSideButton && (


                        <Switch
                            value={item.rightSideButton.switchStatus}
                            onValueChange={(newValue) => console.log('Switch toggled to:', newValue)}

                            trackColor={{ false: '#C58BF2', true: '#DDDADA' }}
                            thumbColor={item.rightSideButton.switchStatus ? '#ffffff' : '#ffffff'}
                        />

                    )}
                </View>
            </View>
        </View>
    );

    let status = true;

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
                <SafeAreaView style={styles.container}>
                    <LinearGradient
                        colors={['#92A3FD', '#92A3FD',]}
                        style={styles.linearGradient}
                        start={[0, 0]}
                        end={[1, 0]}
                    >

                        <HeaderNavigation headerText={"Workout Tracker"} status={status} />
                        <View style={{width:"100%", alignItems:"center",height:200}}>
                        <Image source={WorkOut_graph}  style={{width:400, height:210}}/>
                        </View>
                         
                        <TouchableOpacity onPress={openBottomSheet}>
                            <Text style={styles.button}>Open BottomSheet</Text>
                        </TouchableOpacity>


                    </LinearGradient>
                </SafeAreaView>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={0}
                    snapPoints={[windowHeight * 0.7, windowHeight]}
                >
                    <BottomSheetScrollView style={styles.bottomSheet}>

                        <View style={styles.BodyMassIndex2}>
                            <View style={styles.innerBody}>

                                <Text style={{ color: "black", fontSize: 14, fontWeight: "bold" }}>Daily Workout Schedule</Text>


                            </View >
                            <View style={styles.innerBody1}>
                                <Button mode="contained" theme={{ colors: { primary: '#92A3FD' } }} style={{ justifyContent: 'center' }}>
                                    Check
                                </Button>
                            </View>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Latest Activity</Text>
                                <Button
                                    onPress={() => console.log('Navigate to registration')}

                                    theme={{ colors: { primary: '#ADA4A5' } }}

                                >
                                    See more
                                </Button>
                            </View>
                            <FlatList
                                data={uiData}
                                renderItem={renderItem}
                                keyExtractor={item => item.id.toString()}
                            />
                        </View>

                        <View Style={{ flexDirection: "column", }}>

                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>What Do You Want to Train</Text>

                            </View>


                        </View>

                        <FlatList
                            data={uiData1}
                            renderItem={renderItem1}
                            keyExtractor={item => item.id.toString()}
                            contentContainerStyle={{ flexGrow: 1 }}
                        />



                    </BottomSheetScrollView>


                </BottomSheetModal>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
};

export default First_Page_Work_Out1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal:20
    },
    linearGradient: {
        flex: 1,
        width: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    button: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
    },
    bottomSheet: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: "column",
        marginBottom: 5
    },
    closeButton: {
        alignSelf: 'flex-end',
        color: 'red',
        marginTop: 10,
    },
    BodyMassIndex2: {
        marginTop: 20,
        marginBottom: 20,
        width: "100%",
        height: 80,
        backgroundColor: "#CFD6FD",
        borderRadius: 20,
        flexDirection: "row",
        // justifyContent:"center",
        alignItems: "center"
    },
    innerBody1: {
        width: "50%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    innerBody: {
        flexDirection: "column",
        width: "50%",
        height: "100%",
        justifyContent: "center",
        //alignItems:"center",
        marginLeft: 20,
        gap: 10,

    },
    itemContainer1: {
        flexDirection: 'column',
        paddingVertical: 10,
        gap: 15,
        //backgroundColor:"#C6C6C6"
    },
    itemContainer: {
        flexDirection: 'column',
        paddingVertical: 10,
        gap: 15,
        //backgroundColor:"#C6C6C6"
    },
    itemDataContainer1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",

        // elevation: 2,
        // borderRadius: 10,


    },
    itemDataContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 25,
        elevation: 2,
        borderRadius: 10,
        backgroundColor: "white",
        //shadowColor:"#C6C6C6",
        height: 80
    },
    leftIcon: {
        width: 22,
        height: 22,
    },
    leftIcon1: {
        width: 100,
        height: 70,

    },
    textContainer: {
        flexDirection: "column",


    },
    text: {

    },
    timeText: {

    },
    rightImageContainer: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    leftImageContainer: {
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    leftImageContainer1: {
        width: 120,
        height: 120,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    rightIcon: {
        width: 22,
        height: 22,
    },
    horizontalLine: {
        borderBottomColor: '#DDDADA',
        borderBottomWidth: 1,
        width: "100%",
        //marginVertical:5
    },
});
