import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, SafeAreaView, Platform, StatusBar, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import { TextInput, Button, Text, SegmentedButtons } from 'react-native-paper';

import DatePickerModal from '../../component/DatePickerModal';

import SignUp from "../../../assets/signUpSetup.jpg";

const SignUpSetup = () => {
    const [gender, setGender] = useState('');
    const [genderError,setGenderError] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [weightError, setWeightError] = useState('');
    const [heightError, setHeightError] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [dateError, setDateError] = useState('')


    const validation = () =>{
        let validationError = '';
        
    }



    const handleSignUp = async () => {
        let validationError = '';
    
        if (!gender) {
            validationError = 'Please select gender';
            setGenderError(validationError);
        } else {
            setGenderError(''); // Clear gender error when it's selected
        }
    
        if (!selectedDate) {
            validationError = 'Please select date of birth';
            setDateError(validationError);
        } else {
            setDateError(''); // Clear date error when it's selected
        }
    
        if (!weight.trim()) {
            validationError = 'Weight is required';
            setWeightError(validationError);
        } else {
            setWeightError(''); // Clear weight error when it's provided
        }
    
        if (!height.trim()) {
            validationError = 'Height is required';
            setHeightError(validationError);
        } else {
            setHeightError(''); // Clear height error when it's provided
        }
    
        if (validationError) {
            return;
        }
    
        
        console.log("data");
    };

    const handleWeightChange = (text) => {
     if(text){
        setWeight(text)
        setWeightError('');
     }
     else{
        setWeight(text)
        setWeightError('Weight is required');
     }
    }


    const handleChangeWeight = (text) => {
        if(text){
            setHeight(text);
            setWeightError('');
        }
        else{
            setHeight(text);
            setWeightError('Height is required');
        }
    }
    
    




    return (
        <>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.imageContainer}>
                        <Image source={SignUp} style={styles.image} resizeMode="cover" />
                    </View>
                    <View style={styles.form}>
                        <View style={styles.toptext}>

                            <Text style={styles.topText2}>Let’s complete your profile</Text>
                            <Text style={styles.topText1}>It will help us to know more about you!</Text>
                        </View>

                        <View>
                            <Text>Select Gender</Text>
                            <SegmentedButtons
                                value={gender}
                                onValueChange={setGender}
                                buttons={[
                                    {
                                        value: 'male',
                                        label: 'Male',
                                        icon: 'gender-male',
                                    },
                                    {
                                        value: 'female',
                                        label: 'Female',
                                        icon: 'gender-female'
                                    },

                                ]}
                                style={styles.segmentedButtonContainer}
                            />
                            {!!genderError && <Text style={styles.error}>{genderError}</Text>}
                        </View>
                        <View>
                        
                        <DatePickerModal date={selectedDate} setDate={setSelectedDate} />
                        {!!dateError && <Text style={styles.error}>{dateError}</Text>}
                        </View>



                        
                        <TextInput
                            mode="outlined"
                            label="Weight (kg)"
                            value={weight}
                            onChangeText={(text) => handleWeightChange(text)}
                            error={!!weightError}
                            keyboardType="numeric"
                            left={<TextInput.Icon icon="weight-kilogram" />}
                        />
                        {!!weightError && <Text style={styles.error}>{weightError}</Text>}
                        <TextInput
                            mode="outlined"
                            label="Height (fit)"
                            value={height}
                            onChangeText={(text) => handleChangeWeight(text) }
                            error={!!heightError}
                            keyboardType="numeric"
                            left={<TextInput.Icon icon="human-male-height" />}
                        />
                        {!!heightError && <Text style={styles.error}>{heightError}</Text>}
                    </View>
                </ScrollView>
                <View style={styles.bottom}>
                    <TouchableOpacity>
                        <Button
                            icon="chevron-right"
                            mode="contained"
                            onPress={handleSignUp}
                            style={styles.button}
                            contentStyle={{ flexDirection: 'row-reverse' }}
                            
                        >
                            Next
                        </Button>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};

export default SignUpSetup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingHorizontal: 20,
        width: "100%"
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        width: "100%"
    },
    toptext: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    topText2: {
        fontWeight: "bold"
    },
    bottom: {
        width: '100%',
        paddingBottom: 20,
    },
    form: {
        width: '100%',
        flexDirection:"column",
        gap:10
    },
    button: {
        marginTop: 10,
    },
    error: {
        color: 'red',
        marginTop: 5,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioButtonText: {
        marginRight: 8,
    },
    imageContainer: {
        marginTop: -150,
        width: "100%",
        height: "53%",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    },

});
