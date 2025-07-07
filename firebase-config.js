// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCVOYbBGTWtYF3CvpPY09oqQqQvINakBWE",
  authDomain: "appointmentbooking-6baaf.firebaseapp.com",
  projectId: "appointmentbooking-6baaf",
  storageBucket: "appointmentbooking-6baaf.firebasestorage.app",
  messagingSenderId: "711103644250",
  appId: "1:711103644250:web:24c943c05a6e2bd62dce63",
  measurementId: "G-YMQ3TVDR0N"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth,db };

