import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAmq6tHRsI45ql4HhXWKtAp-N_kNlS0jKU",
    authDomain: "burguer-queen-e2130.firebaseapp.com",
    databaseURL: "https://burguer-queen-e2130.firebaseio.com",
    projectId: "burguer-queen-e2130",
    storageBucket: "burguer-queen-e2130.appspot.com",
    messagingSenderId: "337002406110",
    appId: "1:337002406110:web:0b403febf1189be6"
  });

  const db = firebaseApp.firestore();
  export{ db };