import { StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderNavigation from '../../component/HeaderNavigation';
import { Button, IconButton } from 'react-native-paper';
import graph from "../../../assets/Graph.png";
import boot from "../../../assets/boots 1.png";
import glass from "../../../assets/glass 1.png"

const ActivityTracker = () => {



    const uiData = [
        { id: 1, leftImageUrl: require("../../../assets/Drinkingwater.png"), text: "Drinking 300ml Water", timeText: "About 3 minutes ago", rightImageUrl: require("../../../assets/Three_dot.png"), color: "#92A3FD", line: true },
        { id: 2, leftImageUrl: require("../../../assets/EatSnacks.png"), text: "Eat Snack (Fitbar)", timeText: "About 10 minutes ago", rightImageUrl: require("../../../assets/Three_dot.png"), color: "#C58BF2", line: false },


    ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.itemDataContainer}>
                <View style={[styles.leftImageContainer, { backgroundColor: item.color }]}>
                    {item.leftImageUrl ? <Image source={item.leftImageUrl} style={styles.leftIcon} /> : null}
                </View>
                <View style={[styles.textContainer, { flex: 1, justifyContent: "center" }]}>
                    <Text style={styles.text}>{item.text}</Text>
                    <Text style={styles.timeText}>{item.timeText}</Text>
                </View>
                <View style={[styles.rightImageContainer, { justifyContent: 'flex-end' }]}>
                    {item.rightImageUrl ? <Image source={item.rightImageUrl} style={styles.rightIcon} /> : null}
                </View>
            </View>
            {item.line && <View style={styles.horizontalLine} />}
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <HeaderNavigation headerText={"Activity Tracker"} />
            <View style={styles.BodyMassIndex}>
                <View style={styles.innerBody}>
                    <View>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15, textAlign: "center" }}>Today Target</Text>
                    </View>


                    <View style={{ width: 30, height: 30, borderWidth: 2, alignItems: "center", justifyContent: "center" }}>
                        <IconButton
                            icon="plus"
                            iconColor={"white"}
                            size={20}
                            onPress={() => console.log('Pressed')}
                        />
                    </View>

                </View >


                <View style={styles.innerBody1}>


                    <View style={{ width: "40%", height: 65, borderWidth: 2, borderRadius: 20, flexDirection: "row", alignItems: "center", padding: 8, backgroundColor: "white" }}>
                        <View style={{ width: 50, height: 50 }}>
                            <Image source={glass} alt="glass_image" style={{ width: 50, height: 50 }} resizeMode="cover" />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text>8L</Text>
                            <Text>Water Intake</Text>

                        </View>
                    </View>
                    <View style={{ width: "40%", height: 65, borderWidth: 2, borderRadius: 20, flexDirection: "row", alignItems: "center", padding: 10, backgroundColor: "white", gap: 5 }}>
                        <View style={{ width: 50, height: 50 }}>
                            <Image source={boot} alt="glass_image" style={{ width: 50, height: 50 }} resizeMode="cover" />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text>2400</Text>
                            <Text>Foot Steps</Text>

                        </View>
                    </View>

                </View >

            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Activity Progress</Text>
                <Button
                    icon="chevron-down"
                    mode="contained" 
                    theme={{ colors: { primary: '#92A3FD' } }}
                    style={{ justifyContent: 'center' }}
                    contentStyle={{ flexDirection: 'row-reverse' }}
                >
                    Weekly
                </Button>
            </View>

            <View style={styles.ImageContainer}>
                {/* //<Image source={graph} alt="graph_Image"  style={{width:"100%",height:200}} resizeMode="cover" /> */}

                <ImageBackground
                    source={graph}
                    style={styles.background}
                >

                </ImageBackground>
            </View>

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
        </SafeAreaView>
    )
}

export default ActivityTracker

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        gap: 20
    },
    BodyMassIndex: {
        width: "100%",
        height: 150,
        backgroundColor: "#92A3FD",
        borderRadius: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    innerBody: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 210,
        //width: "10%",
        //height: "60%"
    },
    innerBody1: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 50,
        //width: "100%",
        //height: "70%"
    },
    ImageContainer: {
        width: "100%",
        height: 150,
        alignItems: "center",
        justifyContent: "center"
    },
    itemContainer: {
        flexDirection: 'column',
        paddingVertical: 10,
        gap: 15,
    },
    itemDataContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 25
    },
    leftIcon: {
        width: 22,
        height: 22,
    },
    textContainer: {
        flexDirection: "column",
    },
    text: {
        flex: 1,
    },
    timeText: {
        marginRight: 10,
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
    background: {
        //flex: 1,
        resizeMode: 'cover', // or 'stretch', 'contain', 'repeat' as per your requirement
        justifyContent: 'center',
        width: "100%",
        height: "100%"
    },
})