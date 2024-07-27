import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  addDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";
const firebaseConfig = {
  apiKey: "AIzaSyB0KuOTqtTH1r1OKDdV95avYgyJZSLK8Y0",
  authDomain: "blog-project-90fba.firebaseapp.com",
  projectId: "blog-project-90fba",
  storageBucket: "blog-project-90fba.appspot.com",
  messagingSenderId: "711261471384",
  appId: "1:711261471384:web:079df45d64851b455d06ed",
  measurementId: "G-W9VF6F7R9W",
  // apiKey: "AIzaSyAr2R1sryYvVbSNdplyeKYrIHHZ6D0uZyc",
  // authDomain: "calcium-pod-256305.firebaseapp.com",
  // projectId: "calcium-pod-256305",
  // storageBucket: "calcium-pod-256305.appspot.com",
  // messagingSenderId: "182256618793",
  // appId: "1:182256618793:web:c3c627824b1c28feea3b38",
  // measurementId: "G-3R2S7KYERZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const analytics = getAnalytics(app);

export {
  auth,
  db,
  storage,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  setDoc,
  ref,
  uploadBytes,
  getDownloadURL,
  signOut,
  getDoc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
  deleteDoc,
};
