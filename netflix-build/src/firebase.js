import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'; // Import the Firestore module
import { getAuth } from 'firebase/auth'; // Import the Authentication module

const firebaseConfig = {
    apiKey: "AIzaSyCuU4Eu7aAKetZm-k_Sk3VvwMkTf8DbNkQ",
    authDomain: "netflix-clone-6d512.firebaseapp.com",
    projectId: "netflix-clone-6d512",
    storageBucket: "netflix-clone-6d512.appspot.com",
    messagingSenderId: "154191547745",
    appId: "1:154191547745:web:884a741c537ddd39d9c920"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get Firestore and Auth instances
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;