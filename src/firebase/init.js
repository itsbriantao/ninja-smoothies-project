import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCSBo8aJgqZkUZgDL0EbAHa6QXchbrOPo8",
  authDomain: "udemy-ninja-smoothies-7fde5.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-7fde5.firebaseio.com",
  projectId: "udemy-ninja-smoothies-7fde5",
  storageBucket: "udemy-ninja-smoothies-7fde5.appspot.com",
  messagingSenderId: "426718009463",
  appId: "1:426718009463:web:ceb08a494cf7e0197f8e72",
  measurementId: "G-P02XFDVRB4"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true});
firebase.analytics();

// export firestore database
export default firebaseApp.firestore();
