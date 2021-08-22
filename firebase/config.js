import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyDp5lpkUY0XS4SPF8Lb9Vmu4KAoYuBl9YM",

    authDomain: "invoice-app-9b388.firebaseapp.com",

    projectId: "invoice-app-9b388",

    storageBucket: "invoice-app-9b388.appspot.com",

    messagingSenderId: "922780802167",

    appId: "1:922780802167:web:585d22c64b05359c107a72"

};

firebase.initializeApp(firebaseConfig);

const projectFireStore = firebase.firestore();

export { projectFireStore }