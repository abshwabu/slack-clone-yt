import {initializeApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBj8TiqeRx1pqcBDPfs7UcVpWEIsU7WVWM",
  authDomain: "slack-clone-yt-8a87d.firebaseapp.com",
  projectId: "slack-clone-yt-8a87d",
  storageBucket: "slack-clone-yt-8a87d.appspot.com",
  messagingSenderId: "322406293535",
  appId: "1:322406293535:web:a7ba8b0206c4adbe5f752a"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const provider = new GoogleAuthProvider();

export{app,db,provider}

