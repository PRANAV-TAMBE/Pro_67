import firebase from 'firebase';

// add SDK Firebase


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuvzBFFvNIAsU6hoZ0Ydct_AomR_fti3A",
  authDomain: "fork-107c8.firebaseapp.com",
  databaseURL: "https://fork-107c8-default-rtdb.firebaseio.com",
  projectId: "fork-107c8",
  storageBucket: "fork-107c8.appspot.com",
  messagingSenderId: "793202333017",
  appId: "1:793202333017:web:d3a2d1883f8e7b31b7a848"
};




// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();