// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_GFFDEWS8S9gDrBe0F7xI26iWwKU0aZU",
  authDomain: "collage-verse.firebaseapp.com",
  projectId: "collage-verse",
  storageBucket: "collage-verse.appspot.com",
  messagingSenderId: "161164974593",
  appId: "1:161164974593:web:02a32c8950fa22ae997e00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app