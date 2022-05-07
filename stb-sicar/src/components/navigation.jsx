import { useEffect } from "react"

export const Navigation = (props) => {
  useEffect(() => {
   
    let lastScrollPosition = 0;
    const navbar = document.querySelector('.navbar-default');
    const logo = document.querySelector('img');
    window.addEventListener('scroll', function(e) {
      lastScrollPosition = window.scrollY;
      
      if (lastScrollPosition > 300){
        navbar.classList.add('navbar-dark');
        logo.src="img/logoSicar.png"
      }
      else{
        navbar.classList.remove('navbar-dark');
       
        logo.src="img/logob.png"
      }
    });
  }, []);
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
          
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          
         <img className='navbar-brand page-scroll' src="img/logoSicar.png" alt="" />
         
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
              Nous connaitre
              </a>
            </li>
            <li>
              <a href='#fonds' className='page-scroll'>
              nos fonds
              </a>
            </li>
            <li>
              <a href='#responsabilite' className='page-scroll'>
              Responsabilité
              </a>
            </li>
           
            <li>
              <a href='#testimonials' className='page-scroll'>
              Equipe
              </a>
            </li>
            
            <li>
              <a href='#team' className='page-scroll'>
              Partenaires
              </a>
            </li>
          
         
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
