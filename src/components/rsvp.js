// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBy0hcB_NxD7vCDFslxDDq_19b8wNEsxCQ",
    authDomain: "wedding-site-7d128.firebaseapp.com",
    projectId: "wedding-site-7d128",
    storageBucket: "wedding-site-7d128.appspot.com",
    messagingSenderId: "446321917636",
    appId: "1:446321917636:web:d01f09b1f711365ff91391",
    measurementId: "G-KFXW5NV2HK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var db = getFirestore(app);


addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
}).then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
}).catch((e) => {
console.error("Error adding document: ", e);
})




function RSVP() {
  return <h1>RSVP</h1>;
}

export default RSVP;
