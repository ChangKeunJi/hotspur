import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCpfPvInrmsR2wUm2copSnpXTGg2GvgZTM",
  authDomain: "spurs-e46d1.firebaseapp.com",
  databaseURL: "https://spurs-e46d1.firebaseio.com",
  projectId: "spurs-e46d1",
  storageBucket: "spurs-e46d1.appspot.com",
  messagingSenderId: "168145640242",
  appId: "1:168145640242:web:d5bb0d29a610876fa6152b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export const storage = firebase.storage();
export default firebase;
