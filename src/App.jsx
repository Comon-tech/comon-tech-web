import Home from './pages/Home'
import AppPage from './pages/AppPage'
import Web from './pages/Web'
import Game from './pages/Game'

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import Network from './pages/Network';
import Events from './pages/Events';
import Terminal from './pages/Terminal';
import Code from './pages/Code';
import Git from './pages/Git';
import Layout from './pages/Layout'

function App() {

  return (

	  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="web" element={<Web />} />
          <Route path="game" element={<Game />} />
          <Route path="app" element={<AppPage />} />
          <Route path="network" element={<Network />} />
          <Route path="events" element={<Events />} />
          <Route path="terminal" element={<Terminal />} />
          <Route path="code" element={<Code />} />
          <Route path="git" element={<Git />} />
	   <Route path="login" element={<Login />} />
	  {/*    <Route path="*" element={<NoPage />} />
        */}
		</Route>
    
      </Routes>
    </BrowserRouter>

  )
}




export default App
