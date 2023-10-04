import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEFYT7dUHrDBbIyPxmqezYzzlhV49WokA",
  authDomain: "disney-plus-cbe56.firebaseapp.com",
  projectId: "disney-plus-cbe56",
  storageBucket: "disney-plus-cbe56.appspot.com",
  messagingSenderId: "640166483034",
  appId: "1:640166483034:web:f6bb33f81635bcecb1f463",
  measurementId: "G-WXFXQYQY2H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage =getStorage(firebaseApp);
export { auth, provider, storage };
export default db;