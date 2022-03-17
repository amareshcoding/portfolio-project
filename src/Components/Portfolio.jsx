import './Portfolio.css'
import { Navbar } from './Navbar/Navbar'
import { Front } from './About/Front'
import { About } from './About/About'
import {TechStack} from './TechStack/TechStack'
import { Projects } from './Projects/Projects'

export const Portfolio=()=>{
     
   
     return(<div  className="Portfolio">
          <Navbar/>
          <Front/>
          <About/>
          <TechStack/>
          <Projects/>
     </div>)
}