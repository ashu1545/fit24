import React, { useState , useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { TextInput, Button, Text, IconButton } from 'react-native-paper';
import { AppContext } from '../../context_api/AppContext';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const {loginStatus, setLoginStatus} = useContext(AppContext)



  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleLogin = () => {
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email');
      return;
    } else {
      setEmailError('');
    }
    if (!password.trim()) {
      setPasswordError('Password is required');
      return;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    } else {
      setPasswordError('');
    }
    
    if(email === "ashutosh1545@gmail.com" && password === "password@123"){
        navigation.navigate('LoginFirstScreen');
    }
    else{
      setPasswordError('Wrong Password');
      setEmailError('Wrong Email');
    }
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.toptext}>
          <Text style={styles.topText1}>Hey there,</Text>
          <Text style={styles.topText2}>Welcome Back</Text>
        </View>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          error={!!emailError}
          left={<TextInput.Icon icon="email" />}
        />
        {!!emailError && <Text style={styles.error}>{emailError}</Text>}

        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          error={!!passwordError}
          secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
          left={<TextInput.Icon icon="lock" />}
          right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(!showPassword)} />} // Toggle icon based on showPassword state
        />
        {!!passwordError && <Text style={styles.error}>{passwordError}</Text>}
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <Button
            icon="login"
            mode="contained"
            onPress={handleLogin}
            style={styles.button}
          >
            Login
          </Button>

        </TouchableOpacity>

        <View style={styles.Or}>
          <Text style={styles.separatorLine}>________________________</Text>
          <Text style={styles.separatorText}>Or</Text>
          <Text style={styles.separatorLine}>________________________</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.IconButton}>
            <IconButton
              icon="google"
              iconColor="blue"
              size={40}
              onPress={() => console.log('Pressed')}
            />

          </View>
          <View style={styles.IconButton}>
            <IconButton
              icon="facebook"
              iconColor="blue"
              size={40}
              onPress={() => console.log('Pressed')}
            />

          </View>


        </View>
        <View style={styles.Register}>
          <Text style={styles.registerText}>Don't have an account yet?</Text>

          <Button
            onPress={() => navigation.navigate('SignUpScreen')}
            style={styles.buttonRegister}
          >
            Register
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // marginTop: 150,
    paddingHorizontal: 20,
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
    flex: 1,
    justifyContent: "flex-end",
    width: '100%',
    marginBottom: 10

  },
  form: {
    position: "absolute",
    top: 100,
    width: '100%',
    gap: 5,

  },
  button: {
    marginTop: 10,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  Or: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    color: "gray",
    gap: 25,
    marginVertical: 10,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  separatorText: {
    //marginHorizontal: 10, // Adjust the horizontal spacing between text and lines
    color: 'gray',
  },
  registerText: {
    textAlign: "center",
    marginVertical: 10,
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
    gap: 5
  },
  IconButton: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "gray"
  }

});
