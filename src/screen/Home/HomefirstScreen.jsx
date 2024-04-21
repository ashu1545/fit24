import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Welcome from "../../../assets/WelcomeHome.png";

const HomefirstScreen = ({navigation}) => {
    const handledashhboard = () => {
        navigation.navigate('DashboardScreen')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.firstContainer}>
                <View style={styles.imageContainer}>
                    <Image source={Welcome} style={styles.image} resizeMode="contain" />
                </View>
                <Text style={{ fontWeight: "bold", fontSize: 40 }}>Welcome Ankit</Text>
                <Text style={{ color: "gray", textAlign: "center" }} numberOfLines={2}>
                    You are all set now, let’s reach your goals together with us
                </Text>

            </View>
            <View style={styles.secondContainer}>
                <TouchableOpacity>
                    <Button 
                    mode="contained-tonal"
                     textColor='white' 
                     buttonColor='#92A3FD'
                     onPress={handledashhboard}
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
    },
    firstContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    secondContainer: {
        justifyContent: "flex-end",
        width: "100%",
        marginBottom: 20,
    },
    imageContainer: {
        marginTop: -100,
        width: 400,
        height: 400,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    },
});

export default HomefirstScreen;
