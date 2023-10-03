// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7GgyxNFHuzhZ1iHVKN-6r1lFawqWdKF0",
  authDomain: "dragon-news-website-153e8.firebaseapp.com",
  projectId: "dragon-news-website-153e8",
  storageBucket: "dragon-news-website-153e8.appspot.com",
  messagingSenderId: "380632675315",
  appId: "1:380632675315:web:9567f4e6e63f43eb30d886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;