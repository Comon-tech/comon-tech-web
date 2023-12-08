// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signOut, GoogleAuthProvider,GithubAuthProvider, signInWithPopup} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5v84Jo5FjLNfkqQSlQMbHK4AakdY2-zQ",
  authDomain: "comon-tech.firebaseapp.com",
  databaseURL: "https://comon-tech-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "comon-tech",
  storageBucket: "comon-tech.appspot.com",
  messagingSenderId: "559281763322",
  appId: "1:559281763322:web:d994671dc8a0edb7fdaa43"
};
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signInWithGoogle = () => {

signInWithPopup(auth, googleProvider)
  .then((result) => {
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
	console.log("result>>>>", result)
	  const name = result.user.displayName
	  const email = result.user.email
	  const profilePic = result.user.photoURL

	  localStorage.setItem("Name", name);
	  localStorage.setItem("Email", email);
	  localStorage.setItem("ProfilePic", profilePic)
  }).catch((error) => {
  console.log(error)
  });
}
//signInWithGitHub
export const signInWithGitHub = () => {

signInWithPopup(auth, githubProvider)
  .then((result) => {
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
	console.log("result>>>>", result)
	  const name = result.user.displayName
	  const email = result.user.email
	  const profilePic = result.user.photoURL

	  localStorage.setItem("Name", name);
	  localStorage.setItem("Email", email);
	  localStorage.setItem("ProfilePic", profilePic)
  }).catch((error) => {
  console.log(error)
  });
}
//signOut
export const signOutWithGoogle = () =>{
signOut(auth).then(() => {
  // Sign-out successful.
console.log("SignOut successful")
	localStorage.clear()
}).catch((error) => {
  // An error happened.
});

}
