import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyABkAKhER98lBHt_rMaUnrzV2av-nLLDOA",
  authDomain: "carlz-db.firebaseapp.com",
  databaseURL: "https://carlz-db.firebaseio.com",
  projectId: "carlz-db",
  storageBucket: "carlz-db.appspot.com",
  messagingSenderId: "281187272308",
  appId: "1:281187272308:web:766c35e6411aa9451b7321",
  measurementId: "G-04K56VS4JZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
