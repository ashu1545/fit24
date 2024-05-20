import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from 'src/component/Layouts/Layout/Layout'
import DisplayHeader from 'src/component/Headers/DisplayHeader/DisplayHeader'
import HeaderText from 'src/component/Headers/HeaderText/HeaderText'
import ProgressTrackerGraph from "assets/progressTrackerGraph.svg"

const Statistics = () => {
    const uiData = [
        { id: "1", label: "Lose Weight", increase: 67, decrease: 33 },
        { id: "2", label: "Height Increase", increase: 12, decrease: 88 },
        { id: "3", label: "Muscle Mass Increase", increase: 43, decrease: 57 },
        { id: "4", label: "Abs", increase: 11, decrease: 89 }
    ]

    return (
        <Layout>
            <View style={{flex:1,alignItems:"center",justifyContent:"center", marginTop:10}}>
               <ProgressTrackerGraph/> 
            </View>
            <View style={styles.container}>
                <DisplayHeader
                    left={<Text style={{color:"#EB8F63"}}>May</Text>}
                    marginTop={10}
                    right={<Text style={{color:"#EB8F63"}}>June</Text>}
                />
                {uiData && uiData.map((item) => (
                    <View key={item.id} style={styles.statContainer}>
                        <Text style={styles.label}>{item.label}</Text>
                        <View style={styles.row}>
                            <View style={[styles.decreaseContainer,{width:`${item.decrease}%`}]}>
                                <Text style={styles.decreaseText}>{item.decrease}%</Text>
                            </View>
                            <View style={[styles.increaseContainer,{width:`${item.increase}%`}]}>
                                <Text style={styles.increaseText}>{item.increase}%</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </Layout>
    )
}

export default Statistics

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 10,
    },
    statContainer: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: "#333",
        borderRadius: 10,
    },
    label: {
        color: "#ffffff",
        textAlign: "center",
        marginBottom: 10,
        fontSize: 18,
    },
    row: {
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    increaseContainer: {
        alignItems: "center",
        backgroundColor: "#EB8F63", // Light green background for increase
        // padding: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    decreaseContainer: {
        alignItems: "center",
        backgroundColor: "#FF0000", // Light red background for decrease
        //padding: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    increaseText: {
        color: "#ffffff", // Green color for increase text
        fontSize: 16,
    },
    decreaseText: {
        color: "#ffffff",
        fontSize: 16,
    },
})
