import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnhg4GkDDP9EdeZ91PAO-AFQuCDSKDZIE",
  authDomain: "apicro101.firebaseapp.com",
  projectId: "apicro101",
  storageBucket: "apicro101.firebasestorage.app",
  messagingSenderId: "480901701002",
  appId: "1:480901701002:web:dc6fa8916433f3c5d3fc73",
  measurementId: "G-PFSYDD946G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication with AsyncStorage persistence
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (error) {
  console.log("Auth already initialized or error:", error);
  auth = getAuth(app);
}

// Initialize Cloud Firestore
const db = getFirestore(app);

// Kiểm tra kết nối Firestore
console.log("🔥 Firestore initialized:", db ? "Success" : "Failed");

export { app, auth, db };