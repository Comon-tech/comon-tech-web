import React from 'react';
import {signInWithGitHub, signInWithGoogle, signOutWithGoogle} from '../firebase';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Login = () => {
  return (
    <div>
	  <h1>Your React Website Login</h1>
	  
	  <div 
		style={customStyles}
      >
	  <div className='bg-red border border-2'>
	  <button onClick={signInWithGoogle} >Sign in with google</button>
	  </div>
    </div>

<div className='bg-red border border-2'>
	  <button onClick={signInWithGitHub} >Sign in with github</button>
	  </div>

	  <button onClick={signOutWithGoogle} >SignOut</button>
    </div>

	   );
};

export default Login;

