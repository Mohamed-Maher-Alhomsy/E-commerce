import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdMtMDFL1AI56vsR_fWRiFRyzvXBb2niM",
  authDomain: "e-commerce-772ff.firebaseapp.com",
  projectId: "e-commerce-772ff",
  storageBucket: "e-commerce-772ff.appspot.com",
  messagingSenderId: "966566474918",
  appId: "1:966566474918:web:b7095eb4d4b7d3e8607067",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
