import firebase from 'firebase/app';
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZ0AFdT4zq6VNHCg05ShcD5PqLDA9BuW8",
    authDomain: "booking-3e8e0.firebaseapp.com",
    projectId: "booking-3e8e0",
    storageBucket: "booking-3e8e0.appspot.com",
    messagingSenderId: "1034197036867",
    appId: "1:1034197036867:web:896632d9fac7976f5dc9f6"
  };
  
  // Initialize Firebase

  if(!firebase.apps.length){
      const app = initializeApp(firebaseConfig);
      }

      export default firebase;