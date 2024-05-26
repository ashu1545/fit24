import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, SafeAreaView, Platform, StatusBar, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import { TextInput, Button, Text, IconButton, Checkbox } from 'react-native-paper';


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

  const GoogleIcon = require("../../../assets/googleicon.png");

  const FaceBookIcon = require("../../../assets/facebook 1.png");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSignUp = async () => {
    let validationError = '';
    switch (true) {
      case !firstName.trim():
        validationError = 'First Name is required';
        setFirstNameError(validationError);
        return;
      case !lastName.trim():
        validationError = 'Last Name is required';
        setLastNameError(validationError);
        return;
      case !email.trim():
        validationError = 'Email is required';
        setEmailError(validationError);
        return;
      case !validateEmail(email):
        validationError = 'Invalid email';
        setEmailError(validationError);
        return;
      case !password.trim():
        validationError = 'Password is required';
        setPasswordError(validationError);
        return;
      case password.length < 6:
        validationError = 'Password must be at least 6 characters long';
        setPasswordError(validationError);
        return;
      case !termsChecked:
        validationError = 'Please agree to terms and conditions';
        console.log(validationError);
        return;
      default:

        navigation.navigate('SignUpSetup');
        break;
    }

    console.log("data");

  };


  return (
    <>
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
            <TextInput
              mode="outlined"
              label="Last Name"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              error={!!lastNameError}
              left={<TextInput.Icon icon="account-circle" color="#EB8563" />}
            />
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
              secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
              left={<TextInput.Icon icon="lock" color="#EB8563" />}
              right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(!showPassword)} color="#EB8563" />} // Toggle icon based on showPassword state
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
            <Text style={styles.registerText}>Don't have an account yet?</Text>

            <Button
              onPress={() => navigation.navigate('LoginScreen')}
              style={styles.buttonRegister}
            >
              Login
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
    backgroundColor: "#090909",
    width: "100%"
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    //paddingBottom: 50, // Adjust as necessary
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
    //alignItems: 'center',
    paddingBottom: 20,
  },
  form: {
    width: '100%',
    //maxWidth: 400, // Adjust as necessary
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
