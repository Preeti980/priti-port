
import Navbar from './components/Navbar'

import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Cerficates from './components/pages/certficates/Certificates'
import Project from './components/pages/projects/Project'
import Contact from './components/pages/contact/Contact'
import Education from './components/pages/education/Education'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useTheme } from './context/ThemeProvide'
function App() {
  
  const {theme}=useTheme();
  return (
    <>
    
    <div id={theme}>

   <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Cerficates/>
   <Project/>
   <Education/>
   <Contact/>
   </div>
   <div className="footer pb-3 ms-3 mt-3 ">
        
        <h4 className='text-center'> 
        Made with 👩‍🦰 Priti &copy;2024-2025  
        </h4>
      
       </div>
    </>
  )
}

export default App
