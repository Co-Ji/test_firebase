import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { useEffect } from "react";

const App = () => {
  const firebaseConfig = {
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
  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);

  useEffect(() => {
    getToken(messaging, {
      vapidKey:
        "BNgRmMxf985eKvBvQsjxE0HMfgGHxvbB1qFBN3mtrkybjgQM-bsZEB7xGvq4vVC7wJOJ6tlxXwrbfE_kKHuiUIk",
    })
      .then((currentToken) => {
        console.log("success ::", currentToken);
      })
      .catch((error) => {
        console.log("fail ::", error);
      });
  }, []);

  return (
    <div className="App">
      <div></div>
    </div>
  );
};

export default App;
