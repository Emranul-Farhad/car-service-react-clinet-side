// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCckVmhAg3I9CsoUdALdiUszXTlXl_mmDw",
    authDomain: "care-repair-site.firebaseapp.com",
    projectId: "care-repair-site",
    storageBucket: "care-repair-site.appspot.com",
    messagingSenderId: "626270499570",
    appId: "1:626270499570:web:8711dd0a449f9def1e566b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth