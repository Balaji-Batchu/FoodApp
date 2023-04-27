import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCDxgfHklOJOmbUmyOYMDXihh-ZHkk6VJ8",
  authDomain: "react-food-project-a8ed8.firebaseapp.com",
  databaseURL: "https://react-food-project-a8ed8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-food-project-a8ed8",
  storageBucket: "react-food-project-a8ed8.appspot.com",
  messagingSenderId: "393777867320",
  appId: "1:393777867320:web:0167c74006dc9f3f4814cd",
  measurementId: "G-5YZ4W2EZQX"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getFirestore(app)  

export {app,storage, firestore}