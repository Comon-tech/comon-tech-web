import { React, useState }  from 'react';
import {signInWithGitHub, signInWithGoogle, signOutWithGoogle} from '../firebase';


const Login = () => {
  const [authenticated, setAuthenticated] = useState(false);

   // Function to handle Google sign-in
   const handleGoogleSignIn = async () => {
    try {
      signInWithGoogle();
      setAuthenticated(true);
      localStorage.setItem('authenticated', 'true');
    } catch (error) {
      console.error('Error signing in with Google:', error);
      // Handle error as needed
    }
  };

  // Function to handle GitHub sign-in
  // const handleGitHubSignIn = async () => {
  //   try {
  //     await signInWithGitHub();
  //     setAuthenticated(true);
  //   } catch (error) {
  //     console.error('Error signing in with GitHub:', error);
  //     // Handle error as needed
  //   }
  // };

  // Function to handle sign-out
  const handleSignOut = async () => {
    try {
      signOutWithGoogle();
      setAuthenticated(false);
      localStorage.removeItem('authenticated');
    } catch (error) {
      console.error('Error signing out:', error);
      // Handle error as needed
    }
  };

     return (
      <div className="min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <nav className="bg-gradient-to-r from-slate-950 to-fuchsia-900 p-4">
          <div className="container mx-auto">
            <a href="/home" className="text-white font-bold text-xl">ComonTech</a>
          </div>
        </nav>
  
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-slate-950 to-fuchsia-900 text-white">
         
          <div className="mt-5 w-full md:w-1/2 p-3 md:p-6 rounded-3xl bg-indigo-600 bg-opacity-10 flex  flex-col text-center">
            <p className="text-xl font-bold mb-4">Your Awesome Login Page</p>
    

            <button className="bg-white mt-5 text-fuchsia-900 py-2 px-4 rounded-full" onClick={signInWithGoogle}>Sign in with google</button>

{/* <button className="bg-black mt-5 text-white-900 py-2 px-4 rounded-full" onClick={signInWithGitHub} >Sign in with github</button> */}

<button onClick={signOutWithGoogle}>SignOut</button>

          </div>

     
        </div>
  
        {/* Footer */}
        <footer className="bg-gradient-to-r from-slate-950 to-fuchsia-900 p-4">
          <div className="container mx-auto text-center text-white">
            &copy; 2023 Tech Community. All rights reserved.
          </div>
        </footer>
      </div>
    );





};

export default Login;

