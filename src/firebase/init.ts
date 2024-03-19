import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBHw2-zkBwRNZZ63XOr0enMXh5KdSyDQRg",
    authDomain: "my-first-gor.firebaseapp.com",
    projectId: "my-first-gor",
    storageBucket: "my-first-gor.appspot.com",
    messagingSenderId: "771800056599",
    appId: "1:771800056599:web:601b8668421f8cc39c6d52"
  };

let app:FirebaseApp;

if (getApps().length==0){
    app=initializeApp(firebaseConfig);
}else {
    app = getApp();
}

export { app }