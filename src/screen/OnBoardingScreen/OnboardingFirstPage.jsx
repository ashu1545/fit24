import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Button, IconButton, Text } from 'react-native-paper';
import fit24 from "../../../assets/fit24log 1.png"

const OnboardingFirstPage = ({ navigation }) => {



    const handleGetStarted = () => {
        navigation.navigate('OnBoardingScreen')
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.firstContainer}>
            <Image source={fit24} style={{width:200, height:100}}  resizeMode="cover" />
            </View>
            <View style={styles.secondContainer} onPress={handleGetStarted}>
                <TouchableOpacity>
                    <Button
                        mode="contained-tonal"
                        onPress={() => navigation.navigate('OnBoardingScreen')}
                        textColor='white'
                        buttonColor='#EB8563'
                    >
                        Get Started
                    </Button>
                </TouchableOpacity>



            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        backgroundColor: "#090909"
    },
    firstContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    secondContainer: {
        //flex: 1,
        justifyContent: "flex-end",
        width: "100%",
        marginBottom: 20
    }
})
export default OnboardingFirstPage