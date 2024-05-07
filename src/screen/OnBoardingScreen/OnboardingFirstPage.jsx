import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Button, IconButton, Text } from 'react-native-paper';

const OnboardingFirstPage = ({ navigation }) => {



    const handleGetStarted = () => {
        navigation.navigate('OnBoardingScreen')
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.firstContainer}>
                <Text style={{ fontWeight: "bold", fontSize: 40 }}>Fit24</Text>
                <Text style={{ color: "gray" }}>EveryBody can Train</Text>
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
        backgroundColor: "#050505"
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