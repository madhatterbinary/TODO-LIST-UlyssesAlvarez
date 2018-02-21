import firebase from 'firebase';

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

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
      name:'My Task-Manager',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Ulysses',
      age: 25
    }
   });




   var tasks = firebaseRef.child('tasks');

   tasks.on('child_added', (snapshot) => {
   console.log('child_added', snapshot.key, snapshot.val())
 });
 var newNoteRef = tasks.push({
  text: 'Walk the tiger!'
});
var anotherNoteRef = tasks.push({
  text: 'Walk the lion!'
});
  

//  notesRef.on('child_added', (snapshot) => {
//    console.log('child_added', snapshot.key, snapshot.val())
//  });
//  notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val())
// });
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val())
// })
  // var newNoteRef = notesRef.push({
  //   text: 'Walk the dog!'
  // });
  // var changeUserName = (snapshot) => {
  //   console.log('changeUserName value: ', snapshot.val());
  // }
  // firebaseRef.child('user').on('value',changeUserName);

  // firebaseRef.update({
  //   'user/name': 'Odysseus'
  // })
  // firebaseRef.update({
  //   'app/name': 'AMAZING APP'
  // })

  // firebaseRef.on('value', (snapshot) => {
  //   console.log('Got value: ', snapshot.val());
  // });

  // firebaseRef.off();

  // var logData = (snapshot) => {
  //   console.log('Got value: ', snapshot.val());
  // }
  // firebaseRef.on('value', logData);

  // firebaseRef.off(logData);

  firebaseRef.update({isRunning: false});
  //  firebaseRef.child('app').once('value').then((snapshot) => {
  //   console.log('got the entire database',snapshot.key, snapshot.val());
  //  }, (e) => {
  //   console.log('enable to fetch data',e);
  //  })
  //  firebaseRef.once('value').then((snapshot) => {
  //   console.log('got the entire database',snapshot.val());
  //  }, (e) => {
  //   console.log('enable to fetch data',e);
  //  })
  //  firebaseRef.child('user/age').remove();
  //  firebaseRef.update({
  //    isRunning: null
  //  })
  //  firebaseRef.child('isRunning').remove();
  //  firebaseRef.child('user').update({
  //    age: null
  //  })
  //  firebaseRef.child('user').update({
  //    name: null
  //  })
  //  firebaseRef.child('app/name').remove()
  //  firebaseRef.child('app').update({
  //    name: 'the app name'
  //  })
  //  firebaseRef.child('user').update({
  //   name: 'the user name'
  // })
  //  firebaseRef.update({
  //   'user/name': 'my new user name',
  //   'app/name': 'multipath update'
  // })
   //.then(()=> {
  //   console.log('Set worked!')
  // }, (e) => {
  //   console.log('Set failed!')
  // })
  // firebaseRef.child('user').set({
  //   name:'Robert'
  // })
  // firebaseRef.child('app').set({
  //   name:'Task-Manager'
  // })
  // firebaseRef.update({
  //   isRunning: false,
  //   'app/name': 'Tasks Application'
  // });
  // firebaseRef.child('app').update({
  //   name: 'Tasks Application 2'
  // }).then(()=> {
  //     console.log('update worked!')
  //    }, (e) => {
  //     console.log('update failed!')
  //    })
