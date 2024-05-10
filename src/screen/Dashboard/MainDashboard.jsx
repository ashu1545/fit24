import { Dimensions, ZScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import BannerPie from "../../../assets/Banner-Pie.png"
import Heart from "../../../assets/Heart-Rate-Graph.png"
import { Button, IconButton } from 'react-native-paper';
import WorkOut_Graph from "../../../assets/WorkOut_Graph.png"
import { LinearGradient } from 'expo-linear-gradient';
import Layout from '../../component/Layout/Layout';
import sleepGraph from "../../../assets/sleep_graph.png"
import caloriesPie from "../../../assets/calories_pie.png"

const screenWidth = Dimensions.get('window').width;

const MainDashboard = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                data: [2500, 2000, 3000, 3500, 2200, 2800, 3200], // Sample water intake data
                color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`, // Color for the line
            },
        ],
    };
    return (
        <Layout>
            <View style={styles.header}>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ color: "#EB8F63", fontSize: 12, lineHeight: 18 }}>Welcome Back,</Text>
                        <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "bold", lineHeight: 30 }}>Ankit</Text>
                    </View>

                    <View style={{ marginTop: -10, backgroundColor: '#050505', borderRadius: 10 }}>
                        <IconButton
                            icon="bell-outline"
                            iconColor="#fff"
                            size={25}
                            onPress={() => console.log('Pressed')}
                        />
                    </View>

                </View>

            </View>
            <LinearGradient
                // f5ae2a

                colors={['#EB8F63', '#EB8F63']}
                style={{ borderRadius: 20 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0 }}
            >
                <View style={styles.BodyMassIndex}>
                    <View style={styles.left}>
                        <View>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>BMI (Body Mass Index)</Text>
                            <Text style={{ color: "white", fontSize: 17, marginTop: 3, marginBottom: 10 }}>You have a normal weight</Text>
                        </View>
                        <View style={{ width: '60%' }}>
                            <LinearGradient
                                colors={['#EEA4CE', '#C58BF2']} // You can adjust the colors as needed
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={{ borderRadius: 50 }} // Adjust border radius as needed
                            >
                                <Button
                                    mode="contained"
                                    theme={{ colors: { primary: 'transparent' } }} // Set primary color to transparent
                                    style={{ borderRadius: 14 }}
                                >
                                    View more
                                </Button>
                            </LinearGradient>

                        </View>
                    </View >
                    <View style={styles.innerBody1}>
                        <Image source={BannerPie} alt="banner_Image" style={styles.bannerImage} />
                    </View>
                </View>

            </LinearGradient>

            <LinearGradient
                colors={['#855138', '#855138']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.BodyMassIndex2}
            >

                <View style={styles.innerBody}>

                    <Text style={{ color: "#fff", fontSize: 14 }}>Today's Target</Text>


                </View >
                <View style={styles.innerBody1}>
                    <Button mode="contained" theme={{ colors: { primary: '#EB8F63' } }} style={{ justifyContent: 'center' }}>
                        Check
                    </Button>
                </View>

            </LinearGradient>


            <View styles={{ flexdirection: "column" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: '#FFFFFF', marginBottom: 8 }}>Activity Status</Text>

                <View style={[styles.BodyMassIndex3, { marginTop: 10 }]}>
                    <View style={styles.innerBody4}>

                        <Text style={{ color: "#ffffff", fontSize: 16 }}> Heart Rate </Text>
                        <Text style={{ color: "#EB8F63", fontSize: 16 }}> 78 BPM </Text>


                    </View >
                    <View style={styles.innerBody5}>
                        <Image source={Heart} alt="heart_image" style={{ width: 400, height: 60 }} />
                    </View>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                <View style={styles.div1}>
                    <Text style={styles.text}>Welcome to React Native!</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around', marginLeft: 13 }}>
                    <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 20, padding: 20, marginBottom: 10 }}>
                        <Text style={{ color: 'gray', lineHeight: 18, fontSize: 12, marginBottom: 8 }}>Sleep</Text>
                        <Text style={{ color: '#EB8F63', lineHeight: 21, fontWeight: 'semibold' }}>8h 20m</Text>
                        <Image source={sleepGraph} style={{ width: 140, height: 78, marginTop: 25 }} />
                    </View>

                    <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 20, paddingHorizontal: 20, paddingTop: 20 }}>
                        <Text style={{ color: 'gray', lineHeight: 18, fontSize: 12, marginBottom: 8 }}>Calories</Text>
                        <Text style={{ color: '#EB8F63', lineHeight: 21, fontWeight: 'semibold' }}>760 kCal</Text>
                        <Image source={caloriesPie} style={{ width: 120, height: 120, marginTop: 10 }} />
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10, marginBottom: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Workout Progress</Text>
                <Button
                    icon="chevron-down"
                    mode="contained" theme={{ colors: { primary: '#92A3FD' } }}
                    style={{ justifyContent: 'center' }}
                    contentStyle={{ flexDirection: 'row-reverse' }}
                >
                    Weekly
                </Button>
            </View>

            <View style={styles.ImageContainer}>
                <ImageBackground
                    source={WorkOut_Graph}
                    style={styles.background}
                >
                </ImageBackground>
            </View>
        </Layout>

    )
}

export default MainDashboard

const styles = StyleSheet.create({
    header: {
        flexDirection: "column",
        marginTop: 20,
        marginBottom: 20,
    },
    BodyMassIndex: {
        width: "100%",
        height: 180,
        // backgroundColor: "#DA840D",


        borderRadius: 20,
        flexDirection: "row",
        // justifyContent:"center",
        alignItems: "center"
    },
    BodyMassIndex2: {
        marginTop: 20,
        marginBottom: 20,
        width: "100%",
        height: 80,
        // backgroundColor: "#CFD6FD",
        borderRadius: 20,
        flexDirection: "row",
        // justifyContent:"center",
        alignItems: "center"
    },

    BodyMassIndex3: {
        // marginTop:20,
        width: "100%",
        height: 180,
        backgroundColor: "#855138",
        borderRadius: 20,
        flexDirection: "column",
        // justifyContent:"center",
        // alignItems: "center"
    },
    left: {
        width: '50%',
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        marginLeft: 20,
        alignContent: 'space-between',
        gap: 10,
        // marginRight: 14


    },
    innerBody: {
        flexDirection: "column",
        width: '50%',
        height: "100%",
        justifyContent: "center",
        //alignItems:"center",
        marginLeft: 20,
        gap: 10,

    },
    innerBody4: {
        flexDirection: "column",
        width: "100%",
        height: "30%",
        // justifyContent: "center",
        //alignItems:"center",
        marginLeft: 20,
        marginTop: 35,
        gap: 10,

    },
    innerBody5: {

        width: "100%",
        height: "70%",




    },
    innerBody1: {
        width: "50%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    bannerImage: {
        marginTop: 35,
        width: 230,
        height: 230
    },
    ImageContainer: {
        width: "100%",
        height: 200,
        alignItems: "center",
        justifyContent: "center"
    },
    background: {
        //flex: 1,
        resizeMode: 'cover', // or 'stretch', 'contain', 'repeat' as per your requirement
        justifyContent: 'center',
        width: "100%",
        height: "100%"
    },


    //my own

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
    },
    div1: {
        // width: '45%',
        // height: 500,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        // marginTop: 35,
    },
    div2Container: {
        width: '45%',
        marginTop: 35,
    },
    div2Top: {
        height: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 10,
        borderRadius: 20,
    },
    div2Bottom: {
        height: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },





})