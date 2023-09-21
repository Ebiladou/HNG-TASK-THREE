// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDA2ByfkOfmI3xtVfdMCVT8gL6h61DSdiM",
  authDomain: "gallery-d36ae.firebaseapp.com",
  projectId: "gallery-d36ae",
  storageBucket: "gallery-d36ae.appspot.com",
  messagingSenderId: "177619850915",
  appId: "1:177619850915:web:d1b2b32728d206eedf5116",
  measurementId: "G-RPQR73NMFM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);