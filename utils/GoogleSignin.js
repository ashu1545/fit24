import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId: '114713409689-t7oarggb04jgcqm0l831roqje89o8a1e.apps.googleusercontent.com',
});

// Function to sign in with Google
export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const { idToken } = await GoogleSignin.signIn();
    if (!idToken) {
      throw new Error('Google Sign-In failed: no idToken found');
    }
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
