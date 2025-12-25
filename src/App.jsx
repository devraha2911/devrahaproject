import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './components/Home/home'
import Navbar from './components/Home/Navbar/Navbar.jsx'
import Footer from './components/Home/Footer/Footer'
function App() {


  return (
   <>
      <Navbar/>
      <Outlet/>
      <Footer/>
   </>
  )
}

export default App
