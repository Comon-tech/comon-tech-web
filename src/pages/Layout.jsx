import { React, useState, useEffect }  from 'react';
import { useSpring, animated } from 'react-spring';
import {  Link } from "react-router-dom";
import { FaCode, FaGitAlt, FaXTwitter, FaBullseye,FaRegEnvelope,FaBuilding, FaLinkedinIn, FaDiscord, FaGamepad } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";

import { redirect } from 'react-router-dom';
import Footer from '../../Components/Footer';

import openCommunicationImage from '../assets/open-communication.png';
import women4cyber from '../assets/women4cyber.png';
import ComonTechIcon from '../assets/comontech-logo-removebg.png'
import OutBard from '../assets/outbard-transformed.png'
import PyTextBin from '../assets/pytextbin-transformed.png'
import numQuest from '../assets/numquest-transformed.png'
import ComonStudy from '../assets/comonstudy.png'


const Layout = () => {
  const [authenticated, setAuthenticated] = useState(false);
   // Animated props
   const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    transform: 'translateX(0%)',
    from: { transform: 'translateX(-100%)' },
    config: { duration: 1000 },
  });



  useEffect(() => {
    // Check if the user is authenticated in localStorage
    const storedAuth = localStorage.getItem('authenticated');
    if (storedAuth) {
      setAuthenticated(true);
      redirect('/home'); //

		console.log("User is authnticated")
    }
  }, []);


  return (
    <>
      <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-[#fff] to-[#bc87c9] p-4">
        <div className="container mx-auto">
          <a href="/" className="text-white font-bold text-xl"><img src={ComonTechIcon} width={150}></img></a>
        </div>
      </nav>

      {/* Main Content */}
      <div className=" h-[100vh] flex items-center justify-center bg-gradient-to-r from-[#fff] to-[#bc87c9] text-slate-900">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">vibrant community dedicated to empowering self-taught developers.</h1>
          <p className="text-lg mb-8">
            Welcome to our community of self-taught developers!
          </p>
          { authenticated ? (
            <button className="bg-white text-fuchsia-900 py-2 px-4 rounded-full">
            <a href="/home">Get Started</a>
          </button>
          ) : (
            <button className="text-white  bg-[#67009c] py-2 px-4 rounded-full">
            <a href="/login">Get Started</a>
          </button>
          ) }
          
        </div>
      </div>

          {/* Our Services */}
          <div  className="h-[100vh] flex flex-col md:flex-row items-center justify-center p-4 bg-[#e1e1e1]">
            <div className='flex flex-col items-center justify-between'>
           <div className='flex flex-row items-center'>
            
            <FaHandsHelping size={100} color="#f11b00" className="text-3xl mr-2" />
            {/* devider */}
            <div className='bg-[#f11b00] w-2 h-12 mx-2 p-1'></div>
            <p className="text-lg text-center">Our Services: Free resources **Our recources are offered by the community members and shared among the community**, mentorship, and a collaborative network.</p>
           </div>

            <button className="bg-[#bc87c9] text-white py-2 px-4 rounded-full">
            <a href="/#">Learn More</a>
          </button>
            </div>

            <div>
          <img src={women4cyber}></img>
          </div>

          </div>


          {/* Our Goal */}
          <div  className="h-[100vh] flex flex-col md:flex-row items-center justify-center p-4 ">
          <div>
          <img src={openCommunicationImage}></img>
          </div>

            <div className='flex flex-col items-center justify-between'>
           <div className='flex flex-row items-center'>
            <p className="text-lg text-center">Our Goal is to Foster a supportive, inclusive and collaborative environment for self-taught developers to thrive.</p>
            <div className='bg-[#ff174e] w-2 h-12 mx-2 p-1'></div>
            {/* devider */}
            <FaBullseye size={100} color="#ff174e" className="text-3xl mr-2" />
           </div>

            <button className="bg-[#ff174e] text-white py-2 px-4 rounded-full">
            <a href="/#">Learn More</a>
          </button>
            </div>
          </div>

          {/* our projects */}
          <div  className="flex flex-col  bg-gradient-to-l from-[#fff] to-[#bc87c9] items-center justify-center mb-4">
            <FaBuilding className="text-3xl mr-2 " />
           <div >
           <p className="text-lg">Our projects</p>
           </div>
           
          

            <div className="text-center items-center justify-center flex flex-col md:flex-row m-3">
            <div className=" m-3 rounded-xl">
              <a href="https://outbard.streamlit.app">
            <img src={OutBard} className=" md:w-[200px] border-2 border-[#292230] m-3 rounded-xl">
            </img>
                OutBard
                </a>
                </div>

                <div className=" m-3 rounded-xl">
                <a href="http://pytextbin.comon.tech">
            <img src={PyTextBin} className=" md:w-[200px] border-2 border-[#292230] m-3 rounded-xl"></img>
            PyTextBin
                </a>
                </div>

            <div className=" m-3 rounded-xl">
            <a href="comon-tech.github.io/numQuest/">
            <img src={numQuest} className=" md:w-[200px] rounded-xl"></img>
            numQuest
            </a>
            </div>

            <div className=" m-3 rounded-xl">
            <a href="comon-study.streamlit.app">
            <img src={ComonStudy} className=" md:w-[200px] border-2 border-[#292230 rounded-xl"></img>
            ComonStudy
            </a>
            </div>

            <div className=" m-3 rounded-xl">
            <img src={OutBard} className=" md:w-[200px] border-2 border-[#292230]  rounded-xl"></img>
            </div>

            <div className=" m-3 rounded-xl">
            <img src={PyTextBin} className=" md:w-[200px] border-2 border-[#292230]  rounded-xl"></img>
            </div>

            </div>
             <div>
            
            <p className="text-lg text-center">Building a strong community with like-minded organizations.</p>
           </div>
          
          </div>

          {/* Our Partners */}
          <div  className="flex flex-col  items-center justify-center mb-4">
            <FaBuilding className="text-3xl mr-2" />
           <div >
           <p className="text-lg">Our Partners</p>
           </div>
           <div>
            <p className="text-lg text-center">Building a strong community with like-minded organizations.</p>
           </div>
          
          </div>

          {/* Contact Information */}
          <div  className="flex items-center justify-center mb-4">
          

            <FaRegEnvelope className="text-3xl mr-2" />
            <p className="text-lg">Contact Us at support@comon.tech</p>
          </div>

     

      {/* Footer */}
      <Footer />
    </div>
    </>
  )
};

export default Layout;
