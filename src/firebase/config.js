import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC0psbA_zp7eLuvE1-VQzJwSB-Sm1lPfHM",
    authDomain: "cooking-site-7de24.firebaseapp.com",
    projectId: "cooking-site-7de24",
    storageBucket: "cooking-site-7de24.appspot.com",
    messagingSenderId: "788696056216",
    appId: "1:788696056216:web:da970d07daa18d27a7ebed"
  }

//   init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore= firebase.firestore()

export { projectFirestore }