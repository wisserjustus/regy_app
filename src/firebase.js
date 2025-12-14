import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "PASTE_REAL_VALUE",
  authDomain: "PASTE_REAL_VALUE",
  projectId: "PASTE_REAL_VALUE",
  storageBucket: "PASTE_REAL_VALUE",
  messagingSenderId: "PASTE_REAL_VALUE",
  appId: "PASTE_REAL_VALUE"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
