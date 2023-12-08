import Home from './pages/Home'
import AppPage from './pages/AppPage'
import Web from './pages/Web'


import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Login from './pages/Login';

function App() {

  return (

	  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="web" element={<Web />} />
	   <Route path="app" element={<AppPage />} />

	   <Route path="login" element={<Login />} />
	  {/*    <Route path="*" element={<NoPage />} />
        */}
		</Route>
      </Routes>
    </BrowserRouter>

  )
}




export default App
