 import * as firebase  from 'firebase/firebase'
 import 'firebase/storage'
 import 'firebase/firestore'
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyBewrmSZ8pIkoy7uL13JSZGvGRAx6g39Xw",
  authDomain: "ramdhan2022-food-distribution.firebaseapp.com",
  projectId: "ramdhan2022-food-distribution",
  storageBucket: "ramdhan2022-food-distribution.appspot.com",
  messagingSenderId: "438098620154",
  appId: "1:438098620154:web:c1e58d32281a8f849e2343"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage=firebase.storage();
  const projectFireStore=firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export   {projectStorage,projectFireStore,timestamp}