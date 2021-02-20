import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC1nz22YtfHdLAZOs1vLEArbiFfaO45CNE",
    authDomain: "bj-s-comf.firebaseapp.com",
    projectId: "bj-s-comf",
    storageBucket: "bj-s-comf.appspot.com",
    messagingSenderId: "159747435158",
    appId: "1:159747435158:web:00d62a0b6b10bb4a2e70b7",
    measurementId: "G-4YHZCV9F95"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;