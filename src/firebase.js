import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCMv0J3v-CxQBmEIP3qBDYPeHIEKyeRzD4",
  authDomain: "netflix-clone-cd67e.firebaseapp.com",
  projectId: "netflix-clone-cd67e",
  storageBucket: "netflix-clone-cd67e.appspot.com",
  messagingSenderId: "178101293042",
  appId: "1:178101293042:web:de9c116ea430939a71e56b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, logout, signup};
