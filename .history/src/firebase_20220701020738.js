import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA36UeaAy7aJ-fsDoJMMd2OHopxe9lr0ew",
  authDomain: "reactprojects-12bbe.firebaseapp.com",
  projectId: "reactprojects-12bbe",
  storageBucket: "reactprojects-12bbe.appspot.com",
  messagingSenderId: "742066518833",
  appId: "1:742066518833:web:e710f55d1e21fa3a9d4e10",
  measurementId: "G-90J34QXW54"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage =getStorage(firebaseApp);
export { auth, provider, storage };
export default db;