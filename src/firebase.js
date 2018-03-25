import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDKXUyRzX31zAPJ6c8aBeU17xPgJ5i0gIc",
    authDomain: "goalcoach-c3c05.firebaseapp.com",
    databaseURL: "https://goalcoach-c3c05.firebaseio.com",
    projectId: "goalcoach-c3c05",
    storageBucket: "",
    messagingSenderId: "1091922385987"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');