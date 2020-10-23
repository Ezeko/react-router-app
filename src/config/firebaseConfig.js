import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDHhWHX6kDaRVfy_eJZfaf-FFqScJAmXGw",
    authDomain: "fir-redux-project-6c1e0.firebaseapp.com",
    databaseURL: "https://fir-redux-project-6c1e0.firebaseio.com",
    projectId: "fir-redux-project-6c1e0",
    storageBucket: "fir-redux-project-6c1e0.appspot.com",
    messagingSenderId: "164881832446",
    appId: "1:164881832446:web:8ff98e0207581de9e5c8af",
    measurementId: "G-XC61BM008K"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({});


  export default firebase;