import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBdd2WGtAPj3COaEFyDXwBaOIcHcFMl1RI",
  authDomain: "inotebook-71a17.firebaseapp.com",
  projectId: "inotebook-71a17",
  storageBucket: "inotebook-71a17.appspot.com",
  messagingSenderId: "64158830136",
  appId: "1:64158830136:web:a1b2dd62348544e67960cd",
  measurementId: "G-0B8TEVK1VM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const provider = new FacebookAuthProvider();
provider.addScope('email'); // 👈 This line is important


export { auth, googleProvider, provider };
