 // Your web app's Firebase configuration
 import firebase from 'firebase/app'
 import 'firebase/firestore';
 var firebaseConfig = {
    apiKey: "AIzaSyCvU0zwH3DNItOte36Tc_hM214aANrxR_8",
    authDomain: "fb-crud-react-e0ac2.firebaseapp.com",
    projectId: "fb-crud-react-e0ac2",
    storageBucket: "fb-crud-react-e0ac2.appspot.com",
    messagingSenderId: "287270062883",
    appId: "1:287270062883:web:7ab32bc93ba3802cbe1a96"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();