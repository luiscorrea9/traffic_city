// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1tot2lf5HuPB2_SzuEKX6JRBwijFUC_c",
  authDomain: "traffic-city.firebaseapp.com",
  projectId: "traffic-city",
  storageBucket: "traffic-city.appspot.com",
  messagingSenderId: "418070790933",
  appId: "1:418070790933:web:49f6a008e0b14b31a45f1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
