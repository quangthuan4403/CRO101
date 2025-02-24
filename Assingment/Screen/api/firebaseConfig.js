import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnhg4GkDDP9EdeZ91PAO-AFQuCDSKDZIE",
    authDomain: "apicro101.firebaseapp.com",
    projectId: "apicro101",
    storageBucket: "apicro101.firebasestorage.app",
    messagingSenderId: "480901701002",
    appId: "1:480901701002:web:dc6fa8916433f3c5d3fc73",
    measurementId: "G-PFSYDD946G"
  };

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase app initialized:", app); // ✅ Kiểm tra Firebase có khởi tạo thành công không

const auth = getAuth(app);
console.log("Firebase Auth initialized:", auth); // ✅ Kiểm tra Firebase Auth có hoạt động không

export { auth };
