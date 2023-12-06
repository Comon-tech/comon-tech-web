// GithubAuthButton.js

// import React, {useState} from 'react';
import { AiFillGithub } from "react-icons/ai";

const GithubAuthButton = () => {
//const [callback_url, setCallback_url] = useState(window.location.href)

  return (
	  <div className="flex flex-row bg-black gap-3 text-white p-4 border-[grey] border-2  rounded-2xl">

	  <AiFillGithub size={23}/>

	  <a href='https://github.com/login/oauth/authorize?scope=user&client_id=bd675e28f2391ed38be5'>Login with GitHub</a>
	  </div>

  );
};

export default GithubAuthButton;

