import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB9S2CRrh8SQfng1Q4nPTLxNjMYBI25huk",
  authDomain: "single-channel-messanger.firebaseapp.com",
  databaseURL: "https://single-channel-messanger.firebaseio.com",
  projectId: "single-channel-messanger",
  storageBucket: "single-channel-messanger.appspot.com",
  messagingSenderId: "879202967217",
  appId: "1:879202967217:web:f57bf2a99836437df18c90",
  measurementId: "G-W69W38X1H0"
})
const db = firebaseApp.firestore() ;
export default db
