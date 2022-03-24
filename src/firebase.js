import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQsHQQiuhgGvpGyv0PnJmxE9stiIoG0lU",
  authDomain: "tiktok-23df2.firebaseapp.com",
  databaseURL: "https://tiktok-23df2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tiktok-23df2",
  storageBucket: "tiktok-23df2.appspot.com",
  messagingSenderId: "364548279396",
  appId: "1:364548279396:web:1ee9f82729b44127b7a371"
  };
// Initialize Firebase
const app=  firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export default db;