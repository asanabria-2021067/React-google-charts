// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_mfm5ty3C6Qfm2JNtNESdmbiZxsBygxU",
  authDomain: "agenda-dee71.firebaseapp.com",
  projectId: "agenda-dee71",
  storageBucket: "agenda-dee71.appspot.com",
  messagingSenderId: "507391185958",
  appId: "1:507391185958:web:beb3e640db7275177742e7",
  measurementId: "G-V20GLKH22P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app); // exportamos la base de datos de firebase