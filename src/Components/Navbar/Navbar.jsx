import './Navbar.css'

export const Navbar =()=>{
     // NavBar Sticky
//    var navlist = document.getElementById("nav");
//    var sticky = navlist.offsetTop;
//    /* Function to stick the nav bar */
//    function myFunction() {
//      if (window.pageYOffset >= sticky) {
//        navlist.classList.add("sticky");;
//      } else {
//        navlist.classList.remove("sticky");
//      }
//    }
     return(
          <div className="Navbar">
               <div className='Navbar-div-1'>
                    <a className='Navbar-h5' href="#Navbar">
                         <img className='nav-logo' src="nlogo1.png" alt="" />
                    </a>
               </div>
               <div className='Navbar-div-2'>
                    <a className='Navbar-h5' href="#About">ABOUT</a>
                    <a className='Navbar-h5' href="#TechStack">SKILLS</a>
                    <a className='Navbar-h5' href="#Projects">PROJECTS</a>
                    <a className='Navbar-h5' href="#Contactme">CONTACT</a>
               </div>
          </div>
     )
}