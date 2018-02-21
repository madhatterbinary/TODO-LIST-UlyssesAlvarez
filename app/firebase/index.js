import firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC-MBEsfXjD9b8XJ-wgaPU13rsVpUOD7C0",
      authDomain: "task-manager-ulysses-alvarez.firebaseapp.com",
      databaseURL: "https://task-manager-ulysses-alvarez.firebaseio.com",
      projectId: "task-manager-ulysses-alvarez",
      storageBucket: "task-manager-ulysses-alvarez.appspot.com",
      messagingSenderId: "50678952061"
    };
    firebase.initializeApp(config);
} catch (e) {
  
}

export var firebaseRef = firebase.database().ref();
export default firebase;
