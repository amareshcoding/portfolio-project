import './Contactme.css'

export const Contactme =()=>{

     return(
          <div className="Contactme" id='Contactme'>
               <div >
                    <h2 className='Contactme-me'>CONTACT</h2>
                    <h4>Would you like to connect with me? Awesome!</h4>
               </div>
               <div className='Contactme-right-box'>
                    <div className='name-address'>
                         <h4>Amaresh Barik</h4>
                         <h4>Balasore, Odisha</h4>
                    </div>
                    <div className='Contactme-icon-div'>
                    <a href="https://www.linkedin.com/in/amareshbarik/" rel="noreferrer" target="_blank">
                              <img src="linkedin.png" alt="LinkedIn" />
                         </a>
                         <a href="https://github.com/amareshcoding" rel="noreferrer" target="_blank" >
                              <img className='git-icon-contact' src="github.png" alt="GitHub" />
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
                    <p className='copyright'>© 2022 - Template developed by Amaresh Barik</p>
               </div>
          </div>
     )
}