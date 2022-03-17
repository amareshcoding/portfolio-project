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
                    <p className="About-about-p">I am Amresh Chandra Barik, I am a ful stack developer having experties in MERN stack,  I am gearing up for an exciting career in tech in which I can collaborate with teammates and learn in global work environments.</p>
                    <div className='About-resume-btn-div'>
                         <a href="https://drive.google.com/file/d/1sUJOWBMOKxrPan_Jlq-Maktoa4yXtzaH/view?usp=sharing" rel="noreferrer" target="_blank">
                         <button id='Resume' className='About-resume-btn'>Resume</button>
                         </a>
                    </div>
                    <br />
                    <br />
                    <div className='About-icon-div'>
                         <a href="https://www.linkedin.com/in/amareshbarik/" rel="noreferrer" target="_blank">
                              <img src="https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1647366326~hmac=5c53bac88c83745c90a16b77c78973f6" alt="LinkedIn" />
                         </a>
                         <a href="https://github.com/amareshcoding" rel="noreferrer" target="_blank" >
                              <img className='git-icon' src="https://cdn-icons.flaticon.com/png/128/3291/premium/3291695.png?token=exp=1647366379~hmac=dd84455b12f0687c255f16d04bc82429" alt="GitHub" />
                         </a>
                         <a href="https://medium.com/@amaresh.acb" rel="noreferrer" target="_blank">
                              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968906.png" alt="Medium" />
                         </a>
                         <a href="https://twitter.com/AmareshIndia22?t=v6RUKqSJ2STeOHGGgYVqcQ&s=09" rel="noreferrer" target="_blank">
                              <img src="https://cdn-icons.flaticon.com/png/128/3256/premium/3256013.png?token=exp=1647366550~hmac=974a79b8eb3642d7888b16a703554a64" alt="Twitter" />
                         </a>
                         <a href="https://www.quora.com/profile/Amaresh-Barik-10" rel="noreferrer" target="_blank">
                              <img src="https://cdn-icons.flaticon.com/png/128/3256/premium/3256033.png?token=exp=1647366681~hmac=63198b56e6686a05f364fee7658c46f8" alt="Quora" />
                         </a>
                    </div>
               </div>
          </div>
     )
}