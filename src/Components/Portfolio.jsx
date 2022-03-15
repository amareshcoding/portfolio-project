import './Portfolio.css'
import { Navbar } from './Navbar/Navbar'
import { Front } from './About/Front'
import { About } from './About/About'


export const Portfolio=()=>{
     return(<div className="Portfolio">
          <Navbar/>
          <Front/>
          <About/>
     </div>)
}