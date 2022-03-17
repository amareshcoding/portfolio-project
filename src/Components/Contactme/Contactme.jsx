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
                              <img src="https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1647366326~hmac=5c53bac88c83745c90a16b77c78973f6" alt="LinkedIn" />
                         </a>
                         <a href="https://github.com/amareshcoding" rel="noreferrer" target="_blank" >
                              <img className='git-icon-contact' src="https://cdn-icons.flaticon.com/png/128/3291/premium/3291695.png?token=exp=1647366379~hmac=dd84455b12f0687c255f16d04bc82429" alt="GitHub" />
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
                    <p className='copyright'>© 2022 - Template developed by Amaresh Barik</p>
               </div>
          </div>
     )
}