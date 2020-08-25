import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: " ",
  authDomain: " ",
  databaseURL: " ",
  projectId: "single-channel-messanger",
  storageBucket: " ",
  messagingSenderId: " ",
  appId: " ",
  measurementId: " "
})
const db = firebaseApp.firestore() ;
export default db
