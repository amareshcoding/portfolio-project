import './Portfolio.css'
import { Navbar } from './Navbar/Navbar'
import { Front } from './About/Front'
import { About } from './About/About'
import {TechStack} from './TechStack/TechStack'
import { Projects } from './Projects/Projects'
import { Contactme } from './Contactme/Contactme'

export const Portfolio=()=>{
     
   
     return(<div  className="Portfolio">
          <Navbar/>
          <Front/>
          <About/>
          <TechStack/>
          <Projects/>
          <Contactme/>
     </div>)
}