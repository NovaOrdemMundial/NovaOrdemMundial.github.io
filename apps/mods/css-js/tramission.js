const firebaseConfig = {
  apiKey: "AIzaSyDdOKtJq-s7ZeAFL3hw1XOU6wUmdlZpE9c",
  authDomain: "modpacklist.firebaseapp.com",
  projectId: "modpacklist",
  storageBucket: "modpacklist.appspot.com",
  messagingSenderId: "367199827849",
  appId: "1:367199827849:web:0037d2acd710805c1d1358",
  measurementId: "G-THWMHCT57E"
};
firebase.initializeApp(firebaseConfig);
const bankOf = firebase.firestore();