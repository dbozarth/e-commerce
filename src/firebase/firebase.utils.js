import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCo-omMDTO5SPU51bUOzwI4jbp4VCU2Clg",
    authDomain: "crwn-db-54953.firebaseapp.com",
    projectId: "crwn-db-54953",
    storageBucket: "crwn-db-54953.appspot.com",
    messagingSenderId: "1034127228149",
    appId: "1:1034127228149:web:b125a7b6929c734a2c99bc",
    measurementId: "G-222NCWJ85C"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;