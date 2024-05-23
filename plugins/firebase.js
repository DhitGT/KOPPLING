// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAucxGqNSybM2jYJKykWDTYAm_8M3wbe4k",
  authDomain: "koppling-628fc.firebaseapp.com",
  projectId: "koppling-628fc",
  storageBucket: "koppling-628fc.appspot.com",
  messagingSenderId: "97171364707",
  appId: "1:97171364707:web:d99ec1b8e7c1dc97ad9156",
  measurementId: "G-R3VPSGDE9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { app, analytics, storage };
