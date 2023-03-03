import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBoAa4EdlVNt8VjPr6dW2hNptBJbBfhPL4",
	authDomain: "react-eshop-4e99c.firebaseapp.com",
	projectId: "react-eshop-4e99c",
	storageBucket: "react-eshop-4e99c.appspot.com",
	messagingSenderId: "1025485466506",
	appId: "1:1025485466506:web:81d66449dbd298a0b3b673",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fStore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export { auth, provider, fStore };
