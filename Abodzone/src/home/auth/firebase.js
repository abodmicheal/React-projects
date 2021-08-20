import firebase from 'firebase'; 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuPLmtjCe-QDbVjZPnxk6-k6LwKcUXdDg",
  authDomain: "abod-zone.firebaseapp.com",
  projectId: "abod-zone",
  storageBucket: "abod-zone.appspot.com",
  messagingSenderId: "1028094695860",
  appId: "1:1028094695860:web:9b52cd6eca7559cd027ae1",
  measurementId: "G-SPCF50QV6R"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
