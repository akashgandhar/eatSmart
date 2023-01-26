import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWaRvbaNWxiI9_cEFJ2F2hXszicGMGei4",
  authDomain: "eat-smartz.firebaseapp.com",
  projectId: "eat-smartz",
  storageBucket: "eat-smartz.appspot.com",
  messagingSenderId: "716376989497",
  appId: "1:716376989497:web:1b64e55ef9c1c257ee92e8",
};

function createFirebaseApp() {
  try {
    return getApp();
  } catch {
    return initializeApp(firebaseConfig);
  }
}

export const app = createFirebaseApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
