import { initializeApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB6Fc8xv-_DCEc-4C33-bXCnOl-pNa6Qd4',
  authDomain: 'wedding-invitation-nuril-daffa.firebaseapp.com',
  projectId: 'wedding-invitation-nuril-daffa',
  storageBucket: 'wedding-invitation-nuril-daffa.firebasestorage.app',
  messagingSenderId: '697009348736',
  appId: '1:697009348736:web:0e47792236b1db92b1c665'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db: Firestore = getFirestore(app)
