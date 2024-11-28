const firebase = require("firebase/app");
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyCNiEf_rzzF06xpT62d4ZwZce7hgitWKpc",
  authDomain: "hope-of-israel4805.firebaseapp.com",
  projectId: "hope-of-israel4805",
  storageBucket: "hope-of-israel4805.firebasestorage.app",
  messagingSenderId: "106575323278",
  appId: "1:106575323278:web:f4816e79965f12b80829df",
  measurementId: "G-6CKP7TG92X"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized
}

module.exports = firebase;
