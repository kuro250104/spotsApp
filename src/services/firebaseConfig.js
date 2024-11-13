import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AlzaSyCVz5j1xboTxLp254bupgH8EAt95WrGG4c",
  authDomain: "spotapp-d473a.firebaseapp.com",
  projectId: "spotapp-d473a",
  storageBucket: "spotapp-d473a.appspot.com",
  messagingSenderId: "818051536949",
  appId: "1:818051536949:android:b9a88878fb12b09d59b97c"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
