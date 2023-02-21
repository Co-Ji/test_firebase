importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");

const config = {
  apiKey: "AIzaSyCtx-Nd3f_BQrDPId8NN0qfBZI6joYSNr4",
  authDomain: "testfcm-800d6.firebaseapp.com",
  databaseURL:
    "https://testfcm-800d6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "testfcm-800d6",
  storageBucket: "testfcm-800d6.appspot.com",
  messagingSenderId: "321079860044",
  appId: "1:321079860044:web:fef47c6949e5b0827c0de9",
  measurementId: "G-YJNFD19SVL",
};

// Initialize Firebase
firebase.initializeApp(config);
