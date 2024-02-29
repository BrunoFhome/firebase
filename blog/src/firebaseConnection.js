// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6tOMyQ3GHfhKGiuFoJqZW81upGtbkQME",
  authDomain: "exemplo1-e4942.firebaseapp.com",
  projectId: "exemplo1-e4942",
  storageBucket: "exemplo1-e4942.appspot.com",
  messagingSenderId: "150541202632",
  appId: "1:150541202632:web:3fb71923d3a9e85afa21fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};