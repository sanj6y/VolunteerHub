import {initializeApp} from "firebase/app"; 
import {
    GoogleAuthProvider,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
  } from 'firebase/auth';
  
  import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTu06Adt-PZrX4poqlD3bJ2B9uCyF9qJ0",
  authDomain: "volunteerhub-ebfa0.firebaseapp.com",
  projectId: "volunteerhub-ebfa0",
  storageBucket: "volunteerhub-ebfa0.appspot.com",
  messagingSenderId: "365392924794",
  appId: "1:365392924794:web:f9ee3b1864e027bdd92bc3",
  measurementId: "G-RJPLCZL91P"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert('Invalid Email or Password');
  }
};

const register = async (name: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    alert(
      'Make sure all fields are filled in correctly/This email is already in use'
    );
  }
};

const forgotPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent! Check spam if you don't see it");
  } catch (err) {
    alert('Invalid Email');
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, register, forgotPassword, logout };