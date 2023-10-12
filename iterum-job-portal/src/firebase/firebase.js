// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuEq4Unt215Lqrlm6UhkssuL2GUZNhAAQ",
  authDomain: "techjobportal-d94c3.firebaseapp.com",
  databaseURL: "https://techjobportal-d94c3-default-rtdb.firebaseio.com",
  projectId: "techjobportal-d94c3",
  storageBucket: "techjobportal-d94c3.appspot.com",
  messagingSenderId: "846952886028",
  appId: "1:846952886028:web:701a63fc2051460330e329",
  measurementId: "G-SFQ1LNRSCB" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Firebase Auth, GoogleAuthProvider

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    return user;
  } catch (error) {
    // Handle Errors here.
    console.error("Failed to log in", error);
    throw error;
  }
};

export { auth, provider, app, analytics, signInWithGoogle };

