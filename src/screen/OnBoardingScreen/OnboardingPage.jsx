import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';


const OnboardingPage = ({navigation}) => {
    const [imageIndex, setImageIndex] = useState(0);
    const [highlightedIndex, setHighlightedIndex] = useState(null); 
    const data = [
        { imageUrl: require("../../../assets/On_board.png"), text: 'Don t worry if you have trouble determining your goals, We can help you determine your goals and track your goals', label: "Track Your Goal" },
        { imageUrl: require("../../../assets/On_board1.jpg"), text: 'Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever', label: "Fat Burn" },
        { imageUrl: require("../../../assets/on_board2.png"), text: 'Let s start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun', label: "Eat Well" },
        { imageUrl: require("../../../assets/on_board3.jpg"), text: 'Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning', label: "Improve Sleep Quality" },
    ];

    const onNextImage = () => {
        const nextIndex = (imageIndex + 1) % data.length;
        setImageIndex(nextIndex);
        setHighlightedIndex(nextIndex);
        setTimeout(() => setHighlightedIndex(null), 300);

        if(imageIndex === 3){
            console.log("hello")
            
            navigation.navigate('LoginScreen');
        }

    };

    console.log(imageIndex, "data1234")

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.carouselContainer}>
                <Image source={data[imageIndex].imageUrl} style={styles.image} resizeMode="cover" />
                <View style={styles.imageTextContainer}>
                    <Text style={styles.imageText}>{data[imageIndex].label}</Text>
                    <Text style={styles.imageText1}>{data[imageIndex].text}</Text>
                </View>
                <View style={styles.dotContainer}>
                    {data.map((item, index) => (
                        <View
                            key={index}
                            style={[styles.dot, index === imageIndex && styles.currentDot]}
                        />
                    ))}
                </View>
            </View>
            <TouchableOpacity
                style={[styles.arrowButton, highlightedIndex === imageIndex && styles.highlighted]}
                onPress={onNextImage}
            >
                <Text style={styles.arrowText}>{'>'}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#090909",
        color:"#ffffff"
        //justifyContent: 'center',
        //alignItems: 'center',
        //paddingHorizontal:20,
        
    },
    carouselContainer: {
        flex:1,
        width: '100%',
        //height: 5000,
        //justifyContent:"center",
        gap:20
        //borderColor: 'black',
        //position: 'relative',
    },
    image: {
        width: "100%",
        height: 550,
        borderRadius: 30,
        //alignItems:"center",
        //justifyContent:"center"
    },
    imageTextContainer: {
        //color: 'black',
        gap:10,
        paddingHorizontal:20
    
    },
    imageText: {
        color: '#ffffff',
        fontWeight:'bold',
        fontSize:25
        
    },
    imageText1: {
        color: '#ffffff',
    
        
    },
    arrowButton: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: '#EB8563',
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrowText: {
        color: 'white',
        fontSize: 30,
        // alignItems:"center",
        // justifyContent:"center"
    },
    dotContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        justifyContent: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: 'gray'
    },
    currentDot: {
        backgroundColor: '#EB8563', // Change color as needed for the current dot
    },
    highlighted: {
        borderWidth: 5,
        borderColor: '#EB8563', // Change color as needed
    },
});
export default OnboardingPage;
