// Your web app's Firebase configuration

var firebaseConfig = {

    apiKey: "AIzaSyDp5lpkUY0XS4SPF8Lb9Vmu4KAoYuBl9YM",

    authDomain: "invoice-app-9b388.firebaseapp.com",

    projectId: "invoice-app-9b388",

    storageBucket: "invoice-app-9b388.appspot.com",

    messagingSenderId: "922780802167",

    appId: "1:922780802167:web:585d22c64b05359c107a72"

};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);


let signUpUsername = document.getElementById('signUpUsername');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let img = document.getElementById('img');

let file = {};

function chooseFile(e) {
    file = e.target.files[0];
}

function signUpBtnPressed() {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then(auth => {
            firebase.storage().ref('users/' + auth.user.uid + '/profile.jpg').put(file).then(function () {
                console.log('successfully uploaded');
            }).catch(error => {
                console.log(error.message);
            })


        }).catch(error => {
            console.log(error.message);
        })
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        firebase.storage().ref('users/' + user.uid + '/profile.jpg').getDownloadURL().then(imgUrl => {
            img.src = imgUrl;
        });
    }
})