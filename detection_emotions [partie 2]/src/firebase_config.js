// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVcJ4cD8Zxdcug4eK2VGB8FFwACstYZxE",
  authDomain: "emotion-data-81916.firebaseapp.com",
  projectId: "emotion-data-81916",
  storageBucket: "emotion-data-81916.appspot.com",
  messagingSenderId: "1073751947236",
  appId: "1:1073751947236:web:e6742a8f8575fc0393b9f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init services
const db = getFirestore(app);

// collect ref
const colRef = collection(db, 'emotions')

//get collection data
getDocs(colRef)
    .then((snapshot) => {
        
        let emotions = []
        snapshot.docs.forEach((doc) => {
            emotions.push({ ...doc.data(), id: doc.id })
        })
        console.log(emotions)
    })
    .catch(err => {
        console.log(err.message)
    })