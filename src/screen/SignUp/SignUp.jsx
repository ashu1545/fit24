import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, SafeAreaView, Platform, StatusBar, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import { TextInput, Button, Text, Checkbox } from 'react-native-paper';
import Loader from '../Loader/Loader';

const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const [loader, setLoader] = useState(false)

  const GoogleIcon = require("../../../assets/googleicon.png");
  const FaceBookIcon = require("../../../assets/facebook 1.png");

  // Function to validate the form inputs
  const validateForm = () => {
    let validationError = '';

    if (!firstName.trim()) {
      validationError = 'First Name is required';
      setFirstNameError(validationError);
      return false;
    }

    if (!lastName.trim()) {
      validationError = 'Last Name is required';
      setLastNameError(validationError);
      return false;
    }

    if (!email.trim()) {
      validationError = 'Email is required';
      setEmailError(validationError);
      return false;
    }

    if (!validateEmail(email)) {
      validationError = 'Invalid email';
      setEmailError(validationError);
      return false;
    }

    if (!password.trim()) {
      validationError = 'Password is required';
      setPasswordError(validationError);
      return false;
    }

    if (password.length < 6) {
      validationError = 'Password must be at least 6 characters long';
      setPasswordError(validationError);
      return false;
    }

    if (!termsChecked) {
      validationError = 'Please agree to terms and conditions';
      console.log(validationError);
      return false;
    }

    return true;
  };

  // Function to validate email format
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handle sign up button press
  const handleSignUp = () => {
    if (validateForm()) {
      setLoader(true)
      setFirstNameError('');
      setLastNameError('');
      setEmailError('');
      setPasswordError('');
      setTimeout(() => {
        setLoader(false);
        navigation.navigate('SignUpSetup');
      }, 4000);

    }
  };

  return (
    <>
      {
        loader ? <Loader /> :
          <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <View style={styles.form}>
                <View style={styles.toptext}>
                  <Text style={[styles.topText1, { color: "#ffffff" }]}>Hey there,</Text>
                  <Text style={[styles.topText2, { color: "#ffffff" }]}>Create an Account</Text>
                </View>
                <TextInput
                  mode="outlined"
                  label="First Name"
                  value={firstName}
                  onChangeText={(text) => setFirstName(text)}
                  error={!!firstNameError}
                  left={<TextInput.Icon icon="account" color="#EB8563" />}
                />
                {!!firstNameError && <Text style={styles.error}>{firstNameError}</Text>}
                <TextInput
                  mode="outlined"
                  label="Last Name"
                  value={lastName}
                  onChangeText={(text) => setLastName(text)}
                  error={!!lastNameError}
                  left={<TextInput.Icon icon="account-circle" color="#EB8563" />}
                />
                {!!lastNameError && <Text style={styles.error}>{lastNameError}</Text>}
                <TextInput
                  mode="outlined"
                  label="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  error={!!emailError}
                  left={<TextInput.Icon icon="email" color="#EB8563" />}
                />
                {!!emailError && <Text style={styles.error}>{emailError}</Text>}
                <TextInput
                  mode="outlined"
                  label="Password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  error={!!passwordError}
                  secureTextEntry={!showPassword}
                  left={<TextInput.Icon icon="lock" color="#EB8563" />}
                  right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(!showPassword)} color="#EB8563" />}
                />
                {!!passwordError && <Text style={styles.error}>{passwordError}</Text>}
                <View style={styles.Terms}>
                  <Checkbox
                    status={termsChecked ? 'checked' : 'unchecked'}
                    onPress={() => setTermsChecked(!termsChecked)}
                    color="white"
                    style={{ backgroundColor: "white" }}
                    theme={"white"}
                  />
                  <Text style={[styles.termsText, { color: "#ffffff" }]}>I agree to the Terms and Conditions</Text>
                </View>
              </View>
            </ScrollView>
            <View style={styles.bottom}>
              <TouchableOpacity>
                <Button
                  icon="login"
                  mode="contained"
                  onPress={handleSignUp}
                  style={styles.button}
                >
                  Register
                </Button>
              </TouchableOpacity>
              <View style={styles.Or}>
                <Text style={styles.separatorLine}>________________________</Text>
                <Text style={styles.separatorText}>Or</Text>
                <Text style={styles.separatorLine}>________________________</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.IconButton}>
                  <Image source={GoogleIcon} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.IconButton}>
                  <Image source={FaceBookIcon} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>
              </View>
              <View style={styles.Register}>
                <Text style={styles.registerText}>Already have an account?</Text>
                <Button
                  onPress={() => navigation.navigate('LoginScreen')}
                  style={styles.buttonRegister}
                >
                  Login
                </Button>
              </View>
            </View>
          </KeyboardAvoidingView>
      }

    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
    backgroundColor: "#090909",
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
  },
  button: {
    marginTop: 10,
    backgroundColor: "#EB8563"
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  Or: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    marginVertical: 10,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ffffff',
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#ffffff',
  },
  registerText: {
    textAlign: "center",
    marginVertical: 10,
    color: "#ffffff"
  },
  Register: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonRegister: {
    marginLeft: -8
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginVertical: 10,
  },
  IconButton: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "gray"
  },
  Terms: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  termsText: {
    marginLeft: 8,
  },
});
