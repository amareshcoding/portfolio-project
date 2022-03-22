import './About.css'

export const About=()=>{
     return(
          <div className="About" id='About' >
               <div className="About-left-div">
                    <div className="About-img-div">
                         <img className='About-img' src="Img.png" alt="" />
                    </div>
               </div>
               <div className="About-right-div">
                    <h1 className='About-me'>ABOUT ME</h1>
                    <p className="About-about-p">I am Amresh Barik a Full Stack Developer having expertise in the MERN stack, I am good at problem-solving and very collaborative.   I am gearing up for an exciting career in tech in which I can collaborate with teammates and learn in global work environments.</p>
                    <div className='About-resume-btn-div'>
                         <a href="https://drive.google.com/file/d/1sUJOWBMOKxrPan_Jlq-Maktoa4yXtzaH/view?usp=sharing" rel="noreferrer" target="_blank">
                         <button id='Resume' className='About-resume-btn'>Resume</button>
                         </a>
                    </div>
                    <br />
                    <br />
                    <div className='About-icon-div'>
                         <a href="https://www.linkedin.com/in/amareshbarik/" rel="noreferrer" target="_blank">
                              <img src="linkedin.png" alt="LinkedIn" />
                         </a>
                         <a href="https://github.com/amareshcoding" rel="noreferrer" target="_blank" >
                              <img className='git-icon' src="github.png" alt="GitHub" />
                         </a>
                         <a href="https://medium.com/@amaresh.acb" rel="noreferrer" target="_blank">
                              <img src="medium.png" alt="Medium" />
                         </a>
                         <a href="https://twitter.com/AmareshIndia22?t=v6RUKqSJ2STeOHGGgYVqcQ&s=09" rel="noreferrer" target="_blank">
                              <img src="twitter.png" alt="Twitter" />
                         </a>
                         <a href="https://www.quora.com/profile/Amaresh-Barik-10" rel="noreferrer" target="_blank">
                              <img src="quora.png" alt="Quora" />
                         </a>
                    </div>
               </div>
          </div>
     )
}