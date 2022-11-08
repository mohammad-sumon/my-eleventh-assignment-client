// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9EkCGoKT5jFnpZr8IWBz5TRu2REqXQ9w",
  authDomain: "sam-kitchen-client.firebaseapp.com",
  projectId: "sam-kitchen-client",
  storageBucket: "sam-kitchen-client.appspot.com",
  messagingSenderId: "1091760394953",
  appId: "1:1091760394953:web:ecd85c08b0d844eedef318"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;