import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderNavigation from '../../component/HeaderNavigation';
import food from "../../../assets/Food1.png";
import { Button } from 'react-native-paper';

const NotificationPage = () => {
    const title = "Notification";
    const uiData = [
        { id: 1, leftImageUrl: require("../../../assets/Food1.png"), text: "Hey, it’s time for lunch", timeText: "About 1 minute ago", rightImageUrl: require("../../../assets/Three_dot.png"), color: "#92A3FD", line: true },
        { id: 2, leftImageUrl: require("../../../assets/Not_Exer1.png"), text: "Don’t miss your lowerbody workout", timeText: "About 3 hours ago", rightImageUrl: require("../../../assets/Three_dot.png"), color: "#C58BF2", line: true },
        { id: 3, leftImageUrl: require("../../../assets/food2.png"), text: "Hey, let’s add some meals for your b..", timeText: "About 3 hours ago", rightImageUrl: require("../../../assets/Three_dot.png"), color: "#92A3FD", line: true },
        { id: 4, leftImageUrl: require("../../../assets/Not_Exer2.png"), text: "Congratulations, You have finished A..", timeText: "29 May", rightImageUrl: require("../../../assets/Three_dot.png"), color: "#92A3FD", line: true },
        { id: 5, leftImageUrl: "", text: "Hey, it’s time for lunch", timeText: "8 April", rightImageUrl: require("../../../assets/Three_dot.png"), color: "#92A3FD", line: true },
        { id: 6, leftImageUrl: require("../../../assets/Not_Exer1.png"), text: "Ups, You have missed your Lowerbo...", timeText: "3 April", rightImageUrl: require("../../../assets/Three_dot.png"), color: "#C58BF2", line: false },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.itemDataContainer}>
                <View style={[styles.leftImageContainer, { backgroundColor: item.color }]}>
                    {item.leftImageUrl ? <Image source={item.leftImageUrl} style={styles.leftIcon} /> : null}
                </View>
                <View style={[styles.textContainer, {flex:1,justifyContent:"center"}]}>
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
            <HeaderNavigation headerText={title} />
            <FlatList
                data={uiData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    )
}

export default NotificationPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
    },
    itemContainer: {
        flexDirection: 'column',
        paddingVertical: 10,
        gap:15,
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
});
