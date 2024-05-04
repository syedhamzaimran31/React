import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC_56_LUWHJWG_WsJ0_5tzM2-pkkZsno9c",
  authDomain: "employee-547e7.firebaseapp.com",
  projectId: "employee-547e7",
  storageBucket: "employee-547e7.appspot.com",
  messagingSenderId: "482600217224",
  appId: "1:482600217224:web:5b296351c95024ae4ccd3d",
  measurementId: "G-0PG94ZTG4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export default database;