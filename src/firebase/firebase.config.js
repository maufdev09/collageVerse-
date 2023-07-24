// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkknRQE75XCr5WDU1ll1mQVUnhTq5eBg8",
  authDomain: "collage-v.firebaseapp.com",
  projectId: "collage-v",
  storageBucket: "collage-v.appspot.com",
  messagingSenderId: "388790342223",
  appId: "1:388790342223:web:547fc7b424736d3ee6103a"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export default app;