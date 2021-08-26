import firebase from 'firebase/app';
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDqwN6SxtQQPZ8kw8dplsjNYC9yo_Fs7vQ",
    authDomain: "creativakids-9e20e.firebaseapp.com",
    projectId: "creativakids-9e20e",
    storageBucket: "creativakids-9e20e.appspot.com",
    messagingSenderId: "349216668078",
    appId: "1:349216668078:web:9a13535c9bdaf0604db03f"
};

const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore(app)


