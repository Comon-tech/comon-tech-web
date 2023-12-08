
// import React, {useState} from 'react';

import React, { useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';

const GithubAuthButton = () => {
  useEffect(() => {
    // Check if the URL contains an access token after GitHub redirects the user
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');

    if (accessToken) {
      // You have the access token, you can now use it for API requests or store it as needed
      console.log('Access Token:', accessToken);
      // Optionally, you can redirect the user to another page or perform additional actions
      window.location.href = '/web';
    }
  }, []);


	const getUserDetails = async (accessToken) => {
  const response = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.ok) {
    const userData = await response.json();
    return userData;
  } else {
    // Handle error
    console.error('Failed to fetch user details:', response.statusText);
    return null;
  }
};




  return (
    <div className="flex flex-row bg-black gap-3 text-white p-4 border-[grey] border-2 rounded-2xl">
      <AiFillGithub size={23} />
      <a href="https://github.com/login/oauth/authorize?scope=user&client_id=bd675e28f2391ed38be5&redirect_uri=http://localhost:3000">
        Login with GitHub
      </a>
    </div>
  );
};

export default GithubAuthButton;

