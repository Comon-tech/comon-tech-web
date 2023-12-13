import Modal from 'react-modal';

import { Link } from "react-router-dom";
import { useState } from 'react';
import { HiOutlineTemplate } from "react-icons/hi";
import { GrGamepad } from "react-icons/gr";
import { TbDeviceMobileCode } from "react-icons/tb";
import { BiNetworkChart } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineCode, AiFillGithub } from "react-icons/ai";
import { FaCode, FaGitAlt, FaXTwitter, FaLinkedinIn, FaDiscord, FaGamepad } from "react-icons/fa6";
Modal.setAppElement('#root');

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
function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);

function MyModal(){
	return(

	 
<Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
		style={customStyles}
		
      >
	  </Modal>
    
	);
}
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <main className="bg-gradient-to-r from-slate-950 to-fuchsia-900 md:h-[100vh] text-[white] flex  flex-col md:items-center  md:p-24">
      <div className=" place-items-center ">
      <h1 className="text-5xl">COMON Tech</h1>
      <p className="text-center text-txl m-5">Chose a Category</p>
      
      </div>


	  <div className="mt-5 rounded-3xl bg-indigo-600 bg-opacity-10 grid grid-cols-2 gap-4 md:grid-cols-8 md:gap-2  md:p-24 ">
      
	       <div className=" m-3 md:m-5 flex flex-col justify-center items-center cursor-pointer hover:text-[grey]  ">
            <Link to="/web">
        <HiOutlineTemplate size={80} />

	  <p className="text-center text-txl">Web</p>
      </Link>

	  </div>
 
        <div className="m-3 md:m-5  cursor-pointer hover:text-[grey]">
        <Link to="/game">
        <GrGamepad size={80}/>
        <p className="text-center text-txl">Game</p>
        </Link>
        </div>



        <div className="m-3 md:m-5 cursor-pointer hover:text-[grey]">
            <Link to="/app">
        <TbDeviceMobileCode size={80}/>
        <p className="text-center text-txl">Mobile</p>
        </Link>
        </div>

        <div className="m-3 md:m-5 cursor-pointer hover:text-[grey]">
          <Link to="/network">
        <BiNetworkChart size={80}/>
        <p className="text-center text-txl">Network</p>
        </ Link>
        </div>

        <div className="m-3 md:m-5 cursor-pointer hover:text-[grey]">
        <Link to="/events">
        <AiOutlineCalendar size={80}/>
        <p className="text-center text-txl">Events</p>
        </Link>

        </div>

        <div className="m-3 md:m-5 cursor-pointer hover:text-[grey]"> 
        <Link to="/terminal">
        <AiOutlineCode size={80}/>
        <p className="text-center text-txl">Terminal</p>
        </Link>
        </div>

        <div className="m-3 md:m-5 cursor-pointer hover:text-[grey]">
        <Link to="/code">
        <FaCode size={80}/>
        <p className="text-center text-txl">Code</p>
        </Link>

        </div>

        <div className="m-3 md:m-5 cursor-pointer hover:text-[grey]">
        <Link to="/git">
        <FaGitAlt size={80}/>
        <p className="text-center text-txl">Git</p>
        </Link>
        </div>
        
      </div>
      
 
    



<div className="flex flex-row ">

<div className="m-3 md:m-5 cursor-pointer hover:text-[grey]">
  <a href="https://github.com/Comon-tech">
        <AiFillGithub size={23}/>
  </a>
        </div>

        <div className="m-3 md:m-5 cursor-pointer hover:text-[grey]">
          <a href="https://www.linkedin.com/in/c-o-m-o-n/">
        <FaLinkedinIn size={23}/>
          </a>
        </div>

        <div className="m-3 md:m-5 cursor-pointer hover:text-[grey]">
          <a href="https://twitter.com/C_o_m_o_n">
        <FaXTwitter size={23}/>
          </a>
        </div>

        <div className="m-3 md:m-5 cursor-pointer hover:text-[grey]">
          <a href="https://discord.gg/jhudAmVd">
        <FaDiscord size={23}/>
          </a>
 
 </div>

        
</div>
	  	  </main>
  )
}




export default Home
