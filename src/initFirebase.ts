import { initializeApp } from "firebase/app";
import {
	connectFirestoreEmulator,
	doc,
	getFirestore,
} from "firebase/firestore";

const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSEGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(config);
const firestore = getFirestore(firebaseApp);
connectFirestoreEmulator(firestore, "localhost", 8080);

export const docRef = doc(firestore, "collection/document/sub/doc1");
