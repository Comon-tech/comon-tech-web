import './App.css'
import { HiOutlineTemplate } from "react-icons/hi";
import { CgMusicNote } from "react-icons/cg";
import { TbDeviceMobileCode } from "react-icons/tb";
import { BiNetworkChart } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineCode, AiFillGithub } from "react-icons/ai";
import { FaCode, FaGitAlt, FaXTwitter, FaLinkedinIn, FaDiscord } from "react-icons/fa6";
function App() {

  return (
    <main className="bg-gradient-to-r from-slate-950 to-fuchsia-900 md:h-[100vh] text-[white] flex  flex-col md:items-center  md:p-24">
      <div className=" place-items-center ">
      <h1 className="text-5xl">COMON Tech</h1>
      <p className="text-center text-txl m-5">Chose a Category</p>
      
      </div>


	  <div className="mt-5 rounded-3xl bg-indigo-600 bg-opacity-10 grid grid-cols-2 gap-4 md:grid-cols-8 md:gap-2  md:p-24 ">
      
	       <div className="m-3 md:m-5 flex flex-col justify-center items-center">
        <HiOutlineTemplate size={80}/>
        <p className="text-center text-txl">Web</p>
        </div>
 
        <div className="m-3 md:m-5">
        <CgMusicNote size={80}/>
        <p className="text-center text-txl">Music</p>
        </div>

        <div className="m-3 md:m-5">
        <TbDeviceMobileCode size={80}/>
        <p className="text-center text-txl">Mobile</p>
        </div>

        <div className="m-3 md:m-5">
          <a href="/network">
        <BiNetworkChart size={80}/>
        <p className="text-center text-txl">Network</p>
          </a>
        </div>

        <div className="m-3 md:m-5">
        <AiOutlineCalendar size={80}/>
        <p className="text-center text-txl">Events</p>
        </div>

        <div className="m-3 md:m-5"> 
        <AiOutlineCode size={80}/>
        <p className="text-center text-txl">Terminal</p>
        </div>

        <div className="m-3 md:m-5">
        <FaCode size={80}/>
        <p className="text-center text-txl">Code</p>
        </div>

        <div className="m-3 md:m-5">
        <FaGitAlt size={80}/>
        <p className="text-center text-txl">Git</p>
        </div>
        
      </div>
      
 
<div className="flex flex-row ">

<div className="m-3 md:m-5">
  <a href="https://github.com/Comon-tech">
        <AiFillGithub size={23}/>
  </a>
        </div>

        <div className="m-3 md:m-5">
          <a href="https://www.linkedin.com/in/c-o-m-o-n/">
        <FaLinkedinIn size={23}/>
          </a>
        </div>

        <div className="m-3 md:m-5">
          <a href="https://twitter.com/C_o_m_o_n">
        <FaXTwitter size={23}/>
          </a>
        </div>

        <div className="m-3 md:m-5">
          <a href="https://discord.gg/jhudAmVd">
        <FaDiscord size={23}/>
          </a>
 
 </div>

        
</div>

    </main>
  )
}




export default App
