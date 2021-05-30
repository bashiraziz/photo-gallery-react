 import * as firebase  from 'firebase/firebase'
 import 'firebase/storage'
 import 'firebase/firestore'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCNkX-Flgcxbx4HtuBA90r4ze8KEYonDA4",
    authDomain: "ninja-firegram-b6ae6.firebaseapp.com",
    projectId: "ninja-firegram-b6ae6",
    storageBucket: "ninja-firegram-b6ae6.appspot.com",
    messagingSenderId: "774808631534",
    appId: "1:774808631534:web:69ae3f2de77261e5465bff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage=firebase.storage();
  const projectFireStore=firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export   {projectStorage,projectFireStore,timestamp}